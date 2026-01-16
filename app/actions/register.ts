"use server";

import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { z } from "zod";

const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export type RegisterState = {
    error?: string;
    success?: boolean;
};

export async function registerAction(
    prevState: RegisterState,
    formData: FormData
): Promise<RegisterState> {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    const validatedFields = registerSchema.safeParse({
        email,
        password,
        confirmPassword,
    });

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors.confirmPassword?.[0] ||
                validatedFields.error.flatten().fieldErrors.password?.[0] ||
                "Invalid input",
        };
    }

    try {
        const existingUser = await db.query.users.findFirst({
            where: eq(users.email, email.toLowerCase()),
        });

        if (existingUser) {
            return { error: "Email already in use" };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.insert(users).values({
            email: email.toLowerCase(),
            name: email.split("@")[0], // Default name from email
            password: hashedPassword,
        });

        return { success: true };
    } catch (error) {
        console.error("Registration error:", error);
        return { error: "Something went wrong. Please try again." };
    }
}
