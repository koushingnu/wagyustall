import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wagyu Stall",
  description: "Reference-based landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
