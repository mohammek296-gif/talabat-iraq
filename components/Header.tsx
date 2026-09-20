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
        </nav>

        <Link href="/cart" className="cart-button">
          🛒 السلة
          {itemCount > 0 &&  (${itemCount})}
        </Link>
      </div>
    </header>
  );
}
