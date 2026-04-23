# Deployment Summary — test.morgatechauto.com

## What Was Done

### 1. Project changes (committed to `redesign-nextjs` branch)
| File | Change |
|------|--------|
| `next.config.ts` | Added `output: "standalone"` — makes Next.js produce a minimal self-contained build for Docker |
| `Dockerfile` | 3-stage build: install deps → build app → minimal production image |
| `.dockerignore` | Excludes `node_modules`, `.next`, `.git` from the Docker build context |
| `deploy.sh` | One-command redeploy script (git pull → build → restart container) |

### 2. VPS changes (Hostinger, manual)
- Repo cloned to `/root/docker/morgatech/website/Morgatech-current/Morgatech-current/`
- Docker image built and container started: `morgatech-app` on network `shared-network`
- Caddyfile updated with a new site block for `test.morgatechauto.com`
- Caddy reloaded to pick up the new block

### 3. DNS change (GoDaddy)
- A record added: `test.morgatechauto.com` → VPS IP

---

## How to Redeploy (after code changes)

```bash
ssh root@<vps-ip>
cd /root/docker/morgatech/website/Morgatech-current/Morgatech-current
./deploy.sh
```

That's it. The script pulls latest code, rebuilds the image, and restarts the container.

---

## How to Undo Everything

### Stop and remove the container + image
```bash
docker stop morgatech-app
docker rm morgatech-app
docker rmi morgatech-app
```

### Remove the Caddyfile block
Open the Caddyfile, delete the `test.morgatechauto.com { ... }` block, then reload:
```bash
docker exec caddy caddy reload --config /etc/caddy/Caddyfile
```

### Remove the DNS record
Log into GoDaddy → DNS for `morgatechauto.com` → delete the A record for `test`.

### Revert project files
```bash
git revert HEAD    # or manually delete Dockerfile, .dockerignore, deploy.sh
# and remove output: "standalone" from next.config.ts
```

---

## How to Check Status

```bash
# Is the container running?
docker ps | grep morgatech-app

# View live logs
docker logs -f morgatech-app

# Restart without rebuilding
docker restart morgatech-app
```

---

## Key Details
| Item | Value |
|------|-------|
| Subdomain | `test.morgatechauto.com` |
| Docker image | `morgatech-app` |
| Docker container | `morgatech-app` |
| Docker network | `shared-network` |
| Internal port | `3000` |
| Reverse proxy | Caddy (Docker container) |
| Repo path on VPS | `/root/docker/morgatech/website/Morgatech-current/Morgatech-current/` |
| Branch | `redesign-nextjs` |
