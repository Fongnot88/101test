"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updatePassword } from "@/app/actions/user"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

const passwordSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export function PasswordForm() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(passwordSchema),
  })

  async function onSubmit(data: z.infer<typeof passwordSchema>) {
    setLoading(true)
    setMessage("")
    
    const result = await updatePassword(data.password)
    
    if (result.error) {
      setMessage("Error updating password")
    } else {
      setMessage("Password updated successfully")
      reset()
    }
    setLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Change Password</CardTitle>
        <CardDescription>Enter a new password to update your credentials.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="password">New Password</Label>
            <Input id="password" type="password" {...register("password")} />
            {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
            {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>}
          </div>
          <Button disabled={loading} variant="destructive">
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Update Password
          </Button>
          {message && <p className="text-sm text-muted-foreground">{message}</p>}
        </form>
      </CardContent>
    </Card>
  )
}
