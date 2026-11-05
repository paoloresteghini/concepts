# The Policy Circle: design interpretation

Extracted from the November 4, 2026 staging homepage. This is a design working reference, not an official brand manual.

## Source truth

- Mission: a national, nonpartisan 501(c)(3) that informs, equips, and connects women to be more impactful citizens.
- Mechanism: accessible policy resources, meaningful conversations, practical civic leadership learning, and a supportive national community.
- Voice: informed, constructive, welcoming, capable, specific. Policy before partisan spectacle. Women as participants and leaders, never decorative lifestyle models.
- Core language: “Equipping women to lead in their communities.” “It Starts With You.” “Get informed. Join the conversation. Strengthen your community.” “Inform. Equip. Connect.”
- Sources: https://policycirclstg.wpenginepowered.com/?review=nov4-final, https://www.thepolicycircle.org/why/, https://www.thepolicycircle.org/about/.

## Observed tokens

```json
{
  "color": {
    "navy": "#033147",
    "rust": "#CD6C33",
    "sand": "#B3997C",
    "white": "#FFFFFF",
    "blue": "#00557D",
    "neutral": "#C6C1BA"
  },
  "font": {
    "observedBody": "Montserrat",
    "observedBrandDisplay": "brandon-grotesque",
    "observedExpressiveItalic": "the-seasons"
  },
  "logo": "assets/logo.svg",
  "photo": "authentic organization gatherings, conversations, coaching and member stories",
  "shape": "existing hand-drawn circle logo, restrained rules, editorial imagery",
  "contentPriority": ["mission", "participation", "policy", "leadership", "member proof", "connection"]
}
```

## Generative rules

- Keep the actual logo geometry and proportions. Navy, rust, and sand provide continuity across different compositions.
- Navy is the authority and grounding color. Rust gives action and energy. Sand is warm support. Do not use small white text on rust without a contrast adjustment.
- Expressive italic type is a selective human voice. Body copy remains spacious and highly readable. Display text uses sentence case when it improves warmth.
- Photography must carry the human mechanism. Use real source imagery and accurate alt text. Crop around faces deliberately.
- Use original copy in research/home-copy.txt. Reorder freely. Added interface labels may explain actions, but must not invent outcomes, testimonials, metrics, or dated events.
- Inform, Equip, Connect can become a working navigation or exploration system. A selected item must change meaningful content, with keyboard and touch parity.
- Overlap should join sections into a visual argument: an image crossing a rule, a story attached to its program, a shared color plane. Never overlap body text with unreadable imagery.
- Motion follows a visual idea, with visible content at rest. Prefer native scrolling, clip reveals, image parallax, changing panels, and moving typographic planes. No scroll hijacking. Reduced motion renders the complete story with immediate state changes.
- Typography, rhythm, first viewport composition, navigation, transitions, and content architecture must change between concepts. A palette swap is not a new direction.
- No fabricated operational forms. Newsletter and program actions should point to the organization's actual destination pages.
- Mobile is an authored composition, not the desktop layout squeezed. Minimum practical control size 44px; visible focus; semantic landmarks and headings; no horizontal document overflow.
- No em dashes, gradient text, glass cards, decorative analytics, equal-card page scaffolds, or empty filler labels above headings.

## Research implications

The official Our Why page ties civic knowledge to confidence, community, and practical leadership. It explicitly names personal and economic freedom. Preserve that organizational character without turning the homepage into campaign rhetoric. The official site contains older quantitative claims; the prototypes deliberately avoid importing those figures into the new homepage.

Existing events area is an empty state: “New events will be announced soon. Explore recent conversations and find ways to connect.” Preserve this honest state.

The homepage's Ewelina image is a pre-existing site asset with an AI-indicative filename. Reusing it preserves incumbent content and does not independently authenticate its photographic provenance.

## Editorial hierarchy correction, November 4
The top surface serves three manually curated timely priorities, not a full-screen mission followed by hidden priorities. Data Centers, Policy Circles and CLER are the current trio. All must be visible together on desktop with real imagery and direct actions. They are independently editable slots that may later feature other current resources, events, recruitment, video pages, or impact stories. Keep Inform/Equip/Connect as the method section rather than substituting it for the three editorial features. The Living Circle is the user's preferred visual direction; Civic Journal and Common Ground are rejected from the active comparison.
