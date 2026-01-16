<!-- OPENSPEC:START -->
# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# AGENTS.md

This file provides context and instructions for AI agents working on this codebase.

## 1. Project Overview
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS v4, shadcn/ui patterns
- **Database:** PostgreSQL with Drizzle ORM
- **State Management:** Zustand, React Query
- **Auth:** NextAuth.js (beta)

## 2. Build & Test Commands

### Development
- **Start Dev Server:** `npm run dev` (Runs on http://localhost:3000)
- **Build Production:** `npm run build`
- **Start Production:** `npm run start`

### Quality Checks
- **Linting:** `npm run lint` (ESLint)
- **Type Checking:** `npx tsc --noEmit`

### Testing
- **Status:** No test framework is currently configured (no Jest/Vitest found).
- **Action:** If asked to write tests, verify if a test framework has been added or propose adding one (e.g., Vitest) before proceeding.

## 3. Code Style & Conventions

### Imports
- **Path Aliases:** Always use `@/` for internal imports (e.g., `import { cn } from "@/lib/utils"`).
- **React:** `import * as React from "react"` is preferred in UI components.
- **Order:** External libraries first, then internal imports.

### TypeScript
- **Strict Mode:** Enabled. Avoid `any`. Explicitly type props and return values where inference is insufficient.
- **Interfaces:** Use `interface` for object definitions and component props.
- **Exports:** Use named exports for utilities (`export const ...`) and default exports for pages/layouts (`export default function ...`).

### Components (Next.js App Router)
- **Structure:** Functional components.
- **Naming:** PascalCase for component filenames and functions (e.g., `Button.tsx`, `function Button`).
- **Client/Server:** default to Server Components. Add `"use client"` directive at the top only when needing interactivity (hooks, event listeners).

### Styling (Tailwind CSS)
- **Utility First:** Use Tailwind classes directly in `className`.
- **Merging:** Use `cn()` utility (clsx + tailwind-merge) for conditional classes and overriding default styles.
  ```tsx
  className={cn("bg-primary", className)}
  ```
- **Variants:** Use `cva` (class-variance-authority) for complex component variants (see `components/ui/button.tsx`).

### Database (Drizzle ORM)
- **Schema:** Defined in `lib/schema.ts`.
- **Naming:**
  - TypeScript variables: camelCase (e.g., `userId`).
  - Database columns: camelCase usually, but snake_case for specific OAuth fields (e.g., `refresh_token`).
- **Migrations:** Managed via `drizzle-kit`.

## 4. File Structure
- `app/`: Next.js App Router pages and layouts.
- `components/`: Shared React components.
- `components/ui/`: Reusable UI primitives (shadcn/ui style).
- `lib/`: Utilities, database configuration, schema, auth logic.
- `drizzle/`: Database migration files.
- `public/`: Static assets.

## 5. Error Handling
- Use `try/catch` blocks for async operations, especially database calls.
- In Server Actions or API routes, return structured error responses.
- Ensure proper typing for errors (e.g., `if (error instanceof Error)`).
