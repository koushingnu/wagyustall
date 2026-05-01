import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wagyu Stall - Halal Wagyu in Shibuya",
  description: "Authentic Halal Wagyu restaurant in the heart of Shibuya. MPJA certified with prayer facilities.",
  icons: {
    icon: '/Hero Page/halal logo.png',
  },
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
