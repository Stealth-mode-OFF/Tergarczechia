# Tergar Czechia

> Website for the Czech Tergar meditation community — teachings of Yongey Mingyur Rinpoche.

## Status

Active

## Tech Stack

- **Framework:** React 18 + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 + Radix UI (shadcn/ui components)
- **Animations:** Framer Motion
- **Routing:** React Router 7
- **UI Libraries:** MUI (Material UI), Embla Carousel, React Slick, Masonry layout
- **Hosting:** Vercel
- **Key deps:** Lucide React (icons), React Hook Form, date-fns, Recharts, Sonner (toasts)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Stealth-mode-OFF/Tergarczechia.git
   cd Tergarczechia
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── app/
│   ├── App.tsx              # Root component with routing
│   ├── components/          # Shared components (Header, Footer)
│   │   └── ui/              # Base UI primitives (shadcn/ui)
│   └── pages/               # Route pages
│       ├── HomePage.tsx
│       ├── CoJeMeditacePage.tsx    # "What is meditation"
│       ├── ONasPage.tsx            # "About us"
│       ├── ProgramPage.tsx         # Programs
│       ├── CestaPage.tsx           # Tergar Path
│       ├── SkupinyPage.tsx         # Meditation groups
│       ├── UdalostiPage.tsx        # Events
│       ├── RozvrhPage.tsx          # Schedule
│       ├── InspiracePage.tsx       # Inspiration / blog
│       ├── KontaktPage.tsx         # Contact
│       └── ZapojteSePage.tsx       # "Get involved"
├── data/                    # Static content (blog, events, content, tergarPath)
├── assets/                  # Static assets
├── styles/                  # Additional stylesheets
├── types.ts                 # Shared TypeScript types
└── main.tsx                 # Entry point
```

## Deployment

Deployed via Vercel. Linked project with automatic deployments on push.

**Preview:** [tergarczechia.vercel.app](https://tergarczechia.vercel.app)

## Environment Variables

No environment variables required.

## Owner

Josef Hofman — josef.hofman@behavera.com
