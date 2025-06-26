# Portfolio Website - Prishika Chaudhary

## Overview

This is a modern, responsive portfolio website built for Prishika Chaudhary, a Software Engineer and Researcher. The application showcases professional experience, projects, research publications, skills, and certifications through an elegant single-page application with smooth animations and modern design principles.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth, performant animations
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript for full-stack type safety
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API**: RESTful endpoints for contact form submissions
- **Middleware**: Express middleware for request logging and error handling

### Development Setup
- **Package Manager**: npm with lockfile for reproducible builds
- **Development Server**: Vite dev server with hot module replacement
- **Build Process**: Vite for frontend, esbuild for backend bundling
- **TypeScript Configuration**: Strict mode with path mapping for clean imports

## Key Components

### Frontend Components
1. **Navigation**: Fixed navbar with smooth scrolling navigation
2. **Hero Section**: Animated typewriter effect showcasing roles
3. **About Section**: Personal background and education information
4. **Experience Section**: Professional work history with detailed responsibilities
5. **Projects Section**: Featured projects with live demos and GitHub links
6. **Research Section**: Academic publications and conference presentations
7. **Skills Section**: Technical skills categorized by type with achievement highlights
8. **Certifications Section**: Professional certifications and credentials
9. **Contact Section**: Interactive contact form with real-time validation
10. **Footer**: Social media links and professional contact information

### Backend Components
1. **Contact API**: POST endpoint for handling form submissions with validation
2. **Database Models**: Contact and User schemas with Zod validation
3. **Storage Layer**: Abstracted storage interface with PostgreSQL implementation
4. **Error Handling**: Centralized error handling middleware
5. **Request Logging**: Custom logging middleware for API requests

### UI System
- **Design Tokens**: CSS custom properties for consistent theming
- **Color Palette**: Professional blue and slate color scheme
- **Typography**: Inter font family for modern, readable text
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support

## Data Flow

### Contact Form Submission
1. User fills out contact form with name, email, and message
2. Client-side validation using Zod schemas
3. Form data sent to `/api/contact` endpoint via POST request
4. Server validates data and sanitizes input
5. Contact information stored in PostgreSQL database
6. Success/error response sent back to client
7. Toast notification displayed to user

### Page Navigation
1. User clicks navigation links or buttons
2. Smooth scroll behavior navigates to target sections
3. Navbar state updates based on scroll position
4. Mobile menu closes automatically after navigation

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query for state management
- **UI Framework**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS for processing
- **Animation**: Framer Motion for smooth transitions
- **Database**: Drizzle ORM with Neon Database connector
- **Validation**: Zod for runtime type validation
- **Icons**: Lucide React and React Icons for consistent iconography

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Linting**: ESLint configuration for code quality
- **Type Checking**: TypeScript with strict configuration

### External Services
- **Database**: Neon Database (serverless PostgreSQL)
- **Deployment**: Replit hosting platform
- **Version Control**: Git with GitHub integration

## Deployment Strategy

### Production Build
1. **Frontend**: Vite builds React application to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Assets**: Static assets optimized and fingerprinted
4. **Environment**: Production environment variables for database connection

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Development**: `npm run dev` with hot reloading
- **Port Configuration**: Internal port 5000 mapped to external port 80

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string for Neon Database
- `NODE_ENV`: Environment flag for development/production modes

### Database Migrations
- **Migration System**: Drizzle Kit for schema migrations
- **Schema Location**: `shared/schema.ts` for shared types
- **Migration Command**: `npm run db:push` for schema updates

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
- June 26, 2025. Major UI/UX improvements:
  * Enhanced hero section with interactive animations and modern design
  * Updated technical skills to match resume (Languages, Developer Tools, Technologies/Frameworks)
  * Added live demo link for Web Developer experience at Indreni NGO
  * Modernized navbar with gradient text and hover effects
  * Applied consistent gradient backgrounds across all sections
  * Enhanced footer with modern styling and grid pattern
  * Fixed database connection for Supabase integration
  * Updated color scheme to be more developer-focused with indigo/purple gradients
  * Improved certifications section with proper links and modern icons
  * Added floating code elements and animations for developer aesthetic
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```