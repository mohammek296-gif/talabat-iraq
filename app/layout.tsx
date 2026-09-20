import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "كربلاء فود",
  description: "منصة طلب وتوصيل الطعام في كربلاء",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
