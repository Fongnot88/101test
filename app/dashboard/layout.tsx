import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { UserNav } from "@/components/user-nav"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4 mx-auto px-4">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold">101test</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <UserNav user={session.user} />
          </div>
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] mx-auto px-4">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardSidebar />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}
