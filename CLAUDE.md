# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional website for Naomi's speech language pathology practice, specializing in cleft palate speech therapy. Built as a React single-page application with modern tooling.

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server (default port)
pnpm dev

# Start development server with host access on port 80
pnpm host

# Build for production
pnpm build

# Lint code
pnpm lint

# Preview production build
pnpm preview

# Build and create tar archive for deployment
pnpm tbuild
```

## Architecture

- **Frontend Framework**: React 18 with TypeScript/JSX
- **Build Tool**: Vite
- **Routing**: React Router DOM with BrowserRouter
- **Styling**: Tailwind CSS + DaisyUI components
- **Icons**: React Feather
- **Package Manager**: pnpm

## Project Structure

```
src/
├── App.jsx                 # Main app with routing setup
├── main.jsx               # React app entry point
├── components/
│   └── Navbar.jsx         # Navigation component
└── routes/                # Page components
    ├── Homepage.jsx
    ├── About.jsx
    ├── Therapy.jsx
    ├── Contact.jsx
    └── Reference.jsx      # Mapped to /help route
```

## Key Routing

- `/` → Homepage
- `/about` → About page  
- `/therapy` → Therapy services
- `/contact` → Contact information
- `/help` → Reference page
- `*` → 404 page with styled error message

## Deployment

The project includes deployment configuration for CapRover (see `public/captain-definition`) and nginx configuration (`public/nginx.conf`). The `tbuild` script creates a production build and packages it as a tar archive.