import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { ArrowRight, Database, LayoutTemplate, Lock, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between px-4 sm:px-8">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="hidden font-bold sm:inline-block">101test</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/api/auth/signin">
                <Button variant="default">Sign In</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto px-4">
            <div className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium">
              Option 1: The Lean & Clean Starter
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              A Modern Foundation for your Next.js Project
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Built with Next.js 16, Drizzle ORM, Tailwind CSS v4, and NextAuth.
              Clean, minimal, and ready to scale.
            </p>
            <div className="space-x-4">
              <Link href="https://github.com/your-repo">
                <Button size="lg" className="h-11 px-8">
                  Get Started
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="h-11 px-8">
                  View Features
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24 mx-auto px-4"
        >
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <FeatureCard
              icon={<Zap className="h-10 w-10" />}
              title="Next.js 16"
              description="App Router, Server Actions, and the latest React features."
            />
            <FeatureCard
              icon={<Database className="h-10 w-10" />}
              title="Drizzle ORM"
              description="Type-safe, lightweight, and performant database interaction."
            />
            <FeatureCard
              icon={<Lock className="h-10 w-10" />}
              title="Auth Ready"
              description="NextAuth v5 configured with secure credential flow."
            />
            <FeatureCard
              icon={<LayoutTemplate className="h-10 w-10" />}
              title="Shadcn UI"
              description="Beautiful, accessible components built with Radix and Tailwind."
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10" />}
              title="Dark Mode"
              description="Built-in theme switching with next-themes."
            />
            <FeatureCard
              icon={<Database className="h-10 w-10" />}
              title="SEO Optimized"
              description="Meta tags, sitemap, and robots.txt pre-configured."
            />
          </div>
        </section>
      </main>
      
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row mx-auto px-4">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Your Name
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/your-repo"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div className="space-y-2">
          {icon}
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}