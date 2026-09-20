"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function Header() {
  const { itemCount } = useCart();

  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo">
          كربلاء فود
        </Link>

        <nav className="nav">
          <Link href="/">الرئيسية</Link>
          <Link href="/restaurants">المطاعم</Link>
          <Link href="/orders">طلباتي</Link>
          <Link href="/profile">حسابي</Link>
        </nav>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Link
            href="/login"
            className="secondary-button"
            style={{
              padding: "9px 14px",
              fontSize: "14px",
            }}
          >
            تسجيل الدخول
          </Link>

          <Link href="/cart" className="cart-button">
            🛒 السلة
            {itemCount > 0 &&  (${itemCount})}
          </Link>
        </div>
      </div>
    </header>
  );
}
