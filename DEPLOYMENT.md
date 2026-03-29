# Label Ease Deployment Guide

Complete deployment workflow for landing page + API.

## Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account (already set up: jwrmjxbfqdaveyoiyjpt)

### Local Development

```bash
# Install all dependencies (monorepo)
npm install

# Start both web + backend in development mode
npm run dev

# Or start individually:
cd web && npm run dev          # Landing page on http://localhost:5173
cd backend && npm run dev      # API on http://localhost:3000
```

### Environment Variables

**Web (.env.local in web/ directory):**
```bash
VITE_SUPABASE_URL=https://jwrmjxbfqdaveyoiyjpt.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

**Backend (.env in backend/ directory):**
```bash
SUPABASE_URL=https://jwrmjxbfqdaveyoiyjpt.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_KEY=your_service_key_here
PORT=3000
```

## Deployment Options

### Option 1: Vercel (Recommended for Web)

**Landing page deployment:**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy web app
cd ~/code/labelease/web
vercel

# Configure build
# - Build Command: npm run build
# - Output Directory: dist
# - Install Command: npm install
```

**Setup custom domain:**
1. Go to Vercel project settings
2. Add custom domain: `label-ease.com`
3. Update DNS records (Vercel will provide)

**GitHub Auto-Deploy:**
1. Connect GitHub repository
2. Set root directory to `web/`
3. Deploy on push to main

### Option 2: Railway or Render (For Backend API)

**Backend deployment:**

```bash
# Option A: Railway
railway link
railway up

# Option B: Render
# Push to GitHub, connect to Render
```

**Environment variables:** Set on Render/Railway dashboard

### Option 3: Docker (Full Stack)

**Create Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY . .

# Install dependencies
RUN npm install --workspaces

# Build web
WORKDIR /app/web
RUN npm run build

# Expose API port
EXPOSE 3000

# Start backend
WORKDIR /app/backend
CMD ["npm", "run", "dev"]
```

## GitHub Pages (Static Landing Page)

To deploy **only** the landing page to GitHub Pages:

```bash
# From web/ directory
npm run build

# Create .github/workflows/deploy.yml in root

name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: cd web && npm install && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./web/dist

# Then in repo settings:
# - Go to Settings > Pages
# - Source: Deploy from branch
# - Branch: gh-pages
# - Folder: / (root)
```

## DNS Configuration (label-ease.com)

### AWS Route 53

Currently registered via AWS Route 53. Update records:

```bash
# Point to GitHub Pages
aws route53 change-resource-record-sets \
  --hosted-zone-id <YOUR_ZONE_ID> \
  --change-batch file://dns-update.json
```

**dns-update.json:**
```json
{
  "Changes": [
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "label-ease.com",
        "Type": "CNAME",
        "TTL": 300,
        "ResourceRecords": [
          { "Value": "jlkeiper.github.io" }
        ]
      }
    },
    {
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "www.label-ease.com",
        "Type": "CNAME",
        "TTL": 300,
        "ResourceRecords": [
          { "Value": "jlkeiper.github.io" }
        ]
      }
    }
  ]
}
```

### Or via Vercel

If using Vercel:
1. Add domain in Vercel project settings
2. Vercel provides nameserver updates
3. Update AWS Route 53 nameservers

## Deployment Checklist

- [ ] Install dependencies: `npm install`
- [ ] Create .env files (web + backend)
- [ ] Test locally: `npm run dev`
- [ ] Test build: `npm run build`
- [ ] Choose deployment: Vercel, Railway, Docker, etc.
- [ ] Set up GitHub auto-deploy
- [ ] Configure custom domain (label-ease.com)
- [ ] Update DNS records (AWS Route 53)
- [ ] Test landing page
- [ ] Set up backend API endpoint
- [ ] Configure CORS in backend
- [ ] Add Supabase auth to web app
- [ ] Set up email signup integration

## Monitoring & Logging

**Vercel:** Built-in analytics + error tracking
**Railway/Render:** View logs in dashboard
**Supabase:** Monitor in console

## Local Testing Before Deploy

```bash
# Test production build locally
cd web
npm run build
npm run preview

# Should serve dist/ folder at http://localhost:4173
```

## Next Steps

1. Deploy landing page (Vercel or GitHub Pages)
2. Deploy backend API (Railway, Render, or Docker)
3. Connect web app to backend API
4. Add Supabase auth + email signup
5. Hook up CAB email collection

---

**Status:** Deployment guide complete. Ready for Week 1 CAB validation.
