# Label Ease — Claude Instructions

Quick reference for Claude Code development on Label Ease.

## Project Overview

**Label Ease** — QR-based inventory tracking for Etsy sellers

**Status**: Week 1 CAB Validation (landing page + email signup)

## Architecture

- **Frontend**: React 18 + TypeScript + Tailwind + Vite
- **Hosting**: AWS S3 + CloudFront + Route53
- **Database**: Supabase (PostgreSQL)
- **Backend**: Node.js + Express (future, stub ready)
- **CI/CD**: GitHub Actions (automatic staging, manual production)

## Key Files

- `src/App.tsx` — Main app component
- `src/components/` — shadcn/ui components + custom
- `vite.config.ts` — Build config
- `.github/workflows/` — CI/CD pipelines
- `DEPLOYMENT.md` — AWS setup guide
- `docs/DECISIONS.md` — Team research + decisions

## Development Workflow

```bash
npm install
npm run dev          # localhost:5173
npm run build        # → dist/
npm run lint
npm run test
```

## Deployment

### Staging (Auto)
Push to `develop` branch:
```bash
git push origin develop
# → GitHub Actions auto-deploys to staging S3 + CloudFront
```

### Production (Manual)
Via GitHub Actions:
1. Go to github.com/jlkeiper/labelease/actions
2. Select "Deploy Production" workflow
3. Click "Run workflow" on main branch
4. Approve deployment
5. Syncs to production S3 + CloudFront invalidates cache

## Environment Variables

Add to `.env.local`:
```
VITE_SUPABASE_URL=https://jwrmjxbfqdaveyoiyjpt.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key-here>
```

## AWS Infrastructure

### Buckets
- `prod-label-ease` — Production static files
- `staging-label-ease` — Staging static files

### CloudFront Distributions
- Production: Points to prod-label-ease S3
- Staging: Points to staging-label-ease S3

### Route53
- `label-ease.com` → Production CloudFront distribution

### Caching Strategy
- **Assets** (hashed filenames): 1-year cache
- **index.html**: 5-minute cache

See `DEPLOYMENT.md` for full AWS setup.

## GitHub Secrets (Required)

Both **staging** and **production** environments need:
```
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
{STAGING|PROD}_S3_BUCKET
{STAGING|PROD}_CLOUDFRONT_DISTRIBUTION_ID
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

## CI/CD Pipelines

### `ci.yml`
- Trigger: Push/PR to main or develop
- Runs: lint, test
- No deployment

### `deploy-staging.yml`
- Trigger: Push to develop branch
- Builds and deploys to staging S3
- CloudFront cache invalidation

### `deploy-production.yml`
- Trigger: Manual workflow dispatch on main
- Builds and deploys to production S3
- CloudFront cache invalidation
- Requires "production" environment approval

## Supabase Integration

Project ID: `jwrmjxbfqdaveyoiyjpt`

**Tables** (future MVP build):
- users
- labels
- inventories
- items
- templates (Avery label templates, read-only)

Currently just loading environment variables. Forge will implement backend when CAB validates.

## Email Signup Integration

**Current**: Form in landing page (src/components/CTASection.tsx)
**Next**: Wire form submission to email service:
- Mailchimp API
- Supabase Email
- Resend (like crewweather)

Currently form needs a backend endpoint to handle submissions.

## Backend Setup (Future)

When MVP is approved (after CAB validation):

1. **Express API** (backend/src/index.js)
   - `/api/qr/generate` — Generate QR codes
   - `/api/labels/export` — Export PDF (pdfkit)
   - `/api/inventories/create` — Create inventory
   - `/api/items/*` — CRUD items

2. **Supabase Auth** in frontend
   - Email/password signup
   - JWT tokens for API

3. **Database Schema**
   - See `docs/DECISIONS.md` for full schema

## Testing

```bash
npm run test          # Run tests once
npm run test:watch    # Watch mode
```

Uses vitest + Playwright for e2e tests.

## Build & Deployment Checklist

- [ ] `npm run lint` passes
- [ ] `npm run test` passes
- [ ] `npm run build` succeeds
- [ ] Commit to develop → staging deploys
- [ ] Test on staging (staging-label-ease S3)
- [ ] Merge to main
- [ ] GitHub Actions → Deploy Production
- [ ] CloudFront cache invalidated
- [ ] Live at label-ease.com

## Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build locally

# Testing
npm run test             # Run tests
npm run test:watch      # Watch mode

# Code Quality
npm run lint            # Run ESLint

# Deployment
git push origin develop # Auto-deploy to staging
# Then: GitHub Actions → Deploy Production (manual)
```

## Troubleshooting

### "VITE_* undefined"
Add to `.env.local`:
```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

### Build fails
```bash
rm -rf node_modules dist
npm install
npm run build
```

### CloudFront shows old version
Cache invalidation in progress (30 seconds to 5 minutes).
Or manually: GitHub Actions logs show invalidation command.

### AWS Deploy fails
Check GitHub Secrets are set correctly in repo settings.
Verify AWS credentials have S3 + CloudFront permissions.

## Resources

- [DEPLOYMENT.md](./DEPLOYMENT.md) — AWS setup + troubleshooting
- [ROADMAP.md](./ROADMAP.md) — 8-week development plan
- [docs/DECISIONS.md](./docs/DECISIONS.md) — Team research + recommendations
- GitHub: https://github.com/jlkeiper/labelease
- Domain: label-ease.com
- Supabase: https://app.supabase.com/project/jwrmjxbfqdaveyoiyjpt

## Status

✅ Infrastructure ready (AWS S3 + CloudFront)
✅ CI/CD pipelines configured
🔄 Week 1: CAB recruitment + email signup
📋 Weeks 5-8: MVP build (when CAB validates with 3+ pre-commits)

---

**Ask if you need clarification on any setup.**
