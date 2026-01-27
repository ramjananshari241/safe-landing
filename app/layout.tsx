import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // 🚨 这一行最关键！没有它，样式全无。

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AntPal Security Check",
  description: "Secure Payment Gateway",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}