import type { Metadata } from "next";
import "./globals.css";

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
        className={`min-h-screen bg-slate-950 text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
