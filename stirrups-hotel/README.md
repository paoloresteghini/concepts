# Stirrups: Through the trees

Open index.html to go directly to the selected homepage, or open 01-through-the-trees.html. No build, package installation or backend is required. Keep the assets folder next to the HTML file. Fonts and photography are local, so the design itself also works offline.

The homepage uses the hotel’s existing brand navy (#1C2C42), with the approved layered hotel arrival, overlapping photography, a native horizontal room gallery, a pinned restaurant film and dining scenes, and a connected garden-to-footer composition.

## Booking and links

The date and guest controls work. Invalid dates are blocked, changing arrival adjusts departure when needed, and Find your stay opens a summary. See rooms & rates opens the hotel's Guestline booking service in a separate tab with the selected dates and party size. This does not reserve a room. Room availability, prices and a complete live-provider integration are outside the prototype scope.

Content links lead to the hotel's current website. No signup forms submit data from this prototype, and no tracking or third-party booking scripts run inside them.

## Assets and refinement

All CSS and JavaScript are inline within the homepage HTML file. Change the page directly, with no build process. Supporting images and fonts live in assets/. Original generated PNGs are retained alongside optimised WebP versions for further refinement. Local fonts are distributed under the included SIL Open Font Licenses.

The hero scene is illustrative AI artwork derived from the real hotel photograph. The background and oak canopy are separate generated assets, composited with multiply blending and moved independently. The generator reconstructed obscured architecture; review the scene with the hotel before any production use.

See DESIGN-NOTES.md for design rationale, source URLs and the scope of the homepage.

## Browser verification

Verified in Chrome on 9 September 2026:

- Responsive widths: 320, 390, 768, 1024 and 1440 pixels, with no horizontal page overflow.
- Desktop and phone screenshots inspected, including images throughout the homepage.
- All local images loaded successfully.
- Booking arrival/departure validation, automatic departure adjustment, party-size summary and provider query parameters.
- Room tabs, arrow-key / Home navigation, mobile menu opening, Escape closing and focus restoration.
- Local navigation targets and asset references checked.

Concept one revision 2 also passed room-gallery buttons and keyboard navigation, pinned dining scene controls and skip link, film pause, mobile tab switching, and an actual Chrome reduced-motion run that disabled pinning and parallax while retaining scene controls. Reduced-motion styles and JavaScript handling are included. Safari and Firefox, live inventory, payment and the production site have not been tested or changed.

## Navigation refinement

Concept one now follows the existing site navigation. Open More on desktop for the redesigned photographic mega menu. On mobile, open the menu button and expand More for the same additional destinations. Keyboard focus, Escape, both focus-wrap directions, photo preview changes, closing and mobile booking focus were verified in Chrome.

## Readability refinement

The selected direction now uses 16px desktop navigation, 16px body copy and arrival signature text, and 14px supporting labels and captions. Larger typography carries through booking controls, the mega menu, dining controls and footer. At widths up to 1320px, navigation uses the drawer to preserve readable link sizes. Mobile arrival and celebration copy now takes the space it needs in normal document flow while photography retains its overlaps.

Concept one uses locally hosted Geist for body copy, navigation and controls, paired with Cormorant Garamond display headings.

## Custom date picker

Arrival and departure open a styled calendar using the page's Geist and navy palette. Desktop shows two months; mobile shows one month in a bottom sheet. Choose arrival, then departure, and Apply dates to update the booking form. Closing or Escape discards unconfirmed edits. The picker supports arrow keys, Home/End, Page Up/Page Down, keyboard focus wrapping and a stay-length summary. Native date fields are retained as the no-JavaScript fallback. Cross-month dates, a leap-year stay, disabled past dates, cancellation, focus return and Guestline query parameters were verified in Chrome.

## Wedding Showcase invitation

The original proactive popup is redesigned as a photographic invitation. The live popup endpoint was checked on 9 September 2026: campaign 24, Wedding Showcase, 13 September 2026, 11am to 3pm, using the original photograph and CTA destination. This static prototype does not call the production popup API.

The invitation appears after seven seconds, waits while another dialog or control has focus, and records viewing in sessionStorage and dismissal in localStorage. Close, Escape, clicking the backdrop and Maybe another time all dismiss it. Its automatic campaign expiry follows the source's display-until date, through 12 September 2026 in British Summer Time.

Add &showcase=preview to replay the invitation for design review regardless of dismissal or expiry. Preview mode does not change dismissal storage. Add &showcase=off to suppress it during other design reviews. Mobile layouts, focus wrapping, Escape, deferred appearance during date selection and persistent dismissal were verified in Chrome.

## Scroll reveals

The selected homepage now has individually staggered scroll entrances: soft fades, movement from the left or right, and upward reveals for images and supporting text. Each element enters once as it comes into view, including rooms revealed by swiping the horizontal gallery. The existing hero parallax and pinned dining sequence retain their own motion. Booking and navigation stay immediately visible.

Entrances use individual CSS translate to preserve the photographs' independent parallax transforms. Keyboard focus immediately reveals the target and its containing reveal group. Without JavaScript, all content remains visible; reduced-motion preferences disable reveal motion, and print output shows every element. Desktop, mobile, horizontal gallery entry and an actual reduced-motion Chrome run were checked.

## Automatic room gallery

The room gallery advances after a five-second reading pause, then loops from the last room to the first. It pauses on hover, keyboard focus, touch/dragging, manual navigation, when offscreen, when the browser tab is hidden, or while a dialog is open. A pause/resume button beside the arrows provides explicit control. Reduced-motion preferences disable automatic playback. Manual arrows, native swiping and dragging are retained. Advancement, hover pause/resume, looping, manual pause, touch handling and reduced-motion behavior were verified in Chrome.

## Automatic local guide

The local guide cycles through four destinations every six seconds while visible. It pauses on hover, keyboard focus, touch, hidden tabs and open dialogs, with an explicit pause/resume control. Reduced-motion preferences disable autoplay and transitions. Each destination has a matching photograph and caption, with crossfades between them. Equal-height content panels animate together to keep the overall accordion height steady; native disclosures remain available without JavaScript. Arrow Up/Down and Home/End navigate the destinations.

Windsor Castle, Ascot Racecourse and LEGOLAND Windsor photographs are copied from the hotel’s existing location page, checked 9 September 2026: https://www.stirrupshotel.co.uk/about/location . Source files are uploads/sections/windsor-castle-featured-image.png, ascot-racecourse-featured-image.png and legoland-windsor-featured-image.png. The fourth image uses the existing Stirrups garden photograph.

Verified in the rendered desktop and 390px mobile preview: destination image matching, automatic advancement, hover hold and resume, manual pause, rapid keyboard selection, exactly one expanded panel after transitions, and no horizontal overflow. Keyboard changes preserved scroll position and the accordion height (577px desktop, 594.125px mobile).

## Rounded-edge alternative

Use the fixed Rounded edges switch at the bottom left to compare the original treatment with rounded photographs, pill-shaped buttons and softer booking and menu panels. The choice is remembered locally and reflected in the URL: edges=rounded or edges=original. Explicit URL choices take priority, so either treatment can be shared.

The arrival section uses the original public/common/head-white.svg as a very light navy background watermark. The small horse beside the family-owned introduction has been removed. The header brand mark remains in place.
