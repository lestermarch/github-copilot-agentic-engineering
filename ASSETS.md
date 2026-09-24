# Asset provenance

## Design concept

Preserve the precision and familiarity of the approved PowerPoint design while adding a quiet, high-contrast browser shell for navigation and downloads.

## Slide assets

| Files | Source | Usage rights | Role | Alt-text classification | Slides |
|---|---|---|---|---|---|
| `assets/slides/slide-01.png` to `slide-14.png` | Exported from `assets/from-coding-assistance-to-agentic-engineering.pptx`, authored by Lester March | Author-provided presentation assets | Informative | Descriptive alt text plus an accessible text summary | All |
| `assets/from-coding-assistance-to-agentic-engineering.pdf` | Author-provided PDF export | Author-provided presentation asset | Downloadable source | Not embedded as an image | N/A |
| `assets/from-coding-assistance-to-agentic-engineering.pptx` | Author-provided editable deck | Author-provided presentation asset | Downloadable source | Not embedded as an image | N/A |

No third-party images or remote media were introduced by the web conversion.

## Layout assignment

The approved PowerPoint supplies each slide's visual pattern. The web layer uses one consistent **diagram/evidence frame** for slides 1–13 and a **conclusion frame** for slide 14. This avoids reinterpreting or fragmenting the original visual hierarchy.

## Motion plan

The web deck uses no slide transitions, fragments, or Auto-Animate effects. Navigation is immediate, reliable under automation, and equivalent when `prefers-reduced-motion: reduce` is enabled.
