import Link from "next/link";

export default function OrdersPage() {
  return (
    <main>
      <section className="restaurants">
        <div className="container">
          <div className="section-heading">
            <h1>طلباتي</h1>
            <p>تابع طلباتك السابقة والحالية</p>
          </div>

          <div className="restaurant-card">
            <div className="restaurant-info">
              <h3>لا توجد طلبات حالياً</h3>

              <p>
                عندما تقوم بإجراء طلب، ستظهر تفاصيله هنا.
              </p>

              <div style={{ marginTop: "20px" }}>
                <Link
                  href="/restaurants"
                  className="primary-button"
                >
                  تصفح المطاعم
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
