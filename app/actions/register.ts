"use server";

import { db } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import { z } from "zod";

const registerSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters").regex(/^[a-zA-Z0-9_]+$/, "Username must contain only letters, numbers, and underscores"),
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
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    const validatedFields = registerSchema.safeParse({
        username,
        email,
        password,
        confirmPassword,
    });

    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors.username?.[0] ||
                validatedFields.error.flatten().fieldErrors.confirmPassword?.[0] ||
                validatedFields.error.flatten().fieldErrors.password?.[0] ||
                "Invalid input",
        };
    }

    try {
        const existingUser = await db.query.users.findFirst({
            where: (users, { or, eq }) => or(eq(users.email, email.toLowerCase()), eq(users.username, username)),
        });

        if (existingUser) {
            if (existingUser.email === email.toLowerCase()) {
                return { error: "Email already in use" };
            }
            return { error: "Username already taken" };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.insert(users).values({
            username,
            email: email.toLowerCase(),
            name: username, // Default name to username
            password: hashedPassword,
        });

        return { success: true };
    } catch (error) {
        console.error("Registration error:", error);
        return { error: "Something went wrong. Please try again." };
    }
}
