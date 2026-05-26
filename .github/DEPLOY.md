# Deploying the frontend

`main` is the production branch. Every push to `main` triggers
`.github/workflows/deploy.yml`, which:

1. Builds the Vite bundle on a GitHub-hosted runner.
2. Writes `.env` from secrets so the API URLs and Maps key are baked in.
3. Rsyncs `dist/` over SSH to the cPanel document root.

The trailing `.htaccess` is shipped automatically because it lives in
`public/.htaccess` (Vite copies the entire `public/` folder into `dist/`).

## Required GitHub secrets

Add these under **Settings → Secrets and variables → Actions** (Repository
secrets):

| Name | Example | Where it comes from |
| ---- | ------- | ------------------- |
| `CPANEL_HOST` | `serverNN.web-hosting.com` | cPanel server hostname (Account info page) |
| `CPANEL_USER` | `mjdat` | cPanel username |
| `CPANEL_SSH_PORT` | `22` (often `21098` on Namecheap/HostGator) | cPanel → SSH Access |
| `CPANEL_SSH_KEY` | `-----BEGIN OPENSSH PRIVATE KEY-----…` | Private key whose **public** half is authorized in cPanel |
| `CPANEL_FRONTEND_PATH` | `/home/mjdat/public_html` or `/home/mjdat/app.mjdatsolutions.com` | Document root for the frontend |
| `VITE_API_URL` | `https://api.mjdatsolutions.com/api` | |
| `VITE_FILE_URL` | `https://api.mjdatsolutions.com` | |
| `VITE_MAPS_API_KEY` | `AIza…` | Google Maps key |

## One-time cPanel setup

1. **SSH key** — In cPanel, *SSH Access → Manage SSH Keys → Generate a new key*. Authorize the public key. Copy the **private key** into `CPANEL_SSH_KEY`.
2. **Document root** — Make sure the subdomain (or main domain) document root matches `CPANEL_FRONTEND_PATH`.

## Rolling back

Easiest path: `git revert <bad-commit>` and push. CI redeploys the previous version within ~2 minutes.

If you ever need a hot revert without going through Git, SSH in and copy from the latest dated backup; rsync only updates files, it doesn't keep historical snapshots like the backend deploy does.
