"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updateProfile } from "@/app/actions/user"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
})

export function ProfileForm({ user }: { user: any }) {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || "",
    },
  })

  async function onSubmit(data: z.infer<typeof profileSchema>) {
    setLoading(true)
    setMessage("")
    
    const result = await updateProfile(data)
    
    if (result.error) {
      setMessage("Error updating profile")
    } else {
      setMessage("Profile updated successfully")
    }
    setLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>Update your display name and personal details.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" value={user?.email} disabled />
            <p className="text-xs text-muted-foreground">Email cannot be changed.</p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Display Name</Label>
            <Input id="name" {...register("name")} />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>
          <Button disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
          {message && <p className="text-sm text-muted-foreground">{message}</p>}
        </form>
      </CardContent>
    </Card>
  )
}
