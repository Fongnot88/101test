"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { deleteUser } from "@/app/actions/user"

export function DeleteAccountForm() {
    const [loading, setLoading] = useState(false)

    async function onSubmit() {
        setLoading(true)
        try {
            const result = await deleteUser()
            if (result?.error) {
                // Show error (basic alert for now as I'm not sure of the Toast setup)
                alert(result.error)
                setLoading(false)
            }
            // If success, the server action checks redirect, so client might not need to do anything, 
            // but it's good practice to handle it if redirect fails or is client-side.
            // deleteUser action has `await signOut({ redirect: true, redirectTo: "/" })`
            // so we should be good.
        } catch (error) {
            alert("Something went wrong.")
            setLoading(false)
        }
    }

    return (
        <Card className="border-red-200 dark:border-red-900">
            <CardHeader>
                <CardTitle className="text-red-500 dark:text-red-400">Danger Zone</CardTitle>
                <CardDescription>
                    Permanently delete your account and all of your content. This action cannot be undone.
                </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-end bg-red-50/50 p-4 dark:bg-red-900/10">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive" disabled={loading}>
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Account
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your
                                account and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                onClick={(e) => {
                                    e.preventDefault()
                                    onSubmit()
                                }}
                                className="bg-red-600 hover:bg-red-700"
                            >
                                {loading ? (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                ) : (
                                    "Delete Account"
                                )}
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardFooter>
        </Card>
    )
}
