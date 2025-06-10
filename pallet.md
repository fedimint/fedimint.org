## Palette overview

| Role | Name | Hex | RGB | Notes |
| --- | --- | --- | --- | --- |
| Primary-1 | Fedimint Light | #29CBFF | 41 , 203 , 255 | Matches the inner ring highlight in the logo. Fresh, optimistic. |
| Primary-2 | Fedimint Core | #00A8FF | 0 , 168 , 255 | Central brand blue, ideal for buttons & links. |
| Primary-3 | Fedimint Deep | #0060D9 | 0 , 96 , 217 | Darker anchor for hover / focus states. |
| Accent-A | Mint Glow | #23D5AB | 35 , 213 , 171 | Nods to “mint”, balances the blues. |
| Accent-B | Cypher Orange | #F7931A | 247 , 147 , 26 | A respectful wink to Bitcoin; use sparingly for callouts or warnings. |
| Accent-C | Purple Signal | #725BFF | 114 , 91 , 255 | Futuristic, playful highlight for graphs or progress bars. |
| Neutral-900 | Midnight | #0A0D13 | 10 , 13 , 19 | Background for dark mode, evokes cypherpunk roots. |
| Neutral-700 | Slate | #1E222B | 30 , 34 , 43 | Card / surface on dark backgrounds. |
| Neutral-300 | Fog | #BFC5D2 | 191 , 197 , 210 | Dividers, secondary text on light mode. |
| Neutral-50 | Snow | #F7F9FC | 247 , 249 , 252 | Light mode background. |

### Brand gradients

```
Fedimint Gradient 1 (logo)
↳  #29CBFF  ➜  #0060D9

Fedimint Gradient 2 (call-to-action)
↳  #00A8FF ➜ #725BFF

Cypher-Mint Gradient (background strip)
↳  #23D5AB ➜ #00A8FF
```

## Usage guidance

### 1. Primary actions
Use Primary-2 (#00A8FF) as the default button fill on light backgrounds, switching to Primary-3 for hover and active. On dark backgrounds invert: use Primary-1 fill with Primary-2 text.

### 2. Navigation & links
Text links: Primary-2 normal ‑> underline on hover.
Active nav item: Primary-3 text over Snow or Slate background.

### 3. Accent strategy
• Mint Glow (#23D5AB) for success or positive state.
• Cypher Orange (#F7931A) for warnings, seed-phrase alerts, or Bitcoin-specific data.
• Purple Signal (#725BFF) adds friendliness in charts or empty-state illustrations.

### 4. Backgrounds
• Light mode: Snow (#F7F9FC) base, Fog dividers, Slate text.
• Dark mode: Midnight base, Slate cards, Fog text.

### 5. Accessibility
Pair text in Primary-3 or Slate over Snow for WCAG AA large-text compliance.
On dark mode, text in Snow or Mint Glow over Midnight surpasses 4.5:1 ratio.

## Quick CSS variables

```css
:root {
  /* Primary */
  --fm-blue-light: #29CBFF;
  --fm-blue: #00A8FF;
  --fm-blue-deep: #0060D9;

  /* Accents */
  --fm-mint: #23D5AB;
  --fm-orange: #F7931A;
  --fm-purple: #725BFF;

  /* Neutrals */
  --fm-midnight: #0A0D13;
  --fm-slate: #1E222B;
  --fm-fog: #BFC5D2;
  --fm-snow: #F7F9FC;
}
```

### Example button (light mode)

```html
<button class="cta">Deposit e-cash</button>
```

```css
.cta{
  background: var(--fm-blue);
  color: var(--fm-snow);
  border-radius: 6px;
  padding: 0.7rem 1.2rem;
  transition:.15s;
}
.cta:hover{background: var(--fm-blue-deep);}
```

## Rationale

• Blues preserve the original logo’s trust-centric vibe.
• A minty green and playful purple soften the “cypherpunk” aesthetic, keeping the project approachable.
• Bitcoin orange creates a subtle narrative connection without overwhelming the brand.
Together the palette balances security roots with a friendly, modern face—ideal for an open-source e-cash system welcoming both developers and everyday users.