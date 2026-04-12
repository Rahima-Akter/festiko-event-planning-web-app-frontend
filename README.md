# Festiko - Event Management Platform

> A modern, full-featured event management and ticketing platform built with Next.js, React, and TypeScript. Festiko enables users to create events, manage participants, handle payments via Stripe, and streamline event operations.

![Next.js](https://img.shields.io/badge/Next.js-16.2.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61dafb?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38b2ac?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Running the Application](#running-the-application)
- [Build & Deployment](#build--deployment)
- [Available Scripts](#available-scripts)
- [API Integration](#api-integration)
- [Authentication](#authentication)
- [Payment Integration](#payment-integration)
- [Database & Backend](#database--backend)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Support & Links](#support--links)

---

## 🚀 Project Overview

**Festiko** is a comprehensive event management solution that streamlines the entire event lifecycle. From event creation and participant management to payment processing and ticket generation, Festiko provides an intuitive platform for:

- Event organizers to create and manage events
- Participants to discover and join events
- Admins to manage users and oversee platform activities
- Seamless payment processing with Stripe integration
- Event ticket generation and distribution
- Review and rating system for events

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 16.2.1** - React meta-framework with App Router
- **React 19.2.4** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Shadcn/ui Components** - High-quality React components
- **Class Variance Authority** - Component variant management
- **Tabler Icons** - Icon library

### State Management & Forms
- **React Hook Form** - Efficient form state management
- **Zod 4.3.6** - TypeScript-first schema validation

### HTTP & API
- **Axios 1.13.6** - HTTP client for API requests

### Payment Processing
- **Stripe React 6.1.0** - Stripe payment integration
- **Stripe JS 9.0.1** - Stripe JavaScript library

### Utilities
- **Date-fns 4.1.0** - Date manipulation and formatting
- **jsonwebtoken 9.0.3** - JWT handling
- **html-to-image 1.11.13** - Convert HTML to images (for tickets)
- **Sonner 2.0.7** - Toast notifications
- **Clsx & Tailwind Merge** - Class name utilities

### Development Tools
- **ESLint 9** - Code linting
- **Babel Plugin React Compiler 1.0.0** - React compiler plugin
- **TypeScript 5** - Static type checking

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** - Version 18.17 or higher ([Download](https://nodejs.org))
- **npm** - Version 9+ or **yarn** - Version 1.22+ or **pnpm** - Version 8+
- **Git** - Version 2.34 or higher ([Download](https://git-scm.com))
- **Stripe Account** - For payment processing ([Sign up](https://stripe.com))

Verify installations:
```bash
node --version    # Should be v18.17.0 or higher
npm --version     # Should be 9.0.0 or higher
git --version     # Should be 2.34.0 or higher
```

---

## 💻 Installation & Setup

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/Rahima-Akter/festiko-event-planning-web-app-frontend.git

# Navigate to the project directory
cd Festiko-frontend
```

### Step 2: Install Dependencies

Choose your preferred package manager:

```bash
# Using npm
npm install

# OR using yarn
yarn install

# OR using pnpm
pnpm install

# OR using bun
bun install
```

### Step 3: Create Environment Variables

Create a `.env.local` file in the project root:

```bash
cp .env.example .env.local  # If example exists
# OR create manually:
touch .env.local
```

### Step 4: Configure Environment Variables

Edit `.env.local` with your configuration (see [Environment Variables](#environment-variables) section).

### Step 5: Run Development Server

```bash
npm run dev
```

The application will start on [http://localhost:3000](http://localhost:3000)

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Backend API Configuration
BACKEND_URL=http://localhost:5000/festiko/v1
FRONTEND_URL=http://localhost:3000

# Server-side only (kept secure on server)
Jwt_SECRET=your_jwt_secret_key_here

# Client-side variables (prefixed with NEXT_PUBLIC_)
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000/festiko/v1
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000

# Stripe Payment Gateway
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```

### Environment Variable Reference

| Variable | Type | Description |
|----------|------|-------------|
| `BACKEND_URL` | Server | Backend API base URL (server-only) |
| `FRONTEND_URL` | Server | Frontend URL (server-only) |
| `Jwt_SECRET` | Server | JWT secret for token validation |
| `NEXT_PUBLIC_BACKEND_URL` | Client | Public backend API URL |
| `NEXT_PUBLIC_FRONTEND_URL` | Client | Public frontend URL |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Client | Stripe publishable key for payments |

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never put sensitive data (like API keys, secrets) in public variables.

---

## 📁 Project Structure

```
Festiko-frontend/
├── src/                              # Source files
│   ├── app/                         # Next.js App Router pages
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Home page
│   │   ├── (auth)/                  # Authentication routes
│   │   │   ├── login/               # Login page
│   │   │   └── register/            # Registration page
│   │   ├── (commontLayout)/         # Common layout routes
│   │   │   ├── events/              # Events listing
│   │   │   ├── event-details/       # Event details
│   │   │   ├── pay/                 # Payment page
│   │   │   ├── payment-success/     # Payment success
│   │   │   ├── payment-failed/      # Payment failed
│   │   │   └── user-info/           # User information
│   │   ├── dashboard/               # Admin/Organizer dashboard
│   │   │   ├── event-management/    # Manage events
│   │   │   ├── user-management/    # Manage users
│   │   │   └── soft-deleted-users/  # Soft-deleted users
│   │   ├── profile/                 # User profile routes
│   │   │   ├── my-events/           # User's events
│   │   │   ├── my-participations/   # Events user joined
│   │   │   ├── settings/            # User settings
│   │   │   ├── incoming-join-requests/
│   │   │   ├── invitations/         # Invitations
│   │   │   └── my-reviews/          # User reviews
│   │   └── event-pass/              # Event ticket/pass
│   │
│   ├── components/                  # Reusable React components
│   │   ├── modules/                 # Feature-specific modules
│   │   │   ├── auth/                # Login/Register components
│   │   │   ├── dashboard/           # Dashboard components
│   │   │   ├── events/              # Event components
│   │   │   ├── home/                # Home page components
│   │   │   ├── paymentFailed/       # Payment failed components
│   │   │   ├── paymentSuccess/      # Payment success components
│   │   │   ├── profile/             # Profile components
│   │   │   └── userInfo/            # User info components
│   │   ├── shared/                  # Shared components across app
│   │   │   ├── deleteConfirmationModal.tsx
│   │   │   ├── emptyState.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── loader.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── notFound.tsx
│   │   │   └── pagination.tsx
│   │   └── ui/                      # Base UI components
│   │       ├── button.tsx
│   │       ├── spinner.tsx
│   │       └── sonner.tsx
│   │
│   ├── services/                    # API service layer
│   │   ├── auth/                    # Authentication services
│   │   │   ├── auth.service.ts
│   │   │   └── getSession.service.ts
│   │   ├── event/                   # Event services
│   │   │   └── event.service.ts
│   │   ├── participation/           # Participation services
│   │   ├── reviews/                 # Review services
│   │   └── stats/                   # Statistics services
│   │
│   ├── types/                       # TypeScript type definitions
│   │   ├── meta.types.ts
│   │   ├── auth/
│   │   │   ├── auth.types.ts
│   │   │   ├── allUsers.types.ts
│   │   │   └── publicProfile.types.ts
│   │   ├── event/
│   │   │   └── event.types.ts
│   │   ├── invitation/
│   │   ├── participation/
│   │   ├── reviews/
│   │   └── stats/
│   │
│   ├── zod/                         # Zod validation schemas
│   │   ├── auth.schema.ts
│   │   ├── event.schema.ts
│   │   └── review.schema.ts
│   │
│   ├── lib/                         # Utility libraries
│   │   ├── utils.ts                 # General utilities
│   │   └── axios/                   # Axios configuration
│   │       └── axiosHttp.ts         # HTTP client setup
│   │
│   ├── roles/                       # Role-based access control
│   │   └── roles.ts
│   │
│   ├── actions/                     # Server actions
│   │
│   ├── assets/                      # Static assets
│   │
│   ├── env.ts                       # Environment variables config
│   ├── proxy.ts                     # API proxy configuration
│   └── globals.css                  # Global styles
│
├── public/                          # Static files (served as-is)
│   └── [favicon, images, etc]
│
├── .env.example                     # Example environment variables
├── .env.local                       # Local environment variables (git-ignored)
├── next.config.ts                  # Next.js configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── postcss.config.mjs              # PostCSS configuration
├── tsconfig.json                   # TypeScript configuration
├── eslint.config.mjs               # ESLint configuration
├── components.json                 # Shadcn/ui components config
├── package.json                    # Project dependencies
├── package-lock.json               # Locked dependency versions
├── AGENTS.md                        # Agent instructions
├── CLAUDE.md                        # Claude AI instructions
└── README.md                        # This file
```

### Directory Purpose Summary

| Directory | Purpose |
|-----------|---------|
| `src/app` | Page routes and layouts (Next.js App Router) |
| `src/components` | Reusable React component library |
| `src/services` | API communication and business logic |
| `src/types` | TypeScript interfaces and types |
| `src/zod` | Data validation schemas |
| `src/lib` | Shared utilities and configurations |
| `src/roles` | Role-based access control logic |
| `public` | Static assets and files |

---

## ✨ Key Features

### 🎫 Event Management
- Create, edit, and delete events
- Rich event details (description, date, location, capacity)
- Event categorization and filtering
- Event visibility control (public/private)

### 👥 User Management
- User registration and authentication
- User profile customization
- Role-based access (User, Organizer, Admin)
- User soft deletion for data retention

### 🎟️ Event Participation
- Join/leave events
- Event invitation system
- Participant management
- Join request approvals

### 💳 Payment Processing
- Stripe integration for secure payments
- Payment status tracking

### 🎟️ Ticketing System
- Automatic ticket generation
- HTML-to-image ticket conversion
- Unique ticket codes
- Digital ticket distribution

### ⭐ Review System
- Event reviews and ratings
- Review moderation
- User review history
- Rating statistics

### 📊 Dashboard Analytics
- Event statistics
- Participation metrics
- Revenue tracking
- User activity insights

### 🔐 Security
- JWT-based authentication
- Secure API communication
- Server-side secret management
- Input validation with Zod

---

## 🏃 Running the Application

### Development Mode

```bash
npm run dev
```

- Starts dev server on [http://localhost:3000](http://localhost:3000)
- Hot module replacement (HMR) enabled
- Console shows build warnings/errors
- Optimal for development and testing

### Production Build

```bash
npm run build
```

Creates optimized production build in `.next` directory:
- Code minification and optimization
- Static generation where possible
- Asset optimization
- Takes 2-5 minutes depending on project size

### Start Production Server

```bash
npm run start
```

- Runs the production build
- For use after `npm run build`
- Required for production deployment

### Linting

```bash
npm run lint
```

- Checks code quality
- Identifies potential issues
- Shows ESLint violations

---

## 🏗️ Build & Deployment

### Pre-Deployment Checklist

```bash
# 1. Ensure all dependencies are installed
npm install

# 2. Run linting
npm run lint

# 3. Create production build
npm run build

# 4. Test production build locally
npm run start
```

### Deployment Options

#### Option 1: Vercel (Recommended)

1. Push code to GitHub/GitLab
2. Connect repository at [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Auto-deploy on push

```bash
# Create .env.production.local before deployment
NEXT_PUBLIC_BACKEND_URL=https://api.yourdomain.com/festiko/v1
NEXT_PUBLIC_FRONTEND_URL=https://yourdomain.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_key
```

## 📝 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Create optimized production build
npm run build

# Run production server (post-build)
npm run start

# Run ESLint to check code quality
npm run lint

# Build and start in one command (post-build)
npm run build && npm run start
```

---

## 🔌 API Integration

### Axios Configuration

API client is configured in [src/lib/axios/axiosHttp.ts](src/lib/axios/axiosHttp.ts):

```typescript
// Backend base URL from environment
const apiUrl = env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/festiko/v1";

const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
  headers: { "Content-Type": "application/json" }
});
```

## 🔐 Authentication

### JWT Token Management

Tokens are handled in [src/services/auth/getSession.service.ts](src/services/auth/getSession.service.ts):

```typescript
// JWT is decoded using jsonwebtoken library
import jwt from "jsonwebtoken";

const decoded = jwt.verify(token, process.env.Jwt_SECRET);
```

### Login/Registration

- **Login**: [src/components/modules/auth/login.tsx](src/components/modules/auth/login.tsx)
- **Register**: [src/components/modules/auth/register.tsx](src/components/modules/auth/register.tsx)
- **Service**: [src/services/auth/auth.service.ts](src/services/auth/auth.service.ts)

### Role-Based Access

User roles defined in [src/roles/roles.ts](src/roles/roles.ts):
- `ADMIN` - Full platform access
- `ORGANIZER` - Event creation and management
- `USER` - Event participation

---

## 💳 Payment Integration

### Stripe Setup

1. Create account at [Stripe Dashboard](https://dashboard.stripe.com)
2. Get publishable and secret keys
3. Add to environment:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
   STRIPE_SECRET_KEY=sk_test_xxxxx (backend)
   ```

### Payment Flow

1. User initiates payment on [payment page](src/app/(commontLayout)/pay)
2. Stripe hosted payment form loads
3. User completes payment
4. Success/failure redirects to:
   - Success: `/payment-success`
   - Failed: `/payment-failed`

### Stripe Integration Files

- React Stripe: `@stripe/react-stripe-js` (v6.1.0)
- Stripe SDK: `@stripe/stripe-js` (v9.0.1)
- Server Stripe: `stripe` (v22.0.0)

---

## 🗄️ Database & Backend

Festiko uses a separate backend API. This is the frontend repository.

### Backend Repository

- **API Base URL**: `http://localhost:5000/festiko/v1` (development)
- **Backend Tech**: (Check backend repository for details)
- **API Documentation**: Available at backend repo

### Database Models

The frontend communicates with backend API for:

- **Users**: Authentication, profiles, roles
- **Events**: Creation, management, details
- **Participants**: Event participation, invitations
- **Reviews**: Event ratings and feedback
- **Payments**: Transaction records
- **Tickets**: Ticket generation and distribution

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### Issue: Port 3000 already in use

```bash
# Find process using port 3000
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows

# Kill the process
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

#### Issue: Module not found errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Issue: Environment variables not loading

- Ensure `.env.local` exists in project root
- Server restart may be required: `npm run dev`
- Check variable names match exactly (case-sensitive)

#### Issue: Stripe key errors

```bash
# Verify keys are set correctly
echo $NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  # macOS/Linux
echo %NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY%  # Windows
```

#### Issue: API connection errors

- Verify backend is running on configured URL
- Check `NEXT_PUBLIC_BACKEND_URL` matches backend
- Test API manually: `curl http://localhost:5000/festiko/v1/health`

#### Issue: TypeScript type errors

```bash
# Regenerate types
npm run dev
# Or manually run
npx tsc --noEmit
```

#### Build failures

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

---

## 👥 Contributing

We welcome contributions! Please follow these guidelines:

### Getting Started

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Code Standards

- Follow existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Add comments for complex logic
- Test changes before submitting PR


---

## 📚 Support & Links

### Documentation

- **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **React Docs**: [https://react.dev](https://react.dev)
- **TypeScript Handbook**: [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Shadcn/ui**: [https://ui.shadcn.com](https://ui.shadcn.com)
- **Stripe Docs**: [https://stripe.com/docs](https://stripe.com/docs)
- **Zod Docs**: [https://zod.dev](https://zod.dev)
- **React Hook Form**: [https://react-hook-form.com](https://react-hook-form.com)

### Useful Tools

- **VS Code**: [https://code.visualstudio.com](https://code.visualstudio.com)
- **Postman**: [https://www.postman.com](https://www.postman.com) - API testing
- **Git**: [https://git-scm.com](https://git-scm.com)
- **Node.js**: [https://nodejs.org](https://nodejs.org)
- **Vercel Dashboard**: [https://vercel.com/dashboard](https://vercel.com/dashboard)
- **Stripe Dashboard**: [https://dashboard.stripe.com](https://dashboard.stripe.com)

### Project Links

- **GitHub Repository**: [frontend-repository](https://github.com/Rahima-Akter/festiko-event-planning-web-app-frontend.git)
- **Live Demo Frontend**: [Live Project](https://festiko-frontend.vercel.app/)
- **Live Demo Backend**: [Live Project](https://festiko-backend.vercel.app/festiko/v1)
- **Backend Repository**: [backend-repository](https://github.com/Rahima-Akter/festiko-event-planning-web-app-backend.git)

### Support

For issues, questions, or suggestions:

- **GitHub Issues**: Create an issue in the repository
- **Email**: rahimaakter1527@gmail.com
- **Author**: Rahima Akter

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---










**Made with ❤️ by Rahima Akter**