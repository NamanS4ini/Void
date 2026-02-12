import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import { dark, shadcn } from '@clerk/themes'
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider"

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Void",
  description: "A modern, open-source, self-hosted chat application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
      }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${openSans.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
