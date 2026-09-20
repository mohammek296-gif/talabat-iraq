import Link from "next/link";

export default function Header() {
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
        </Link>
      </div>
    </header>
  );
}
