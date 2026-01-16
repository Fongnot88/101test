import { auth } from "@/lib/auth"
import { ProfileForm } from "@/components/dashboard/profile-form"
import { PasswordForm } from "@/components/dashboard/password-form"
import { Separator } from "@/components/ui/separator"

export default async function ProfilePage() {
  const session = await auth()

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>
      <Separator />
      <div className="grid gap-8">
        <ProfileForm user={session?.user} />
        <PasswordForm />
      </div>
    </div>
  )
}
