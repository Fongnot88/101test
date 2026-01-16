"use server"

import { db } from "@/lib/db"
import { users } from "@/lib/schema"
// ... existing code
import { auth, signOut } from "@/lib/auth"

// ... existing updatePassword function

// ... imports
// ... imports

export async function deleteUser() {
  const session = await auth()

  if (!session?.user?.id) {
    return { error: "Unauthorized" }
  }

  try {
    await db.delete(users).where(eq(users.id, session.user.id))
  } catch (error) {
    console.error("Delete user error:", error)
    return { error: "Failed to delete account" }
  }

  await signOut({ redirect: true, redirectTo: "/login?tab=register" })
}
import { eq } from "drizzle-orm"
import { hash } from "bcryptjs"
import { revalidatePath } from "next/cache"

export async function updateProfile(data: { name: string }) {
  const session = await auth()

  if (!session?.user?.id) {
    return { error: "Unauthorized" }
  }

  try {
    await db.update(users)
      .set({ name: data.name })
      .where(eq(users.id, session.user.id))

    revalidatePath("/dashboard/profile")
    return { success: true }
  } catch (error) {
    return { error: "Failed to update profile" }
  }
}

export async function updatePassword(password: string) {
  const session = await auth()

  if (!session?.user?.id) {
    return { error: "Unauthorized" }
  }

  try {
    const hashedPassword = await hash(password, 10)

    await db.update(users)
      .set({ password: hashedPassword })
      .where(eq(users.id, session.user.id))

    return { success: true }
  } catch (error) {
    return { error: "Failed to update password" }
  }
}
