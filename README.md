# S&Z Trading International - Freight & Logistics Website

Professional freight and logistics website for **S&Z TRADING INTERNATIONAL S.C.A.**

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (PostgreSQL + Auth + Realtime)
- **Validation**: Zod
- **Data Fetching**: TanStack Query

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or another Node package manager)

### Setup

1. Clone the repository
2. Copy environment variables:

   ```bash
   cp .env.example .env
   ```

3. Fill in your Supabase credentials in `.env`
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start development server:

   ```bash
   npm run dev
   ```

### Environment Variables

Defined in `.env` (see `.env.example`):

| Variable                        | Description                     |
|---------------------------------|---------------------------------|
| `VITE_SUPABASE_URL`            | Your Supabase project URL       |
| `VITE_SUPABASE_PUBLISHABLE_KEY`| Supabase anon/public key        |
| `VITE_SUPABASE_PROJECT_ID`     | Supabase project ID             |

## Scripts

- `npm run dev` – start development server
- `npm run build` – production build
- `npm run preview` – preview production build
- `npm run lint` – run ESLint
- `npm run test` – run Vitest in watch mode
- `npm run test:run` – run Vitest once (CI-friendly)

## Project Structure

```text
src/
├── App.tsx              # App shell and routing
├── main.tsx             # Vite entry
├── components/          # Reusable UI components
│   ├── ui/              # shadcn/ui primitives
│   └── es/              # Spanish-specific components
├── hooks/               # Custom React hooks
├── integrations/        # Supabase client & types
├── lib/                 # Constants, validation, tracking, attribution
├── pages/               # Route pages (EN)
│   └── es/              # Route pages (ES)
└── test/                # Test setup
```

## Key Features

- Multi-step quote form with Zod validation and Supabase persistence
- Bilingual pages (English/Spanish) with mirrored content
- Business relocation landing pages (city-specific for Madrid and Málaga)
- Shipment tracking connected to Supabase `shipments` table
- Attribution tracking (UTM, referrer) stored with quotes
- JSON-LD structured data for LocalBusiness and FAQ (SEO)

## Deployment

Build for production:

```bash
npm run build
```

The static output is generated in the `dist/` directory and can be deployed to any static hosting provider (Netlify, Vercel, Cloudflare Pages, etc.).
