# Transportation Management — Web Dashboard

[![Deploy](https://github.com/Cepheus-Softwares/tms-frontend/actions/workflows/deploy.yml/badge.svg)](https://github.com/Cepheus-Softwares/tms-frontend/actions/workflows/deploy.yml)

The dispatcher web app for the Transportation Management System. Built as a single-page React app that talks to the [Laravel API](https://github.com/Cepheus-Softwares/tms-backend) and uses Firebase Realtime Database for chat with drivers in the [mobile app](https://github.com/Cepheus-Softwares/tms-mobile).

---

## Tech stack

- **Framework:** React 18 + TypeScript
- **Build tool:** Vite 6
- **Styling:** Tailwind CSS + [shadcn/ui](https://ui.shadcn.com/) (Radix primitives)
- **State / data:** React Context for auth, custom hooks for resources, [Firebase JS SDK](https://firebase.google.com/docs/web/setup) for chat
- **Routing:** React Router 6
- **Forms / validation:** React Hook Form + Zod
- **Maps:** Google Maps via `@react-google-maps/api`
- **Realtime / push:** Firebase Realtime Database (chat), FCM (notifications relayed from the backend)

## Features

- Dispatcher dashboard with totals and shortcuts
- Load creation (two-step), live load list, completed loads archive
- Trip monitor (10 s polling) with state transitions and BOL/POD viewer
- Live truck map (data sourced from driver GPS via the backend)
- Driver, owner, company, facility, and user management
- Auctions and offers
- Real-time chat with drivers (Firebase Realtime DB)
- Reports and analytics (mock data scaffolding present; pipeline in progress)
- Role-based authentication (Sanctum tokens stored in `localStorage`)

## Project structure

```
src/
├── api/                 Thin clients for backend + Firebase modules
├── components/          Feature components (dispatch, messaging, maps, trucks, …)
│   └── ui/              shadcn/ui primitives
├── context/             AuthContext, ThemeContext
├── hooks/               useMessages, useTrucks, useDispatches, useUsers, …
├── pages/               Top-level routes (loads, messages, map, trip-monitor, …)
├── lib/                 firebase.ts, utils
└── main.tsx             App bootstrap
```

## Requirements

- Node.js 20+
- npm 10+
- A running backend (see the [backend repo](https://github.com/Cepheus-Softwares/tms-backend))
- A Firebase web app config (for chat) and a Google Maps JS API key

## Local development

```bash
git clone git@github.com:Cepheus-Softwares/tms-frontend.git
cd tms-frontend

# Install
npm ci

# Configure environment
cp .env .env.local   # or edit .env directly
# fill in VITE_API_URL, VITE_FILE_URL, VITE_MAPS_API_KEY

# Run
npm run dev          # http://localhost:5173
```

## Environment variables

| Key | Required | Purpose |
| --- | -------- | ------- |
| `VITE_API_URL` | yes | Backend base URL, e.g. `https://api.mjdatsolutions.com/api` |
| `VITE_FILE_URL` | yes | Storage origin used for image / file URLs (`https://api.mjdatsolutions.com`) |
| `VITE_MAPS_API_KEY` | yes | Google Maps JS API key |
| `VITE_BASE_PATH` | no | Only set when serving from a subdirectory (e.g. `/app/`) |

Firebase config currently lives in `src/lib/firebase.ts`. Move to env vars if your deploy targets multiple Firebase projects.

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Type-check then produce `dist/` |
| `npm run build-no-errors` | Same, but doesn't fail on `tsc` errors (use sparingly) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over `src/` |

## Production build

```bash
npm run build
```

Output lands in `dist/`. The `.htaccess` in `public/` is copied automatically, providing SPA fallback and asset caching for Apache/cPanel hosts.

## Deployment

Pushes to `main` deploy automatically to cPanel via GitHub Actions:

1. CI builds the bundle with secrets-baked env values.
2. `dist/` is rsynced over SSH to the cPanel document root.
3. Asset filenames are content-hashed by Vite; cache headers in `.htaccess` make the new build visible within one refresh.

See [`.github/DEPLOY.md`](.github/DEPLOY.md) for required secrets (SSH key, cPanel host/user/path, and the three `VITE_*` variables) and one-time cPanel setup.

## License

Proprietary. © Cepheus Softwares.
