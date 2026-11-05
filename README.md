# Website concepts

Client homepage concepts prepared for GitHub Pages. The Policy Circle is the first client. Rules for future work are in [AGENTS.md](AGENTS.md).

## Preview locally

```sh
python3 scripts/build.py
python3 -m http.server 4173 --bind 127.0.0.1 --directory _site
```

Open http://127.0.0.1:4173/concepts/the-policy-circle/.

## Client addresses

| Client | Homepage | Review alternatives |
| --- | --- | --- |
| The Policy Circle | https://paoloresteghini.github.io/concepts/the-policy-circle/ | https://paoloresteghini.github.io/concepts/the-policy-circle/directions.html |

Banner studies: append `version-two/banners.html` to the client base URL. Living Circle is the provisional homepage entry. A final direction and banner remain unselected. Existing staging destinations are preserved.

## Current release status

Repository setup and local preview preparation do not publish these addresses. The workflow runs only by manual dispatch after publication is authorized. GitHub Pages must be configured with GitHub Actions as its source.

Each client folder is self-contained, including its typography and font files. Policy Circle retains its existing typography as instructed. Client-specific design rules belong inside that client folder; root rules cover the common delivery workflow.

Research, internal reviews, skill observations, and generated output are ignored. Three selected presentation thumbnails are retained inside the Policy Circle previews folder. The build publishes only the files registered in concepts.json and adds noindex metadata. The public repository and any deployed pages are publicly accessible.

## Add another client

1. Create `<client-slug>/` with `index.html`, client-local styles/scripts/assets, and a short README recording audience, goal, sources, and review status.
2. Add an entry to concepts.json with the source, stable slug, entry page, and explicit file patterns. New concepts remain local until intentionally committed and published.
3. Build and review at the actual `/concepts/<client-slug>/` base path. Check phone and desktop layouts, keyboard, reduced motion, interactions, console errors, asset rights, and deployment contents.
4. Commit and push. After publication authorization, run the Publish concepts workflow on main. Verify the Actions run and public HTTPS address before sharing it.

The workflow follows [GitHub's custom Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). To roll back an authorized deployment, revert the relevant source commit, rebuild and verify, then dispatch the workflow again.
