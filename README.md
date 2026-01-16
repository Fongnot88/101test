# 101test: The Ironclad Starter (Lean & Clean Edition)

A modern, production-ready Full-Stack Boilerplate built for speed, performance, and best practices. Designed for developers who want a solid foundation without the bloat.

## 🚀 Features

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Server Actions)
- **Database:** [PostgreSQL](https://www.postgresql.org/) with [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication:** [NextAuth.js v5](https://authjs.dev/) (Credential Flow configured)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with `clsx` and `tailwind-merge`
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) (Radix Primitives + Lucide Icons)
- **Theming:** Light/Dark mode support via `next-themes`
- **SEO Ready:** Pre-configured Metadata, Sitemap (`sitemap.ts`), and Robots (`robots.ts`)
- **Type Safety:** 100% TypeScript

## 🛠️ Tech Stack

- **Core:** Next.js 16, React 19
- **Database:** Postgres, Drizzle Kit
- **State:** TanStack Query, Zustand
- **Forms:** React Hook Form, Zod
- **Utils:** Lucide React, Geist Font

## 📦 Getting Started

### Prerequisites

- Node.js (LTS version)
- PostgreSQL database (Local or Cloud like Neon/Supabase)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/101test.git
    cd 101test
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Rename `.env.example` to `.env` (or create one) and add your secrets:
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/101test"
    AUTH_SECRET="super-secret-key-change-me"
    NEXT_PUBLIC_APP_URL="http://localhost:3000"
    ```

4.  **Database Setup:**
    Push the schema to your database:
    ```bash
    npx drizzle-kit push
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router (Pages, Layouts, API)
├── components/           # React Components
│   ├── ui/               # Reusable UI components (Shadcn)
│   └── ...
├── lib/                  # Utilities, DB client, Schema, Auth config
├── drizzle/              # Database Migrations & Meta
├── public/               # Static assets
└── openspec/             # Project documentation & specs
```

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npx drizzle-kit studio` - Open Database Studio

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).