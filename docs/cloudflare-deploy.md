# Deploying MDent to Cloudflare Workers

> **Note:** I could not fetch Cloudflare's own agent-setup instructions
> (`https://developers.cloudflare.com/agent-setup/prompt.md`) — this sandbox's
> network policy blocks the entire `cloudflare.com` domain family, so nothing
> under it is reachable from here (dashboard, API, and docs alike). The steps
> below are the standard Wrangler + Cloudflare Workers deploy flow for this
> kind of app, written from scratch — run them somewhere with real network
> access to Cloudflare (your own machine, CI, etc.).

## Why "Workers" and not "Pages"

This project already builds for Cloudflare: `@lovable.dev/vite-tanstack-config`
configures Nitro (the server build tool TanStack Start uses) with the
`cloudflare-module` preset by default. `bun run build` produces:

- `.output/server/index.mjs` — a Cloudflare Workers module-worker entry
  (the same `fetch(request, env, ctx)` shape you'll see in `src/server.ts`)
- `.output/public/` — the static assets (JS/CSS bundles, favicon, etc.)

`wrangler.jsonc` (added in this repo) wires those two together as a Workers
deployment with static assets served from the `ASSETS` binding.

## 1. Prerequisites

- A Cloudflare account with the domain `mdentlab.com` (or whichever domain
  you want to use) added as a zone — or you can start on the free
  `*.workers.dev` subdomain and attach a custom domain later.
- Node.js or Bun installed locally, and this repo cloned.
- The Supabase project's URL and keys (already in `.env` for local dev).

## 2. Install Wrangler and log in

```bash
bun add -D wrangler        # or: npm install -D wrangler
bunx wrangler login        # opens a browser to authorize the CLI
```

## 3. Set runtime secrets

Server-side code (`src/integrations/supabase/client.server.ts`) reads
`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` from `process.env` at
request time. On Workers, set these as **secrets** (never commit the
service-role key):

```bash
bunx wrangler secret put SUPABASE_URL
bunx wrangler secret put SUPABASE_SERVICE_ROLE_KEY
bunx wrangler secret put SUPABASE_PUBLISHABLE_KEY
```

The `VITE_SUPABASE_*` variables, by contrast, are inlined into the client
bundle **at build time** by Vite — they must be present as real environment
variables (or in `.env`) when you run the build, not as Workers secrets:

```bash
export VITE_SUPABASE_URL="https://cgciwqzdrvbgtxmjyjdm.supabase.co"
export VITE_SUPABASE_PUBLISHABLE_KEY="sb_publishable_..."
```

(These match the values already in the repo's `.env`, so a plain `bun run
build` picks them up automatically for local/CI builds.)

## 4. Build and deploy

```bash
bun install
bun run build
bunx wrangler deploy
```

Wrangler will print the deployed `*.workers.dev` URL.

## 5. Attach the custom domain

Once the zone `mdentlab.com` is active on Cloudflare (nameservers pointed at
Cloudflare):

- **Dashboard:** Workers & Pages → your `mdentlab` worker → Settings →
  Domains & Routes → Add Custom Domain → `mdentlab.com` (and/or `www`).
- **Or via config:** add a `routes` entry to `wrangler.jsonc`, e.g.
  ```jsonc
  "routes": [{ "pattern": "mdentlab.com/*", "custom_domain": true }]
  ```
  then redeploy.

## 6. Ongoing deploys

Re-run step 4 (`bun run build && bunx wrangler deploy`) whenever you want to
publish changes — or wire `bunx wrangler deploy` into a GitHub Actions
workflow using a Cloudflare API token (`CLOUDFLARE_API_TOKEN` secret) so
pushes to `main` deploy automatically.
