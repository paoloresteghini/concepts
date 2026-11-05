"""Build an allowlisted static Pages artifact, then verify local references."""

import html
import json
import re
import shutil
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "_site" / "concepts"
ROBOTS = '<meta name="robots" content="noindex,nofollow,noarchive">'


class References(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []

    def handle_starttag(self, tag, attrs):
        self.urls.extend(value for key, value in attrs if key in {"src", "href"} and value)


def check_links():
    failures = []
    for file in OUTPUT.rglob("*"):
        if file.suffix not in {".html", ".css"}:
            continue
        content = file.read_text()
        if file.suffix == ".html":
            parser = References()
            parser.feed(content)
            urls = parser.urls
        else:
            urls = re.findall(r"url\(\s*['\"]?([^)'\"\s]+)", content)
        for url in urls:
            parts = urlsplit(url)
            if parts.scheme or parts.netloc or not parts.path:
                continue
            target = (file.parent / unquote(parts.path)).resolve()
            if parts.path.startswith("/") or not target.is_relative_to(OUTPUT.resolve()):
                failures.append(f"{file.relative_to(OUTPUT)}: invalid base path: {url}")
            elif not target.exists():
                failures.append(f"{file.relative_to(OUTPUT)}: missing: {url}")
    if failures:
        raise SystemExit("Build failed:\n" + "\n".join(failures))


def main():
    shutil.rmtree(OUTPUT.parent, ignore_errors=True)
    OUTPUT.mkdir(parents=True)
    (OUTPUT / ".nojekyll").touch()
    (OUTPUT / "index.html").write_text(
        '<!doctype html><html lang="en"><head><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1">'
        f'{ROBOTS}<title>Website concepts</title></head>'
        '<body><main><h1>Website concepts</h1><p>Open your direct concept link to review your homepage.</p></main></body></html>'
    )
    slugs = set()
    for concept in json.loads((ROOT / "concepts.json").read_text()):
        slug = concept["slug"]
        if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", slug) or slug in slugs:
            raise SystemExit(f"Invalid or duplicate slug: {slug}")
        slugs.add(slug)
        source = (ROOT / concept["source"]).resolve()
        if not source.is_relative_to(ROOT):
            raise SystemExit("Source must be inside the repository")
        destination = OUTPUT / slug
        for pattern in concept["include"]:
            for file in source.glob(pattern):
                if not file.is_file() or not file.resolve().is_relative_to(source):
                    raise SystemExit(f"Invalid source file: {file}")
                target = destination / file.relative_to(source)
                target.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(file, target)
        if not (destination / concept["entry"]).is_file():
            raise SystemExit(f"Missing entry for {slug}")
        # The imported review board contains links to internal working notes.
        if slug == "the-policy-circle":
            board = destination / "index.html"
            content = board.read_text()
            content = re.sub(r'<a href="(?:research/|reviews/|brand-guidelines\.json)[^"]*">.*?</a>', '', content)
            content = content.replace('reviews/revision-two/final/', 'previews/')
            content = content.replace('Local design prototypes for review.', 'Design concepts for review.')
            (destination / "directions.html").write_text(content)
        entry = concept["entry"]
        if entry != "index.html":
            path = html.escape(entry.removesuffix("index.html") if entry.endswith("/index.html") else entry, quote=True)
            (destination / "index.html").write_text(
                '<!doctype html><html lang="en"><head><meta charset="utf-8">'
                f'{ROBOTS}<meta http-equiv="refresh" content="0;url={path}">'
                f'<title>{html.escape(concept["name"])}</title></head>'
                f'<body><a href="{path}">View homepage concept</a></body></html>'
            )
        for page in destination.rglob("*.html"):
            content = page.read_text()
            if ROBOTS not in content:
                content = content.replace('</head>', f'{ROBOTS}</head>')
            content = content.replace('href="../">View all concepts', 'href="../directions.html">View all concepts')
            content = content.replace('\u2014', ',')
            page.write_text(content)
    check_links()
    print(f"Built and validated {len(slugs)} client concept(s) in {OUTPUT}")


if __name__ == "__main__":
    main()
