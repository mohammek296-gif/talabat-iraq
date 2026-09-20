import Link from "next/link";

const orders = [
  {
    id: "#1001",
    restaurant: "مطعم كربلاء برغر",
    total: 10000,
    status: "قيد التجهيز",
    statusClass: "pending",
  },
];

export default function OrdersPage() {
  return (
    <main>
      <section className="restaurants">
        <div className="container">
          <div className="section-heading">
            <h1>طلباتي</h1>
            <p>تابع طلباتك السابقة والحالية</p>
          </div>

          {orders.length === 0 ? (
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
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {orders.map((order) => (
                <article
                  key={order.id}
                  className="restaurant-card"
                >
                  <div className="restaurant-info">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "15px",
                        flexWrap: "wrap",
                      }}
                    >
                      <h3>{order.restaurant}</h3>

                      <span
                        className={order-status ${order.statusClass}}
                      >
                        {order.status}
                      </span>
                    </div>

                    <p
                      style={{
                        marginTop: "8px",
                      }}
                    >
                      رقم الطلب: {order.id}
                    </p>

                    <p
                      style={{
                        marginTop: "8px",
                      }}
                    >
                      الإجمالي:{" "}
                      {order.total.toLocaleString("ar-IQ")} د.ع
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
