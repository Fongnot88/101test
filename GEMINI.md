# Project Context: 101test

## Overview
**101test** is a modern Full-Stack Web Application built to demonstrate best practices using the "Ironclad" Tech Stack. It serves as a robust starter template and playground for learning Next.js 16 features, Drizzle ORM integration, and authenticated workflows.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, clsx, tailwind-merge
- **UI Components:** Shadcn/ui (Radix Primitives), Lucide React
- **Database:** PostgreSQL
- **ORM:** Drizzle ORM, Drizzle Kit
- **Authentication:** NextAuth v5 (Auth.js), Bcrypt.js
- **State Management:** TanStack Query, Zustand
- **Forms & Validation:** React Hook Form, Zod

## Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- PostgreSQL Database

### Installation
1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Environment Setup:**
    Ensure you have a `.env` file with the necessary variables (e.g., `DATABASE_URL`, `AUTH_SECRET`).
    ```env
    DATABASE_URL="postgresql://user:password@host:port/dbname"
    AUTH_SECRET="your-secret-key"
    ```
3.  **Run Development Server:**
    ```bash
    npm run dev
    ```
    Access the app at `http://localhost:3000`.

### Building for Production
```bash
npm run build
npm run start
```

## Database Management (Drizzle ORM)
This project uses Drizzle ORM with `drizzle-kit` for schema management. Configuration is located in `drizzle.config.ts`.

- **Push Schema to Database:**
  (Syncs `lib/schema.ts` directly to the DB)
  ```bash
  npx drizzle-kit push
  ```

- **Generate Migrations:**
  ```bash
  npx drizzle-kit generate
  ```

- **View Studio:**
  ```bash
  npx drizzle-kit studio
  ```

## Project Structure
- **`app/`**: Next.js App Router pages, layouts, and API routes.
- **`components/`**: React components (`ui` for Shadcn, `providers.tsx` for context).
- **`lib/`**: Core utilities, database client (`db.ts`), schema definitions (`schema.ts`), and auth config (`auth.ts`).
- **`drizzle/`**: Database migration files and metadata.
- **`openspec/`**: Project documentation and specifications.
- **`public/`**: Static assets.

## Development Conventions
- **File Naming:** Strictly `kebab-case` for all files and folders (e.g., `user-profile/page.tsx`).
- **Imports:** Use absolute imports `@/` where possible.
- **Server Actions:** Prefer Next.js Server Actions for data mutations.
- **Type Safety:** Strict TypeScript usage; avoid `any`.
- **Validation:** Always validate form inputs with Zod schemas.
