# Stirrups homepage: Through the trees

Selected frontend-only direction, September 2026. No application templates, routes, or backend code are changed. The page is plain HTML with inline CSS and vanilla JavaScript, with local photography in assets/.

## Design plan

Through the trees: brand navy #1c2c42, pale blue #e5ebf2, chalk #faf9f5 and supporting blue #46658b. Cormorant Garamond display with Geist body copy and interface. Full-bleed layered arrival, centred headline, overlapping horizontal booking panel, overlapping arrival photography, an asymmetric horizontal room gallery and a continuous paper canvas. The memorable gesture is moving through an oak canopy towards the actual hotel.

## Review against the brief

The selected homepage prioritises booking and uses the real property. Restrained colour responds to the reference feedback. Generated imagery is confined to the hero and is illustrative, requiring property-owner approval before production. No fabricated reviews, awards, room prices, or amenities.

## Scope and behaviour

Booking forms validate dates, show a clear summary and link to the current Guestline booking service. No reservation is created in a prototype. Live provider parameters are based on the hotel's existing Guestline integration, but production integration and live inventory must be tested separately. Membership benefits, external content and seasonal availability remain the authority of the live website.

The homepage supports mobile navigation, keyboard interaction, visible focus, custom date controls, reduced motion, and a persistent mobile booking shortcut. The index opens the selected homepage directly.

## Sources

- https://www.stirrupshotel.co.uk/ (hotel facts, photography and information architecture, checked 9 September 2026)
- https://www.stirrupshotel.co.uk/uploads/pages/home-banner-image.webp (source for the generated hero)
- https://tag.guestline.net/static/js/tag.js (current provider endpoint and query names)
- Local public/common/logo-white-head.png (existing horse brand mark)

The generated base removes foreground trees and reconstructs obscured details. It is not documentary photography. The generated oak layer uses a white background with multiply blending, because the initial generator output did not contain an alpha channel. Both move separately in CSS, with scroll and pointer motion disabled for reduced-motion preferences.

## Through the trees, revision 2

The approved hero and booking panel are preserved. Below them, photographs and large typography share a continuous canvas. An inset afternoon tea photograph crosses the lounge image; the room gallery changes scale and baseline; the wedding photograph crosses the end of the dining scene; the final garden photograph extends into the footer.

The room gallery supports native scrolling, swipe, mouse dragging, buttons and keyboard navigation. Dining uses the existing hotel restaurant film, followed by afternoon tea and the garden. On sufficiently large desktop screens, the viewport pins while photographs wipe horizontally and complete headlines fade between scenes. Tabs jump directly to each scene and a visible link skips ahead. Document wheel and touch scrolling stay native.

Mobile and reduced-motion preferences use a directly controlled dining panel without pinning. The restaurant film does not autoplay on mobile, reduced-motion or data-saving settings; its play/pause control remains available. Offscreen playback pauses. The local guide uses native expandable details.

Additional source: public/videos/eat_drink_banner.mp4, copied to assets/dining-film.mp4. This is existing hotel footage, not generated video.

## Brand palette correction

The selected direction uses the existing brand navy, #1C2C42, verified in resources/sass/include/_header.scss and _footer.scss. Typography, buttons, footer, controls, borders and tinted overlays now use navy and supporting blues. The approved composition, natural photography and interactions are retained.

## Existing navigation and new More menu

Desktop labels and destinations match the live main navigation: Home, Sleep, Eat & Drink, Special Occasions, Meetings, Weddings and More, with Stirrups Club and a booking action. Mobile also preserves Special Offers and The Hotel. The live mega-menu destinations and blog article are retained, regrouped into Around the Hotel and Make more of your visit.

Desktop More is a nonmodal disclosure: the main navigation remains usable, link hover or focus updates a photographic preview, and Escape, More, the close button or the backdrop dismiss it. Mobile uses a modal navigation drawer with an expandable More group, a sticky close area, focus wrapping and a booking action. The menu respects reduced-motion preferences. Checked at 320, 390, 768, 1180, 1200 and 1440 pixels.

Geist is served locally as a variable WOFF2, sourced from https://github.com/vercel/geist-font with its SIL Open Font License included in assets/LICENSE-geist.txt. The serif display headings are retained.

## Proactive invitation

A full-height wedding photograph sits beside the invitation, date and action on desktop, with a shorter photograph above the copy on mobile. The photograph is the original live campaign asset: https://www.stirrupshotel.co.uk/uploads/popups/wedding-showcase-featured-image.webp. Campaign fields were verified at https://www.stirrupshotel.co.uk/popup. The CTA remains https://www.stirrupshotel.co.uk/weddings#weddingOpenDay.

## Scroll choreography

Arrival text and photography enter from opposing sides; body copy and room imagery rise gently; wedding photographs and copy are staggered; the local guide and footer fade into view. Desktop movement is limited to 24px vertically or 36px horizontally, with shorter movement on mobile and small delays between related elements. This adds rhythm without replacing the approved layout or its cinematic dining transitions.

### Local guide motion

The local guide now progresses through four destinations with a six-second dwell. The matching photographs crossfade, while equal-height accordion panels open and close together to preserve the composition and scroll position. Hover, keyboard focus and the pause control let guests read at their own pace. Reduced-motion settings keep the guide manual. Destination photography comes from the existing Stirrups location page.
