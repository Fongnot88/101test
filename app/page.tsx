import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainNav } from "@/components/main-nav";
import { ArrowRight, Code2, Database, Globe, Layers, Layout, Lock, Settings, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans antialiased">
      <MainNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 md:pt-20 lg:pt-32 pb-16">
          <div className="container relative z-10 mx-auto px-4 sm:px-8 flex flex-col items-center text-center">

            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              v1.0.0 Now Available
            </div>

            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Ironclad</span> Stack
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground mb-10 sm:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              A production-ready foundation built with Next.js 16, Drizzle ORM, and Tailwind CSS v4.
              Designed for performance, type transparency, and developer experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <Link href="https://github.com/kungs-jlc/101test" target="_blank">
                <Button size="lg" className="h-12 px-8 text-base rounded-full shadow-lg shadow-primary/20 transition-all hover:scale-105">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="h-12 px-8 text-base rounded-full backdrop-blur-sm bg-background/50 transition-all hover:bg-muted/50">
                  Explore Features
                </Button>
              </Link>
            </div>

          </div>

          {/* Abstract Background Decoration */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[1000px] h-[600px] opacity-30 dark:opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse duration-[10000ms]"></div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Everything you need to ship fast.</h2>
              <p className="text-muted-foreground text-lg">
                Stop configuring and start building. We've handled the boilerplate so you can focus on your product.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Zap className="h-6 w-6 text-yellow-500" />}
                title="Next.js 16"
                description="Leverage the latest App Router features, Server Actions, and React 19 capabilities for blazing fast performance."
              />
              <FeatureCard
                icon={<Database className="h-6 w-6 text-blue-500" />}
                title="Drizzle ORM"
                description="Type-safe SQL schema definition and lightweight queries. Zero dependencies on runtime for maximum speed."
              />
              <FeatureCard
                icon={<Lock className="h-6 w-6 text-green-500" />}
                title="NextAuth v5"
                description="Secure authentication flow using Auth.js beta, fully compatible with the App Router and Server Components."
              />
              <FeatureCard
                icon={<Layout className="h-6 w-6 text-purple-500" />}
                title="Tailwind CSS v4"
                description="The latest evolution of utility-first CSS. Zero-runtime, composable, and optimized for modern layouts."
              />
              <FeatureCard
                icon={<Layers className="h-6 w-6 text-indigo-500" />}
                title="Shadcn UI"
                description="Beautifully designed components built with Radix UI and Tailwind. Accessible, customizable, and copy-paste ready."
              />
              <FeatureCard
                icon={<Settings className="h-6 w-6 text-slate-500" />}
                title="Type-Safe Config"
                description="End-to-end type safety from database to UI. Catch errors at build time, not runtime."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-8">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 text-white p-12 md:p-24 text-center">
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <Code2 className="h-16 w-16 mx-auto text-blue-400 opacity-80" />
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to build something amazing?</h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Clone the repository and deploy your first Ironclad application in minutes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="https://github.com/kungs-jlc/101test" target="_blank">
                    <Button size="lg" className="h-12 px-8 bg-white text-slate-900 hover:bg-slate-100 border-none">
                      View on GitHub
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full blur-[100px] opacity-20"></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/20">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <span className="font-semibold text-lg">101test</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © 2026 101test Project. Open Source. <br className="hidden md:inline" />
              Built with ❤️ for the developer community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-md">
      <CardHeader>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}