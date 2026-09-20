"use client";

import Link from "next/link";
import { useCart } from "@/components/CartProvider";
import Header from "@/components/Header";

export default function CartPage() {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    total,
  } = useCart();

  return (
    <main>
      <Header />

      <section className="restaurants">
        <div className="container">
          <div className="section-heading">
            <h1>سلة الطلب</h1>

            <p>
              راجع وجباتك قبل إتمام الطلب
            </p>
          </div>

          {items.length === 0 ? (
            <div className="restaurant-card">
              <div className="restaurant-info">
                <h3>السلة فارغة</h3>

                <p>
                  لم تقم بإضافة أي وجبات إلى السلة بعد.
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
            <div>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="restaurant-card"
                  style={{ marginBottom: "16px" }}
                >
                  <div className="restaurant-info">
                    <h3>{item.name}</h3>

                    <p>
                      السعر:{" "}
                      {item.price.toLocaleString("ar-IQ")} د.ع
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginTop: "15px",
                        flexWrap: "wrap",
                      }}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                      >
                        −
                      </button>

                      <strong>
                        {item.quantity}
                      </strong>

                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          removeItem(item.id)
                        }
                      >
                        حذف
                      </button>
                    </div>

                    <p style={{ marginTop: "15px" }}>
                      المجموع:{" "}
                      {(
                        item.price * item.quantity
                      ).toLocaleString("ar-IQ")}{" "}
                      د.ع
                    </p>
                  </div>
                </div>
              ))}

              <div className="restaurant-card">
                <div className="restaurant-info">
                  <h2>
                    الإجمالي:{" "}
                    {total.toLocaleString("ar-IQ")} د.ع
                  </h2>

                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginTop: "20px",
                      flexWrap: "wrap",
                    }}
                  >
                    <Link
                      href="/checkout"
                      className="primary-button"
                    >
                      إتمام الطلب
                    </Link>
                    <button
                      type="button"
                      className="secondary-button"
                      onClick={clearCart}
                    >
                      تفريغ السلة
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
