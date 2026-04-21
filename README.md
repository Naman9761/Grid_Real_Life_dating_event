# GRID - Real Life Dating Events

A premium social events brand for real-life matchmaking in Amsterdam and beyond. **No swiping, no algorithms—just real connections** in carefully curated venues.

## 🎯 About GRID

GRID reimagines dating events by bringing people together in real venues for genuine conversations and authentic connections. We host multiple event formats throughout Amsterdam and Rotterdam, creating opportunities for singles to meet in a fun, curated environment.

### Key Features

- **Multiple Event Formats** - Match Grid, Pitch Your Mate, Blind Date Dinner, Speed Mingle
- **Premium Venues** - Handpicked locations across Amsterdam and Rotterdam
- **Real Connections** - No ghosting, no algorithms—just people meeting in person
- **Community-Driven** - Events designed for genuine matchmaking

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/grid-real-life-dating-events.git
   cd grid-real-life-dating-events
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`

### Available Scripts

- **`npm run dev`** - Start development server on port 3000
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run TypeScript type checking
- **`npm run clean`** - Remove build artifacts

## 📁 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.tsx      # Navigation bar
│   │   ├── Hero.tsx        # Hero section with profile cards
│   │   ├── SocialProof.tsx # Social proof statistics
│   │   ├── HowItWorks.tsx  # How GRID works section
│   │   ├── EventFormats.tsx # Event format showcase
│   │   ├── Experience.tsx  # Experience section
│   │   ├── UpcomingEvents.tsx # Events listing
│   │   ├── Footer.tsx      # Footer
│   │   └── NeonBackground.tsx # Animated background
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # App entry point
│   └── index.css           # Global styles
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── tailwind.config.js      # Tailwind CSS configuration
```

## 🎨 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 🔧 Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

Currently, the app doesn't require any API keys, but you can add them as needed.

## 🎭 Design System

The project uses Tailwind CSS with custom brand colors:

- **Orange**: `brand-orange` (#F97316)
- **Pink**: `brand-pink` (#EC4899)
- **Purple**: `brand-purple` (#A855F7)

### Glass Effect

The app uses a "glass morphism" effect throughout. Check the CSS classes for:

- `.glass` - Frosted glass background effect
- `.text-gradient` - Gradient text effect

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Netlify / Vercel

1. Push your code to GitHub
2. Connect your repository to Netlify or Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`

## 📝 Development Workflow

1. Create a new branch for your feature

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes

3. Test locally

   ```bash
   npm run dev
   ```

4. Run type checking

   ```bash
   npm run lint
   ```

5. Commit and push

   ```bash
   git add .
   git commit -m "Add your feature"
   git push origin feature/your-feature-name
   ```

6. Create a Pull Request

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

## 👥 Team

GRID is Amsterdam's premier real-life dating events brand, dedicated to creating authentic connections in our community.

## 📞 Contact

- **Website**: [gridamsterdam.com](https://gridamsterdam.com)
- **Email**: contact@gridamsterdam.com
- **Instagram**: [@gridamsterdam](https://instagram.com/gridamsterdam)

---

**© 2026 GRID Amsterdam. All rights reserved.**
