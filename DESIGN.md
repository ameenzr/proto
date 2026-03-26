# Design System: Celestial Industrial

## 1. Overview & Creative North Star

### The Creative North Star: "Mission Critical Reliability"
This design system is not a consumer-grade interface; it is a tactical instrument. It draws inspiration from the high-stakes, utilitarian beauty of aerospace engineering and deep-space telemetry. The visual language balances the vast, crushing weight of a dark void with the sharp, high-contrast precision of a mission-control readout.

To move beyond a "template" feel, this system rejects traditional symmetric grids in favor of **Intentional Asymmetry**. Information should feel like it was "plotted" rather than "pasted." By using overlapping elements, technical line-work, and a typography scale that favors dramatic impact over standard sizing, we create an editorial experience that feels authoritative and bespoke.

---

## 2. Colors

The palette is rooted in the `background` (#131313)—a deep, light-absorbing void. Accents are used sparingly to denote "Safety" and "Action."

### The "No-Line" Rule
**1px solid borders for sectioning are strictly prohibited.** To separate content, you must use background tonal shifts. For example, a module sitting on the base `surface` should be defined by a background of `surface-container-low`. Boundaries are felt through color blocks, not drawn with lines.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of technical components. 
- **Base Layer:** `surface` (#131313)
- **Primary Content Blocks:** `surface-container` (#201f1f)
- **Embedded Modules:** `surface-container-high` (#2a2a2a)

### The "Glass & Gradient" Rule
To add "soul" to the industrial aesthetic, use **Glassmorphism** for floating telemetry panels. Apply `surface-container-highest` at 60% opacity with a `backdrop-blur` of 12px. 
*   **Signature Gradients:** Use a subtle linear gradient from `primary` (#ffb599) to `primary-container` (#ff5f00) on high-impact CTAs to mimic the glow of an engine exhaust or a sunrise on a planetary rim.

---

## 3. Typography

The typography strategy is a collision between "The Display" (high-impact, technical) and "The Readout" (legible, monospace).

*   **Display & Headlines (Space Grotesk):** These are your mission patches. They must be **ALL-CAPS** with a wide tracking (letter-spacing: 0.05em). The `display-lg` (3.5rem) should be used for hero statements, creating a "cinematic" feel that mimics the *Project Hail Mary* title cards.
*   **Body & Titles (Inter / JetBrains Mono):** While headings are for impact, body text is for data. Use `body-md` for standard descriptions. For numerical data or status codes, switch to a monospace variant to reinforce the "instrumentation" vibe.
*   **Labels (Inter, ALL-CAPS):** Use `label-sm` (0.6875rem) with `on-surface-variant` (#e4bfb1) for metadata. This mimics the small, stamped instructional text found on industrial machinery.

---

## 4. Elevation & Depth

We achieve hierarchy through **Tonal Layering** rather than structural boxes.

*   **The Layering Principle:** Instead of shadows, stack your containers. A `surface-container-lowest` (#0e0e0e) card placed on top of a `surface-container-low` (#1c1b1b) section creates a "recessed" look, suggesting the interface is carved out of a dashboard.
*   **Ambient Shadows:** For floating elements (like Modals), use an ultra-diffused shadow: `offset-y: 20px, blur: 40px, color: rgba(0, 0, 0, 0.4)`. The shadow must never look like a "drop shadow"; it should look like an occlusion of light in space.
*   **The "Ghost Border" Fallback:** If accessibility requires a boundary, use `outline-variant` (#5b4137) at **15% opacity**. This provides a faint technical hint of a border without breaking the "No-Line" rule.

---

## 5. Components

### Buttons (Tactile Triggers)
- **Primary:** Background: `primary` (#ffb599), Text: `on-primary` (#5a1c00), **ALL-CAPS**, Wide Tracking. Shape: `md` (0.375rem).
- **Secondary:** Background: `secondary-container` (#484949), Outline: `outline` at 20% opacity.
- **States:** Hover states should utilize a subtle `surface-bright` (#3a3939) glow effect.

### Input Fields (Telemetry Input)
- **Field:** Use `surface-container-lowest`. 
- **Indicator:** A 2px vertical bar of `tertiary` (#00daf3) on the left side during the `focus` state, suggesting an "active circuit."
- **Forbid:** Do not use full-box borders. Use a bottom-stroke only or a subtle background fill.

### Cards & Lists
- **Rule:** Never use dividers.
- **Implementation:** Separate list items using `spacing.4` (0.9rem) of vertical white space or by alternating between `surface` and `surface-container-low`.

### Unique Component: "Status HUD"
A small, fixed-position container using **Glassmorphism** (`surface-variant` at 40% opacity) that displays real-time system metadata (time, coordinates, or connectivity) in `label-sm` monospace.

---

## 6. Do's and Don'ts

### Do
- **DO** use the `spacing.20` and `spacing.24` values to create massive gaps between sections. This "breathable void" is what makes the system feel premium.
- **DO** overlap text. Let a `display-lg` heading slightly bleed over the edge of a `surface-container` to break the "grid" feel.
- **DO** use `tertiary` (#00daf3) exclusively for "live" data or digital "holographic" accents.

### Don't
- **DON'T** use `error` (#ffb4ab) for anything other than critical system failures. Industrial design uses red/orange with extreme intent.
- **DON'T** use standard 12px or 16px border-radii. Stick to `sm` (0.125rem) or `md` (0.375rem). Rounded corners feel "soft"; we want "mechanical."
- **DON'T** center-align everything. Use left-aligned "staircase" layouts to create a technical, data-heavy rhythm.