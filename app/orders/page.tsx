"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";

type Order = {
  id: string;
  restaurant: string;
  total: number;
  status: string;
  statusClass: string;
};

export default function OrdersPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const checkUser = async () => {
      if (!supabase) {
        setLoading(false);
        return;
      }

      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
        return;
      }

      setLoading(false);
    };

    checkUser();
  }, [router]);

  if (loading) {
    return (
      <main>
        <Header />

        <section className="auth-section">
          <div className="auth-card">
            <h1>جاري التحميل...</h1>

            <p>
              نتحقق من حسابك.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <Header />

      <section className="restaurants">
        <div className="container">
          <div className="section-heading">
            <h1>طلباتي</h1>

            <p>
              تابع طلباتك السابقة والحالية
            </p>
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

                    <p style={{ marginTop: "8px" }}>
                      رقم الطلب: {order.id}
                    </p>

                    <p style={{ marginTop: "8px" }}>
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
