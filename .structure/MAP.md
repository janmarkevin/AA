# Artistry — Project Structure Map

> Agents: load this via `/structure`. Do **not** re-scan the whole repo unless the user runs `/updatestructure` or a note says a path is unverified.

## Meta
- **Project:** artistry
- **Updated:** 2026-11-17 15:12 (PST)
- **Snapshot:** `snapshots/2026-11-17-1512-baseline.md`
- **Stack:** Laravel 13 + Inertia 3 + React 19 + Fortify + Wayfinder + Tailwind 4 + Vite Plus + SCSS
- **Package managers:** Composer (PHP), pnpm (JS; also has package-lock.json)
- **DB (local):** SQLite at `database/database.sqlite`

## What this product is
Marketing/brand site for **Artistry & Assistance**, built on Laravel React starter kit (auth, dashboard, settings included). Landing page is the active custom surface; starter auth/settings remain.

## Ignore when exploring
Do not treat as source of truth / do not deep-scan by default:
- `vendor/`, `node_modules/`
- `storage/` (logs, framework cache, inertia-devtools)
- `public/build`, `public/hot`, `public/fonts-manifest.dev.json`
- Generated Wayfinder output: `resources/js/actions/`, `resources/js/routes/`, `resources/js/wayfinder/` (gitignored)
- `artistry assets/` (design source PNGs/WebPs; **gitignored**)
- `.cursor/` (gitignored; project-local skill copies)

## Top-level layout
```
app/                 PHP application code
bootstrap/           Laravel bootstrap + providers
config/              Laravel + Fortify + Inertia config
database/            migrations, factories, seeders, sqlite
public/              web root
resources/js/        React/Inertia frontend
resources/scss/      SCSS + Tailwind entry
resources/views/     Blade root (Inertia shell)
routes/              web, settings, console
tests/               PHPUnit Feature + Unit
artistry assets/     design/person source assets (local only)
.structure/          THIS map (agent structure memory)
.memory/             session progress notes
```

## Routes (entry points)
| Method/Path | Name | Page / controller |
|-------------|------|-------------------|
| `GET /` | `home` | Inertia `landing/index` |
| `GET /welcome` | `welcome` | Inertia `welcome` (starter) |
| `GET /dashboard` | `dashboard` | Inertia `dashboard` (auth+verified) |
| settings/* | profile/security/appearance | `routes/settings.php` + Settings controllers |
| Fortify auth routes | login/register/etc. | Laravel Fortify (config-driven) |

Key files: `routes/web.php`, `routes/settings.php`, `config/fortify.php`

## Backend (`app/`)
| Area | Path | Notes |
|------|------|-------|
| Models | `app/Models/User.php` | Only app model so far |
| Controllers | `app/Http/Controllers/Settings/{Profile,Security}Controller.php` | Settings only |
| Middleware | `HandleInertiaRequests`, `HandleAppearance` | Shared Inertia props / appearance |
| Form requests | `app/Http/Requests/Settings/*` | Profile, password, 2FA, delete |
| Fortify actions | `app/Actions/Fortify/*` | Create user, reset password |
| Concerns | `PasswordValidationRules`, `ProfileValidationRules` | Shared validation |
| Providers | `AppServiceProvider`, `FortifyServiceProvider` | |

## Frontend (`resources/js/`)
| Area | Path | Notes |
|------|------|-------|
| Entry | `app.tsx` | Inertia app bootstrap |
| Pages | `pages/` | Route-matched React pages |
| Landing | `pages/landing/index.tsx` | **Active custom page** — currently stub ("Hi there!") |
| Landing sections | `pages/landing/sections/` | Empty placeholder (`.gitkeep` only) |
| Landing components | `components/landing/` | Empty placeholder (`.gitkeep` only) |
| Welcome | `pages/welcome.tsx` | Starter kit welcome (~390 lines) |
| Auth pages | `pages/auth/*` | Fortify UI (login, register, 2FA, …) |
| Settings pages | `pages/settings/{profile,security,appearance}.tsx` | |
| Dashboard | `pages/dashboard.tsx` | |
| UI kit | `components/ui/*` | shadcn/Radix primitives |
| App chrome | `components/app-*`, `nav-*`, layouts | Sidebar/header shells |
| Layouts | `layouts/app*`, `layouts/auth*`, `layouts/settings` | |
| Hooks | `hooks/*` | appearance, clipboard, 2FA, mobile, … |
| Types | `types/*` | auth, navigation, ui |
| Lib | `lib/utils.ts` | cn/helpers |
| Generated | `actions/`, `routes/`, `wayfinder/` | Wayfinder — regenerate, don't hand-edit |

## Styles
| File | Role |
|------|------|
| `resources/scss/app.scss` | SCSS entry |
| `resources/scss/_variables.scss` | Tokens/vars |
| `resources/scss/_theme.scss` | Theme |
| `resources/scss/_base.scss` | Base |
| `resources/scss/pages/_landing.scss` | Landing styles (minimal stub) |
| `resources/scss/tailwind.css` | Tailwind 4 entry |
| `resources/views/app.blade.php` | Inertia root Blade |

## Design assets (local, gitignored)
```
artistry assets/
  design/Artistry & Assistance.png
  person/   # team headshots (Carl David, jameson, jenn, kevin espina, piloton, priscilla, roy, val, …)
  *.png / *.webp  # masks, social icons, landing imagery, groups
```
Use for landing UI; do not assume they are in git remotes.

## Database
Migrations present:
- users (+ two-factor columns)
- cache, jobs
- passkeys

Seeder: `database/seeders/DatabaseSeeder.php`
Factory: `database/factories/UserFactory.php`

## Tests
Feature coverage is mostly starter auth + settings + dashboard. No landing-specific tests yet.
- `tests/Feature/Auth/*`
- `tests/Feature/Settings/*`
- `tests/Feature/DashboardTest.php`
- `tests/Feature/ExampleTest.php`
- `tests/Unit/ExampleTest.php`

## Tooling / scripts
| Command | Purpose |
|---------|---------|
| `pnpm dev` / `vp dev` | Vite Plus dev server |
| `pnpm build` | Production frontend build |
| `pnpm check` | Frontend check |
| `pnpm types:check` | `tsc --noEmit` |
| `php artisan …` | Laravel CLI |
| PHPUnit / Pint / Larastan | PHP test/lint/static analysis |

Config notes:
- `components.json` — shadcn
- `vite.config.ts` — Vite Plus + React + Wayfinder
- `tsconfig.json`, `phpunit.xml`, `pint.json`, `phpstan.neon`

## Cursor / agent aids
| Path | Role |
|------|------|
| `.structure/` | Structure map (this system) |
| `.memory/` | Session progress notes (`/memory`, `/saveprogress`) |
| `.cursor/skills/*` | Project skill copies (gitignored): design, brand, slides, ui-styling, ui-ux-pro-max, … |
| Personal skills | `/memory`, `/saveprogress`, `/structure`, `/updatestructure`, karpathy-guidelines |

## Feature map (current focus)
| Feature | Status | Primary paths |
|---------|--------|---------------|
| Landing page | Stub started | `resources/js/pages/landing/index.tsx`, `resources/scss/pages/_landing.scss`, route `home` |
| Landing sections/components | Scaffold only | `pages/landing/sections/`, `components/landing/` |
| Auth (Fortify + passkeys + 2FA) | Starter intact | Fortify config, auth pages, settings/security |
| Dashboard / settings | Starter intact | dashboard + settings pages/controllers |
| Brand assets import into public/build | Not done | Source in `artistry assets/` (gitignored) |

## Agent routing cheat-sheet
When the task is about… → open first:
- **Landing UI** → `resources/js/pages/landing/`, `components/landing/`, `resources/scss/pages/_landing.scss`, `artistry assets/`
- **Auth** → `config/fortify.php`, `pages/auth/`, Fortify providers/actions
- **Settings** → `routes/settings.php`, Settings controllers + `pages/settings/`
- **Shared UI** → `components/ui/`, `layouts/`
- **Routes** → `routes/web.php` then settings/Fortify
- **Progress history** → `.memory/CURRENT.md` then latest note
- **Structure history** → `.structure/CURRENT.md` then `MAP.md`
)
