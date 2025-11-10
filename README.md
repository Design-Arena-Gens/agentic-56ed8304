# Bharat Life Care Social Media Manager AI

AI-native command center that orchestrates Bharat Life Care’s end-to-end social media workflow—strategy, production, scheduling, automation, and insight loops—all inside a deploy-ready Next.js application.

## ✨ Highlights

- Opinionated dashboard tuned for regulated healthcare storytelling
- AI campaign blueprint generator with tone, objective, and channel calibration
- Workflow visibility across strategy, production, publishing, and insights streams
- Intelligent scheduler timeline, automation control tower, and analytics console
- Tailwind-powered responsive layout optimised for Vercel deployment

## 🚀 Quickstart

```bash
npm install
npm run dev
# open http://localhost:3000
```

### Production build

```bash
npm run build
npm start
```

## 🗂️ Key Structure

```
app/
  layout.tsx          # Global shell + metadata
  page.tsx            # Main AI agent dashboard
components/
  AppHeader.tsx       # Hero + impact summary
  AIPlanner.tsx       # AI brief generator (client component)
  WorkflowBoard.tsx   # Stage-based pipeline overview
  ...
lib/
  data.ts             # Seed data powering UI modules
tailwind.config.ts    # Design tokens + Tailwind setup
```

## 🧪 Quality Gates

- `npm run lint` – ESLint (Next.js core web vitals)
- `npm run build` – Type-check + production build verification

## 📦 Tech Stack

- Next.js 14 (App Router)
- React 18 with TypeScript
- Tailwind CSS 3 with custom theming
- Lucide icons for consistent visual language

## 🔜 Next Ideas

- Wire AI brief generator to LLM endpoints with guardrails
- Persist workflow state via Supabase or Vercel KV
- Extend automation panel with rule builders and audit logs
