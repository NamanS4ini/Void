import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        {children}
      </body>
      </html>
      </ClerkProvider>
  );
}
