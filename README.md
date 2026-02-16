
  # Tergar Česká republika Website

This is the official website for Tergar Česká republika meditation community. The original design is available at https://www.figma.com/design/nA0yaOTcbUJX4IZkAr5mCO/Tergar-%C4%8Cesk%C3%A1-republika-Website.

## Features

- 🧘 **Interactive Meditation Timer** - Built-in timer with customizable durations (5-60 minutes)
- 📅 **Group Practice Schedule** - Filter and view regular meditation sessions (online/in-person)
- 📚 **Meditation Resources** - Curated library of books, videos, audio guides, and articles
- 🗺️ **Interactive Map** - Find meditation groups across Czech Republic
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- ♿ **Accessible** - Built with accessibility best practices

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Animations:** Motion (Framer Motion)
- **UI Components:** Radix UI
- **Routing:** React Router v7
- **Deployment:** Vercel

## Running the Code

### Development

```bash
# Install dependencies
npm i

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173/`

### Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The website is configured for automatic deployment on Vercel. Push to the `main` branch to trigger a production deployment.

The `vercel.json` configuration ensures proper client-side routing for the React SPA.

## Project Structure

```
src/
├── app/
│   ├── components/        # React components
│   │   ├── MeditationTimer.tsx
│   │   ├── GroupPracticeWidget.tsx
│   │   ├── MeditationResources.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ui/           # Reusable UI components
│   └── pages/            # Page components
│       └── HomePage.tsx
├── data/                 # Content and configuration
│   └── content.ts
├── assets/              # Images and static files
└── styles/              # Global styles
```

## Contributing

Please ensure all new components:
- Use TypeScript with proper typing
- Follow the existing code style
- Include Czech language text for UI elements
- Use Motion for animations
- Are fully responsive and accessible

## License

© 2026 Tergar Česko
  