# Project Context: 101test

## Purpose

**101test** is a modern Full-Stack Web Application built to demonstrate best practices using the "Ironclad" Tech Stack. It serves as a robust starter template and playground for learning Next.js 16 features, Drizzle ORM integration, and authenticated workflows.

## Tech Stack

- **Framework:** Next.js 16.1.2 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
- **UI Components:** Shadcn/ui (Radix Primitives), Lucide React
- **Database:** PostgreSQL (`postgres` driver)
- **ORM:** Drizzle ORM v0.45.1, Drizzle Kit v0.31.8
- **Authentication:** NextAuth v5 (Auth.js) beta, Bcrypt.js
- **State Management:** TanStack Query v5, Zustand v5
- **Forms & Validation:** React Hook Form, Zod v4

## Project Structure

- **`app/`**: Next.js App Router pages, layouts, and API routes.
- **`components/`**: React components.
  - `ui/`: Reusable primitive components (Shadcn).
- **`drizzle/`**: Database migrations and metadata.
- **`lib/`**: Core utilities and configuration.
  - `db.ts`: Database client instance.
  - `auth.ts`: Authentication configuration.
  - `schema.ts`: Database schema definitions.
- **`openspec/`**: Project documentation and specifications.
- **`public/`**: Static assets.

## Development Commands

- `npm run dev`: Start development server on localhost:3000.
- `npm run build`: Build for production.
- `npm run db:seed`: Seed the database.
- `npx drizzle-kit generate`: Generate migrations.
- `npx drizzle-kit push`: Push schema changes directly to DB (dev only).
- `npx drizzle-kit studio`: Open database GUI.

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

## Domain Context

- **User Management:** Standard email/password credential flow with database storage.
- **101test:** Focused on learning and testing new stack capabilities.

## Important Constraints

- **Performance:** optimize for Web Vitals.
- **Security:** Secure handling of `AUTH_SECRET` and Database Credentials.
