import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <main>
      <Header />

      <section className="auth-section">
        <div className="auth-card">
          <div
            style={{
              textAlign: "center",
              fontSize: "70px",
              marginBottom: "10px",
            }}
          >
            🔍
          </div>

          <h1>الصفحة غير موجودة</h1>

          <p>
            عذرًا، الصفحة التي تبحث عنها غير موجودة
            أو تم نقلها.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <Link
              href="/"
              className="primary-button"
            >
              العودة إلى الرئيسية
            </Link>

            <Link
              href="/restaurants"
              className="secondary-button"
            >
              تصفح المطاعم
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
