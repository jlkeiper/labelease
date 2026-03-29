# Label Ease

**QR-based inventory tracking for Etsy sellers**

Customize your labels. Organize your inventory. Ship smarter.

[Landing Page](https://label-ease.com) • [GitHub](https://github.com/jlkeiper/labelease) • [Research Docs](./docs/DECISIONS.md)

## 📊 Project Status

🚀 **Week 1: CAB Recruitment & Landing Page**
- ✅ Forge: MVP architecture + tech spec
- ✅ Michia: 90-Day founder verdict (CONDITIONAL GO)
- ✅ Finn: Financial model ($3.15B TAM)
- ✅ Scout: Brand positioning + domain (label-ease.com)
- 🔄 Landing page: Live (Lovable prototype integrated)
- 📋 Next: CAB recruitment (target 3+ pre-commits → MVP build)

## 🏗️ Monorepo Structure

```
labelease/
├── web/                    # Landing page (React/Vite/Tailwind)
│   ├── src/              # Components, pages, styles
│   └── package.json
├── backend/              # Node.js API (Express/Supabase)
│   ├── src/index.js     # Entry point
│   └── package.json
├── docs/                 # Documentation
├── ROADMAP.md           # 8-week development plan
├── DEPLOYMENT.md        # Deployment guide
└── package.json         # Monorepo root
```

## 🚀 Quick Start

### Development
```bash
npm install                # Install all dependencies
npm run dev              # Start web + backend locally
```

### Deploy
See [DEPLOYMENT.md](./DEPLOYMENT.md) for:
- Vercel (landing page)
- Railway/Render (API)
- GitHub Pages (static site)
- Docker (full stack)

## 💻 Product

- 🏷️ **Custom Label Designer** — Pick Avery templates, customize text/colors
- 📱 **Mobile QR Scanner** — Scan labels, track inventory in real-time
- 📦 **Inventory Management** — Simple, organized storage + fulfillment
- 🎨 **Brand Integration** — Print with your branding

## 💰 Key Metrics

| Metric | Value |
|--------|-------|
| TAM | $3.15B-$3.45B |
| Pricing | $24 Pro / $64 Pro+ / $0.22/label |
| Unit Economics | 7.4x LTV:CAC, 94.7% margin |
| Break-even | Month 12 @ $250K seed |
| Year 3 Valuation | $17.5M+ |

## 🛠️ Tech Stack

| Layer | Tech | Purpose |
|-------|------|---------|
| Frontend | React 18 + TypeScript + Tailwind | Landing page + app UI |
| Backend | Node.js + Express | QR gen, PDF export, API |
| Database | Supabase (PostgreSQL) | Users, labels, inventory |
| PDF | pdfkit | Avery label generation |
| QR | qrcode | Code generation + embedding |
| Mobile | React Native (future) | iOS/Android scanner |

## 👥 Team

- 🔧 **Forge** — Full-stack architecture, MVP build
- 🎯 **Michia** — Business strategy, 90-Day evaluation
- 💰 **Finn** — Financial modeling, pricing
- 🔍 **Scout** — Brand positioning, go-to-market
- 👤 **Jeremy** — Product, CAB recruitment

## 📚 Documentation

- [DECISIONS.md](./docs/DECISIONS.md) — All team recommendations
- [ROADMAP.md](./ROADMAP.md) — 8-week development plan
- [DEPLOYMENT.md](./DEPLOYMENT.md) — How to deploy

## 🎯 This Week's Goals (CAB Validation)

- ✅ Landing page live
- 📋 Find 5 Etsy sellers for CAB
- 🎨 Present Figma mockups
- 💬 Test pricing ($24/$49/$99)
- 🔔 **Gate**: 3+ pre-commits → MVP build

---

**Building a better way to organize inventory. One QR label at a time.**
