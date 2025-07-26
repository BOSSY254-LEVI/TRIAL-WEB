# Project Overview

This is a modern full-stack web application for creating a personal portfolio website for Livingstone Oduor Otieno, an Information Technology Expert from Nairobi, Kenya. The application is built with React/TypeScript frontend and Express.js backend, featuring a modern dark theme design with gradient elements and glassmorphism effects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with custom configuration

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reloading with Vite integration
- **Storage**: In-memory storage with interface for future database integration

### Key Components

#### Frontend Structure
- **Single Page Application** with component-based architecture
- **Responsive Design** optimized for mobile and desktop
- **Section-based Layout**: Hero, About, Skills, Experience, Education, Contact
- **UI Library**: Complete shadcn/ui component set with dark theme
- **Animations**: CSS animations and transitions for smooth user experience

#### Backend Structure
- **RESTful API** with Express.js routes (currently minimal setup)
- **Storage Interface** designed for easy database integration
- **Development Middleware** with request logging and error handling
- **Static File Serving** integrated with Vite for development

## Data Flow

### Current Implementation
- **Static Content**: Portfolio information stored in component files
- **Form Handling**: Contact form with client-side validation (mock submission)
- **Navigation**: Smooth scrolling between sections using anchor links
- **Responsive Interactions**: Mobile-friendly navigation and interactions

### Planned Database Integration
- **User Schema**: Basic user model with username/password (Drizzle ORM ready)
- **PostgreSQL**: Configured for Neon Database with connection pooling
- **Migrations**: Drizzle Kit setup for schema management

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database driver for Neon
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI components
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight React router

### Development Tools
- **Vite**: Fast build tool and dev server
- **TypeScript**: Type safety and better developer experience
- **ESLint/Prettier**: Code quality and formatting (implied)
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

### Build Process
- **Frontend Build**: Vite builds React app to `dist/public`
- **Backend Build**: esbuild compiles TypeScript server to `dist/index.js`
- **Production Bundle**: Single deployment artifact with static files

### Environment Setup
- **Development**: `npm run dev` - Hot reloading with Vite
- **Production**: `npm run build && npm start` - Optimized build
- **Database**: Environment variable `DATABASE_URL` required for PostgreSQL

### Hosting Considerations
- **Static Assets**: Served from Express in production
- **API Routes**: All backend routes prefixed with `/api`
- **Database**: Designed for Neon PostgreSQL (serverless)
- **Session Storage**: PostgreSQL session store configured

## Key Features

### Portfolio Sections
1. **Hero Section**: Animated introduction with gradient backgrounds
2. **About Section**: Professional profile with glassmorphism cards
3. **Skills Section**: Animated progress bars with intersection observers
4. **Experience Section**: Professional work history with gradient borders
5. **Education Section**: Academic background with icons and achievements
6. **Contact Section**: Interactive form with toast notifications
7. **Footer**: Social links and professional information

### Technical Highlights
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Dark Theme**: Consistent dark color scheme with gradient accents
- **Performance**: Optimized with React Query caching and lazy loading
- **Accessibility**: Semantic HTML and ARIA labels throughout
- **Type Safety**: Full TypeScript coverage for better maintainability

This architecture provides a solid foundation for a professional portfolio website with room for future enhancements like content management, blog functionality, or client dashboards.