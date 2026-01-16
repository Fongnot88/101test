"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LoginForm } from "@/components/auth/login-form"
import { RegisterForm } from "@/components/auth/register-form"

export function AuthTabs({ defaultTab }: { defaultTab: string }) {
    const router = useRouter()
    // Use searchParams just to read if needed, but defaultTab prop is enough for initial.
    // We use replace to update URL without adding to history stack excessively, or push if they want to go back.
    // Usually replace is better for tabs.

    return (
        <Tabs
            defaultValue={defaultTab}
            className="w-full"
            onValueChange={(value) => {
                // Use window.history to avoid server roundtrip if possible, but router.replace is safer for Next.js app router
                router.replace(`/login?tab=${value}`, { scroll: false })
            }}
        >
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <LoginForm />
            </TabsContent>
            <TabsContent value="register">
                <RegisterForm />
            </TabsContent>
        </Tabs>
    )
}
