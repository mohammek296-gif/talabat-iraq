import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";

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
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
