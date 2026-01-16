# Project Context

## Purpose

**101test** is a modern Full-Stack Web Application built to demonstrate best practices using the "Ironclad" Tech Stack. It serves as a robust starter template and playground for learning Next.js 16 features, Drizzle ORM integration, and authenticated workflows.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, clsx, tailwind-merge
- **UI Components:** Shadcn/ui, Lucide React
- **Database:** PostgreSQL
- **ORM:** Drizzle ORM
- **Authentication:** NextAuth v5 (Auth.js), Bcrypt.js
- **State Management:** TanStack Query, Zustand
- **Forms & Validation:** React Hook Form, Zod

## Project Conventions

### Code Style

- **File Naming:** strictly `kebab-case` for all files and folders (e.g., `user-profile/page.tsx`).
- **Language:** TypeScript only (no JS).
- **Imports:** Use absolute imports `@/` where possible.

### Architecture Patterns

- **App Router:** Use `app/` directory for routing.
- **Server Actions:** Use Next.js Server Actions for mutations.
- **Database Access:** Use `lib/db.ts` for Drizzle client.
- **Authentication:** Use `auth()` helper from `lib/auth.ts` for server-side sessions.
- **Client State:** Wrap application with `QueryClientProvider` in `components/providers.tsx`.

### Testing Strategy

- **Type Safety:** Strict TypeScript checking.
- **Build Checks:** Ensure `npm run build` passes before deployment.
- **Manual Verification:** Verify database connections and UI flows.

### Git Workflow

- Standard feature branch workflow (implied).

## Domain Context

- **User Management:** Standard email/password credential flow with database storage.
- **101test:** Focused on learning and testing new stack capabilities.

## Important Constraints

- **Performance:** optimize for Web Vitals.
- **Security:** Secure handling of `AUTH_SECRET` and Database Credentials.

## External Dependencies

- **PostgreSQL Database:** External hosted instance (or local).
