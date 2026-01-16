import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "101test - Next.js 16 Starter",
    template: "%s | 101test",
  },
  description: "A robust starter template for Next.js 16, Drizzle ORM, and Tailwind CSS.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Drizzle ORM", "TypeScript", "Starter"],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://101test.com",
    title: "101test - Next.js 16 Starter",
    description: "Production-ready boilerplate for Next.js 16.",
    siteName: "101test",
  },
  twitter: {
    card: "summary_large_image",
    title: "101test - Next.js 16 Starter",
    description: "Production-ready boilerplate for Next.js 16.",
    creator: "@yourhandle",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
