# Artistry & Assistance — Design System Master

Source of truth: `artistry assets/design/Artistry & Assistance.png` + project landing tokens.

## Typography
- Family: Montserrat (400–800), landing scope only
- H1: hero brand title (cyan on purple)
- H2: section titles (purple / heading token)
- H3: cards (services, pricing, team names as strong text)

## Color tokens (CSS variables on `.landing`)
| Role | Light | Notes |
|------|-------|-------|
| Purple / hero | `#6B2D9B` | `--landing-purple`, `--landing-hero-bg` |
| Cyan accent | `#2EC4E6` | `--landing-cyan` |
| Page bg | `#F7F6FA` | `--landing-bg` |
| Text | `#1A1528` | `--landing-text` |
| Muted | `#5C5670` | `--landing-text-muted` |
| Service cards | `#2A2A32` | `--landing-card-dark` |
| Footer | `#1B1633` | `--landing-footer-bg` |
| Footer muted | `#B9B6C8` | `--landing-footer-muted` |
| Footer divider | `#454158` | `--landing-footer-divider` |

Dark theme uses explicit `.dark .landing` overrides (not inversion).

## Styling rules
- All visuals in SCSS under `resources/scss/pages/landing/`
- TSX uses semantic `className` only
- Reuse primitives: `.landing-btn*`, `.landing-section*`, `.landing-card`, `.landing-grid*`

## Section order
Top bar → Nav → Hero → Trusted By → About → Team → Services → FAQ → Pricing → Contact banner → Footer
