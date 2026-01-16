import { auth } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function DashboardPage() {
  const session = await auth()

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Dashboard</h3>
        <p className="text-sm text-muted-foreground">
          Welcome back, {session?.user?.name || "User"}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        {/* Add more cards here as needed */}
      </div>
    </div>
  )
}
