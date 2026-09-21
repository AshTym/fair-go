# Fair Go

An AU/NZ-first dating app focused on honest pricing, verified profiles, and visible local match density.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/fair-go run dev` — run the Fair Go web app
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/fair-go/src/App.tsx` — app routes, screens, sample profiles, and local interactions
- `artifacts/fair-go/src/index.css` — Fair Go theme, responsive layout, and animation styles
- `artifacts/fair-go/` — deployable React + Vite web artifact served at `/`
- `artifacts/api-server/` — shared Express API service reserved for persistent backend features

## Architecture decisions

- The first build is frontend-only and keeps interaction state in memory so the complete product flow can be evaluated before committing to verification and payments vendors.
- Verification UI distinguishes required phone/selfie checks from optional government ID.
- Free access is presented as fully usable; the single $2.99 plan is support-oriented rather than pay-to-win.

## Product

- Responsive discover flow with local density, filters, verified-only mode, like/pass actions, and profile prompts
- Seeded discovery pool of 200 profiles split evenly between Canberra and Wagga Wagga, each within 20 km and using a locally stored stock headshot
- Unblurred inbound likes with like-back matching
- Match list and conversational chat UI with a safety reminder
- Profile trust score, verification checklist, notification controls, and transparent pricing
- Three-step phone, selfie-liveness, and optional ID onboarding flow

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
