---
name: The Policy Circle, active homepage directions
description: Living Circle is preferred; Open Forum and Civic Current are new alternatives awaiting selection.
colors:
  navy: "#033147"
  rust: "#cd6c33"
  sand: "#b3997c"
  white: "#fff"
  blue: "#00557d"
  ice-blue: "#b9cddb"
  deep-ink: "#031e2b"
  living-deep: "#062a38"
  living-cream: "#f2eee7"
  living-paper: "#e9e2d7"
  living-secondary: "#d2e0e4"
  living-accent: "#d7c4a7"
  forum-pale: "#eaf1f5"
  forum-dark-rust: "#a64c23"
  forum-selected: "#c8dce8"
  current-pale: "#e9f1f5"
  current-rule: "#9cb5c3"
  current-secondary: "#d0dfe7"
  current-row-hover: "#104358"
typography:
  living-display:
    fontFamily: "brandon-grotesque, sans-serif"
    fontSize: "clamp(46px, 4.4vw, 68px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-.025em"
  living-headline:
    fontFamily: "brandon-grotesque, sans-serif"
    fontSize: "clamp(60px, 6.7vw, 94px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-.035em"
  living-body:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.85
  forum-headline:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(34px, 3.25vw, 47px)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-.035em"
  forum-body:
    fontFamily: "brandon-grotesque, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  current-display:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "53px"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-.035em"
  current-headline:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "clamp(36px, 3.8vw, 56px)"
    fontWeight: 500
    lineHeight: 1.14
    letterSpacing: "-.035em"
  current-body:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  square: "0"
  circle: "50%"
spacing:
  living-opening-gutter: "4.6vw"
  forum-opening-gutter: "3.5%"
  forum-section-gutter: "6%"
  current-gutter: "clamp(24px, 4.3vw, 72px)"
  mobile-gutter: "24px"
components:
  living-round-link:
    textColor: "{colors.living-cream}"
    height: "62px"
  living-arrow-disc:
    textColor: "{colors.living-cream}"
    rounded: "{rounded.circle}"
    width: "62px"
    height: "62px"
  forum-action:
    textColor: "{colors.navy}"
    padding: "9px 0"
  forum-donate:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    padding: "10px 17px"
  forum-donate-hover:
    backgroundColor: "{colors.blue}"
  forum-policy-selected:
    textColor: "{colors.forum-selected}"
    padding: "23px 16px 23px 22px"
  forum-preview-reading:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    padding: "25px 30px"
  current-solid-link:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    padding: "15px 21px"
    rounded: "{rounded.square}"
  current-solid-link-hover:
    backgroundColor: "{colors.blue}"
  current-brief-row:
    textColor: "{colors.white}"
    padding: "17px 0"
  current-brief-row-hover:
    backgroundColor: "{colors.current-row-hover}"
---

# Design System: The Policy Circle

## Overview

**Creative North Star: "Three doors into civic action"**

Three active local prototypes share the source identity and editorial purpose while retaining distinct visual worlds. The Living Circle (`version-two`) is the user's preferred world, revised so current features lead. The Open Forum (`version-four`) and The Civic Current (`version-five`) are fresh alternatives awaiting the user's selection. The Civic Journal (`version-one`) and Common Ground (`version-three`) are rejected and retired from the active comparison. Their prior system is archived in `research/revision-two/previous-DESIGN.md` and its JSON companion.

Living Circle is an immersive navy photographic exhibition with humanist headlines, selective Seasons italic, and cinematic chapter changes. Open Forum is a bright architectural gallery with connected photographs and white or pale-blue reading planes. Civic Current is a crisp current-affairs index with unequal linked rows, icy blue, navy, and Montserrat. Preserve these identities separately when extending a direction.

**Key Characteristics:**

- Three current editorial features visible together at the top on desktop.
- Real organization imagery, truthful source copy, and direct destinations.
- Independent visual worlds connected by the established brand identity.
- Native scroll, readable content at rest, keyboard access, and reduced motion.
- Semantic content regions ready for a later editable WordPress theme.

This is a source-derived record of the final active `styles.css`, `index.html`, and `script.js` files, `assets/fonts.css`, and the Living Circle font import. Research authority is `research/TPC-MAIN-LEARNINGS.md`, `research/revision-two/DIRECTIONS.md`, `PRODUCT.md`, `BRAND.md`, and `brand-guidelines.json`. Direction notes supply intent; the final CSS cascade supplies implemented values. This documentation pass did not repeat browser checks. Local prototypes are implemented; direction selection, WordPress implementation, and deployment remain pending.

## Colors

### Primary

Source Navy grounds all three directions. Source Rust marks invitations and selected details. Source Blue is the Open Forum donation hover and Civic Current solid-action hover. Civic Current's dark row-hover tone is a prototype extension for policy list interaction.

### Secondary

Source Sand supplies continuity and quiet accents. Source Ice Blue is established theme evidence from TPC Main, used directly in Open Forum and Civic Current. It is not a new concept color. Living Circle's lighter sand accent and blue-tinted secondary ink serve text on navy. Open Forum uses a deeper rust extension for readable emphasis on white and a light blue extension for selected policy controls on navy.

### Neutral

White is Open Forum's main reading ground and a recurring contrast plane in Civic Current. Living Circle's cream policy surface and warmer paper story surface are its own extensions, not the ground for either new direction. The Forum and Current pale blues differ in the code and stay separately named. Deep Ink supports the opening Living Circle seams and reading text on rust; Living Deep grounds its lower leadership section. Current Rule and Current Secondary organize its dark policy workspace.

**The Source and Extension Rule.** Source navy, rust, sand, white, blue, and ice blue remain distinct from implemented concept tints, reading inks, and pale surfaces. Source neutral (`#C6C1BA`) remains evidence in the brand reference and is not an active reused token here. Bodoni Moda is a retired version-one extension, not active brand typography.

**The Reading Plane Rule.** Give copy a stable readable surface. Living Circle uses deeper ink for small newsletter and caption text on rust; its dark panels use light blue-tinted reading ink. Photographic shading supports contrast and must remain independent of imagery and editable copy.

## Typography

The brand families are self-hosted with `font-display: swap`. Brandon Grotesque, Montserrat, and selective The Seasons italic are the active vocabulary. The shared font stylesheet still contains Bodoni files for the retired version, which does not authorize their use in active directions.

| Direction | Display and mission | Reading and supporting type |
| --- | --- | --- |
| Living Circle | Regular Brandon. Opening mission uses `clamp(34px,3.15vw,48px)` at 1.02; lead feature uses `living-display`. Lower headings retain the larger `living-headline` role. Seasons italic adds a restrained human accent. | Montserrat body at 16px and 1.85. Opening summary is 16px/1.75; secondary feature actions are 13px. Full CLER program name is 13px/1.5, 1.45 on mobile. |
| Open Forum | Montserrat medium with moderate `forum-headline` scale. Mission uses `clamp(29px,2.85vw,42px)` at 1.22. Feature titles are 34px, 25px, and 24px in the default desktop cascade. | Brandon base 18px/1.55; content paragraphs typically 16-17px. Ruled actions are 14-15px. Full CLER program name is 14px/1.4 after the final override. |
| Civic Current | Montserrat medium throughout headings. Mission is 27px/1.23; Data Centers is `current-display`; other opening titles are 32px and 34px. Lower headings use `current-headline`. | Montserrat 16px base, paragraphs commonly 1.8. Feature actions are 13px/600. Full CLER program name is 14px/1.65 after the final override. |

These roles are representative reused values, not a replacement for responsive overrides. Living Circle reading columns commonly cap at 440-470px; Open Forum paragraphs cap at 65ch; Civic Current caps paragraphs at 70ch. Preserve literal spaces around forced line breaks. Open Forum's italic mission phrase has .16em inline-end breathing room for the font's overhang.

**The Directional Type Rule.** Living Circle uses Brandon display with Montserrat reading; Open Forum pairs Montserrat display with Brandon reading; Civic Current uses Montserrat for both. Do not transfer the retired serif journal or heavy atlas typography into either new direction.

## Layout

**The Three Features Rule.** On desktop, Data Centers, Policy Circles, and CLER must be discoverable together with real imagery, complete headlines, and direct actions. At 1440 x 1000 all three images, headings, and actions are visible; at 1280 x 900 all three headings and actions remain in the opening composition. No carousel, autoplay, hover, or selector may be required to discover one. These are manually curated editorial features, separate from the later Inform/Equip/Connect method.

| Direction | Desktop composition | Mobile composition |
| --- | --- | --- |
| Living Circle | Compact navy masthead and mission above a 1.45:1 feature grid, with 52%/48% supporting rows. Data Centers extends behind a conversation window crossing its seam; CLER steps down on the shared deep-ink plane. Opening height is normally `clamp(520px,58svh,620px)`, with a 500px compact-height variant. | At 780px the three features become normal flow, with final minimum heights 350px, 240px, and 220px. The mission contracts to 30px, 29px below 380px. Motion control follows the three features. All appear before method content. |
| Open Forum | A 12-column architectural gallery, six 92px rows, 28px gutters. Data Centers spans seven columns; the two human windows occupy five. White and pale-blue captions cross image edges. Outer opening caps at 1680px. | At 700px features stack. The conversation image keeps its full-width landscape composition and a caption overlapping its edge by only 16px. CLER retains a portrait alongside its reading plane. All three precede the method. |
| Civic Current | Masthead 85px plus mission 111px. Unequal feature rows are 254px, 196px, and 196px, totaling 646px. Hover/focus changes distribution while keeping the total constant. Images cross seams; reading columns alternate direction. | At 650px features enter ordinary flow. Data Centers and conversation imagery sit above their reading planes. CLER remains a bounded portrait/text split. Shared 24px gutters align the lead copy and later content. |

Living Circle switches its menu at 1050px, method tabs at 780px, and refines below 380px; its remaining source refinements include 1100px and wide 1600/1700px rules. Open Forum uses 1250px, 1000px, 700px, 380px, and 1600px refinements. Civic Current uses 1250px, 1000px, and 650px. Follow each direction's cascade instead of imposing one shared breakpoint system.

**WordPress handoff:** all three are static prototypes. Preserve three manually ordered repeatable editorial slots with independently editable image, alt, category, headline, optional summary, destination URL, and CTA text. Image and title must remain independently selectable. Current category display varies by composition; none of the slots is a fixed taxonomy or fixed program assignment. Future slots may contain events, video, briefs, recruitment, or member impact stories.

| Current binding | Image | Source headline and destination |
| --- | --- | --- |
| Policy brief | `assets/data-centers.jpg` | Data Centers; `Explore the issue`; `/briefs/data-centers/`. Summary: Every day, nearly every American uses data centers without even realizing it. |
| Policy Circles | `assets/circles.webp` | Meaningful Conversations. Stronger Communities.; `Learn About Policy Circles`; `/policy-circles/`. |
| CLER | `assets/community.jpg` | Your Next Step into Leadership; `Explore CLER`; `/cler/`. Supporting program name: Civic Leadership Engagement Roadmap (CLER). |

The current prototype destinations use `https://policycirclstg.wpenginepowered.com`. Preserve that source binding until an authorized CMS/environment mapping changes it. Keep lower regions independently editable: mission, ordered method entries, brief relationships, CLER/military content, member story, events state, newsletter, navigation, support action, and footer. Method entry fields include image/alt, title, copy, CTA, and URL. Brief queries need image/alt, title, optional excerpt, and permalink; story and program blocks need separate copy, image, caption, and links. These are proposed CMS mappings, not implemented fields.

## Elevation & Depth

The three systems are flat by default. Depth comes from photograph/caption overlap, tonal planes, square image apertures, and controlled stacking. Living Circle uses dark photographic shading; Open Forum uses stable white and pale-blue reading planes; Civic Current uses full-width color rows and seams. No reusable card-shadow scale exists. Open Forum's mobile menu has a local ambient shadow (`0 20px 25px rgba(3,49,71,.08)`). Living Circle's leadership heading explicitly has no text shadow.

**The Flat Plane Rule.** Treat overlap as a relationship between imagery and its reading surface. Keep text and controls legible at rest and throughout transitions. Local menu depth does not establish elevated cards elsewhere.

## Shapes

Images, content planes, fields, and solid actions use square corners. Living Circle's outlined arrow discs are circular, 62px desktop and 52px in lower mobile sections; its opening lead arrow is 42px, then 38px on mobile. The circle logo keeps its actual geometry. Open Forum uses fine one-pixel rules and rectangular caption planes. Civic Current uses aligned rectangular rows and underlined fields, with a narrow rust edge at the CLER portrait. Do not homogenize them into rounded cards or pills.

## Components

### Editorial features

The first three features remain visible at rest and retain direct links. Living Circle makes each photographic feature one link; its action is a visual span within that link. Open Forum keeps headline and action links, with duplicate image links removed from the tab order and accessibility tree. Civic Current stretches each destination over its reading plane and outlines the row on focus. Crop conversation scenes and portraits intentionally; retain face breathing room and meaningful alt fields. Empty alt is deliberate for duplicate decorative imagery in Open Forum, not a requirement for all editorial photos.

### Buttons and text links

Living Circle uses ruled text links and outlined circular arrow actions. Hover rotates the lower arrow disc and fills it with sand; opening actions translate their arrow. Open Forum uses ruled actions with 44px minimum height and a square navy Donate action. Civic Current uses 45px ruled links and square navy solid links with 54px base minimum height, reduced to 52px on mobile. Hover translates arrows and deepens a solid action to source blue. All directions expose visible keyboard focus and practical touch targets.

### Navigation

Menus expose `aria-expanded` and `aria-controls`, close after destination selection, and close on Escape with focus returned to the trigger. Open Forum also closes on an outside click. Main destinations retain Events before About us and explicit Leadership programs naming. Desktop and mobile navigation remain semantic links; skip links reveal on focus. Living Circle uses a rust 3px ring with 7px offset, Forum a 2px deeper-rust ring with 5px offset and a light ring on navy, Current a rust 3px ring with 6px offset.

The A/B/C/D Living Circle banner studies share `navigation.css`, `navigation.js`, and identical header markup from `shared-header.html`. Source order is Explore Issues, Policy Circles, Leadership Programs, Events, About Us, Connect With Us, Search, Donate. Explore Issues pairs Policy Hub with three photographic resource links: Data Centers, Protecting Children Online, and AI Insights. Other disclosures preserve source child destinations; Search uses the source GET endpoint. The navy header opens pale-blue panels, with pointer, keyboard, Escape, outside/focus dismissal, pause, and reduced-motion support; at 1180px and below the same content uses a scrollable disclosure. These component choices do not select a banner layout.

### Method and policy controls

Living Circle's desktop method is a sticky photograph beside 76svh reading chapters, synchronized by native scroll. Below 780px JavaScript enhances method links into roving-focus tabs with Left/Right/Home/End; selected image, word, copy, and destination change together. Without JavaScript all essays remain readable. Its policy links preview on hover/focus while remaining direct links on touch.

Open Forum's complete method essays stay visible while pointer/focus changes the companion image and caption. Its separate four-brief policy preview uses a proper tablist with click, arrows, Home/End, selected state, labelled panel, and updated image/title/copy/URL. The preview reading plane overlaps the image and changes without changing the upper editorial features.

Civic Current's method is an always-readable list. Its labelled search filters the four featured briefs by title, announces a result count, exposes a clear control, supports Escape to clear, and shows an honest no-results state linked to the full policy hub. It searches the local featured subset, not the entire organization library.

### Motion and responsive states

All versions preserve native scrolling and complete visible content as the default. The shared easing is `cubic-bezier(.16,1,.3,1)`. Living Circle coordinates 1.5s opening apertures, small desktop scroll offsets capped at 22px, image crossfades, and a working Pause/Resume control. Pause suspends authored animation and disables transitions; reduced motion also disables animation/transitions/parallax, removes smooth scrolling, hides the redundant pause control, and makes desktop method chapters compact and unpinned.

The current A/B/C/D studies additionally use the explicitly requested shared scroll-reveal layer: once per coherent reading unit, 650ms fade-in-up, 24px desktop or 18px at 780px and below, with sibling delays capped at 120ms. Pending content remains visible without a hidden-ready state. Pause and reduced motion settle active reveals immediately; focus, print, fast scroll, restoration, and unsupported APIs preserve resting visibility. Attached image/caption units stay together, inactive method panels retain their existing visibility, and sticky ancestors and shared menus are excluded. Older/reference pages do not load this layer. These motion details do not select a banner composition.

Open Forum coordinates 1.5/1.7/1.9s directional image apertures with a 1.7s caption settle. Native scroll applies small opposed photograph offsets and desktop caption offsets. Its script gates preview/image animations on the system motion preference; reduced motion removes scroll offsets and CSS movement. Civic Current redistributes row heights over .75s on desktop pointer/focus, with no hidden priorities or total-height change; tablet uses fixed rows. It also has a native-scroll library plane and a one-time leadership image/ice-plane transition. Reduced motion fixes the rows and disables image transforms, the plane animation, and smooth scrolling. Mobile retains authored normal flow in every direction.

### Content truth

Policy previews bind to the four supplied briefs: Energy and the Environment, Data Centers, Protecting Children Online, and Foreign Policy: The Middle East. Preserve actual source destinations and avoid fabricated excerpts. The member story remains Ewelina Connolly's candidacy narrative and source permalink. The source Ewelina asset has an AI-indicative filename; reuse does not independently authenticate photographic provenance. Across A/B/C/D, Events retains the source upcoming empty state, “New events will be announced soon,” and restores both full recent-event posters with linked titles: 2025 Summit (`https://policycirclstg.wpenginepowered.com/events/2025-summit/`) and Move the Needle: A Civic Playbook for Artificial Intelligence (`https://policycirclstg.wpenginepowered.com/events/civic-playbook-artificial-intelligence/`), followed by See all to the source Events archive. Newsletter actions open `/subscribe/`; no local subscription form is operational.

## Do's and Don'ts

### Do:

- Do keep all three curated editorial features visible together in the desktop opening with imagery, full headlines, and direct actions.
- Do preserve source copy, real destinations, logo geometry, image provenance, and independent editable content fields.
- Do extend one active direction at a time using its type pairing, surfaces, motion, and responsive order.
- Do keep content visible at rest and preserve keyboard, touch, focus, selected states, menu state, and reduced motion.
- Do keep the source brand palette separate from proposed visual extensions and retain ice blue as source evidence.

### Don't:

- Don't substitute Inform/Equip/Connect tabs for the three editorial priorities or hide priorities in a carousel.
- Don't restore the retired Civic Journal or Common Ground as active options or transfer their visual identities into the new alternatives.
- Don't imply final selection, implemented WordPress fields, deployment, or launch approval.
- Don't cover copy or actions with photographs, oversized banners, overlap, or animation.
- Don't invent metrics, testimonials, events, policy claims, operational forms, or provenance assurances.
- Don't promote incidental defects or superseded CSS into reusable design rules.
