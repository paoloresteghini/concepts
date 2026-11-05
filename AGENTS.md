# Client website concepts

## Session rules

- Never use em dashes in new code, comments, copy, documentation, or messages.
- Invoke task-observer at the start of task-oriented sessions. Check OPEN observations for each skill before using it.
- Preserve existing client work and uncommitted edits. Inspect the client's README, BRAND.md, DESIGN.md, and available review evidence before changing a concept.

## Purpose and scope

Build persuasive, working homepage concepts for proactive outreach or requested client reviews. Each client gets a direct GitHub Pages URL, with its own brand and assets. A concept is a design demonstration. Production CMS work, production deployment, and client outreach require their own authorization.

## Structure

- Register clients in concepts.json with a unique, lowercase, hyphenated slug, source directory, entry page, and explicit file allowlist.
- Stable client URL: https://paoloresteghini.github.io/concepts/<client-slug>/.
- New clients should use <client-slug>/ as their source folder. Preserve the existing Policy Circle folder as the first imported concept.
- Keep each client's images, fonts, styles, and scripts inside that client's folder. Do not share client branding or link to another client's concept.
- Keep research and review evidence locally, outside the deployment allowlist. Never publish credentials, private correspondence, analytics exports, or confidential materials. This repository is public, including its history.
- Prefer plain HTML, CSS, and JavaScript. Add a framework or build dependency only when the concept needs it. GitHub Pages has no application server.
- All local URLs must work under /concepts/<client-slug>/ and on nested pages. Prefer relative asset paths. No localhost URLs, machine paths, root-relative asset paths, or SPA history fallback assumptions.

## Design and behavior

- Establish the client, audience, visitor goal, editorial priorities, source content, brand evidence, and intended review page before designing.
- Use actual client content and suitable imagery. Preserve source content and source destinations. Flag uncertain claims in working notes rather than inventing facts, results, or testimonials.
- Confirm image and font rights before publishing. Keep license notices with open fonts. Locally borrowed proprietary fonts must not enter the public repository or deployment without confirmed rights.
- Preserve materially different directions until Paolo chooses. A visual preference does not establish final selection or publication approval.
- Direct the stable client URL to a complete homepage. Put comparison boards on separate review URLs. Record which entry is provisional and why.
- Keep the homepage presentation focused on the client's brand. Explain concept status on the comparison page or in the handoff, without inserting developer implementation details into the design.
- Make navigation and controls work with pointer, touch, and keyboard. Support Escape, visible focus, reduced motion, and content visibility when JavaScript fails.
- Scope CSS and JavaScript to the client. Keep motion restrained and purposeful. Use independent reveal targets when desktop groups become tall phone feeds.
- Forms, signups, donations, and other transactions should link to established client destinations or clearly demonstrate a local interaction. Do not capture personal data, submit forms, process payments, or add analytics without authorization.
- Add noindex metadata to published concept HTML. This is an indexing request, not privacy or access control. Do not rely on an obscure URL for confidentiality.

## Verification and release

1. Run python3 scripts/build.py. The build uses only explicit allowlists, validates local HTML/CSS links, and fails on missing assets.
2. Serve _site at the real /concepts/ base path using the README command. Check desktop, tablet, and phone layouts, navigation, scrolling, keyboard, reduced motion, and the browser console.
3. Check the complete deployment artifact for private material, asset rights, broken references, and unintended client cross-links. Recheck changed clients without modifying unrelated clients.
4. Commit and push reviewable work. Pushing source does not publish the website. The Pages workflow is manual.
5. Publish only when Paolo explicitly authorizes publication. Dispatch the workflow on main, then verify its successful deployment and the public HTTPS client URL before reporting it live.
6. Report local, committed, pushed, deployed, and verified status accurately. Include the direct homepage URL and optional comparison URL. Never send the client a message without authorization.

## Current first concept

The Policy Circle source is The Policy Circle V2/. Its preferred Living Circle homepage is the provisional entry, with final direction and banner selection still pending. Preserve the other active directions and banner studies. Paolo has instructed that the folder retain its existing typography. Preserve its font files and do not silently replace them.
