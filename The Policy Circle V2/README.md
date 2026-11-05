# The Policy Circle: revised homepage directions

Local vanilla HTML/CSS/JavaScript design prototypes. No staging or production changes.

Start the comparison:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173/.

Version 2 banner studies are at `/version-two/banners.html`: Three Columns, The Statement, The Horizon, and D Blue Forum. D adapts Version 4's hierarchy on deep navy, refined into one joined pale-blue feature canvas with consistent image-to-text joins. The stacked Briefing option was rejected and replaced with a continuous photographic panorama. Switch the live complete pages in the review board, or open each at full size. Each shares the Living Circle lower homepage, including the restored full Events section. The previous `/version-two/` opening remains available until a banner is selected.

All four banner studies now share the staging site's navigation labels, order, destination links, Search and Donate. Explore Issues opens a photographic mega menu on desktop and a scrollable disclosure on phones. Shared markup is in `version-two/shared-header.html`, with `navigation.css` and `navigation.js`; the four static pages contain identical copies for this no-build prototype. Navigation itself preserves banner and lower content; the separately authorized Events restoration is noted below. Navigation source and review evidence are in `research/navigation-source.json` and `reviews/navigation/`.

The full Events section is restored across A/B/C/D: the existing upcoming-events message plus 2025 Summit and Move the Needle: A Civic Playbook for Artificial Intelligence. Their original square posters, titles and destinations are preserved. Shared markup/styles are `version-two/events-section.html` and `events.css`; evidence is under `reviews/events/`. This authorized correction supersedes earlier lower-page preservation claims for Events only.

Current A/B/C/D pages share a native fade-in-up scroll reveal layer in `version-two/scroll-reveal.js`, covering content from hero through footer. It plays once per reading unit, preserves visible defaults, supports Pause Motion/reduced motion and keyboard focus, and is excluded from older reference directions. Motion evidence is under `reviews/scroll-reveal/`.

Active directions:

- `/version-two/`: The Living Circle, the user's preferred visual direction, revised around three current priorities.
- `/version-four/`: The Open Forum, a new bright architectural composition.
- `/version-five/`: The Civic Current, a new photographic current-affairs index.

The Civic Journal and Common Ground are retired from the active comparison. Their local source remains in version-one/version-three only as historical work.

The core lesson from TPC Main: expose three manually curated editorial features at the top, currently Data Centers, Policy Circles, and CLER. All three photographs, titles, and direct actions are visible together at desktop targets. They are flexible editorial slots, not the separate Inform/Equip/Connect method tabs. On mobile they appear in normal flow before the method introduction.

Reusable design truth is in `BRAND.md`, `brand-guidelines.json`, `DESIGN.md`, and `.impeccable/design.json`. Main-project source evidence is in `research/TPC-MAIN-LEARNINGS.md`. Revision review notes, captures, and objective first-viewport/interaction evidence are in `reviews/revision-two/`.

Each active implementation completed two lead critique/improvement rounds. All use real source content, imagery, and destinations with self-hosted assets and no build step. Program/signup/donation actions lead to existing destination pages; no forms or payments were submitted.

A final direction is still for the user to choose. Bespoke WordPress theme implementation, editable CMS integration, production font entitlements, full integration/browser acceptance and deployment are subsequent work.
