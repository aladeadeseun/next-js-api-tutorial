import type { Metadata } from "next";
import "./globals.css";

import {Schibsted_Grotesk, Martian_Mono} from "next/font/google"

const schibstedGrotesk = Schibsted_Grotesk({
  variable:"--font-schibsted-grotesk",
  subsets:['latin']
})

const martianMono = Martian_Mono({
  variable:"--font-martian-mono",
  subsets:['latin']
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Role Based Access Control built with Next JS 16 and React 19.",
  keywords:["team", "access controls"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-slate-950 text-slate-50 ${schibstedGrotesk.variable} ${martianMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
