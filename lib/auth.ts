import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { db } from "./db"
import { users } from "./schema"
import { eq } from "drizzle-orm"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(db),
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const user = await db.query.users.findFirst({
                    where: eq(users.email, String(credentials.email)),
                })

                if (!user || !user.password) {
                    return null
                }

                const isValid = await bcrypt.compare(
                    String(credentials.password),
                    user.password
                )

                if (!isValid) {
                    return null
                }

                return user
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.id as string
            }
            return session
        },
    },
})
