"use server"

import { db } from "@/lib/db"
import { users } from "@/lib/schema"
import { auth } from "@/lib/auth"
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
