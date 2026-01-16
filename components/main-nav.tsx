import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { auth } from "@/lib/auth"
import { UserNav } from "@/components/user-nav"

export async function MainNav() {
  const session = await auth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between px-4 sm:px-8 mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">101test</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-4">
            <ThemeToggle />
            {session ? (
              <div className="flex items-center gap-4">
                  <Link href="/dashboard">
                      <Button variant="ghost">Dashboard</Button>
                  </Link>
                  <UserNav user={session.user} />
              </div>
            ) : (
              <Link href="/login">
                <Button variant="default">Sign In</Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
