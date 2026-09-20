"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CheckoutPage() {
  const { items, total } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSubmitted(true);
  };

  if (items.length === 0) {
    return (
      <main>
        <section className="auth-section">
          <div className="auth-card">
            <h1>السلة فارغة</h1>

            <p>
              أضف بعض الوجبات إلى السلة أولاً.
            </p>

            <Link
              href="/restaurants"
              className="primary-button"
            >
              تصفح المطاعم
            </Link>
          </div>
        </section>
      </main>
    );
  }

  if (submitted) {
    return (
      <main>
        <section className="auth-section">
          <div className="auth-card">
            <h1>تم استلام طلبك ✅</h1>

            <p>
              شكرًا لك {name}، سيتم تجهيز طلبك
              وإرساله إلى العنوان المحدد.
            </p>

            <p style={{ marginTop: "10px" }}>
              إجمالي الطلب:{" "}
              {total.toLocaleString("ar-IQ")} د.ع
            </p>

            <div style={{ marginTop: "20px" }}>
              <Link
                href="/orders"
                className="primary-button"
              >
                متابعة الطلب
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="auth-section">
        <div className="auth-card">
          <h1>إتمام الطلب</h1>

          <p>
            أدخل معلومات التوصيل الخاصة بك.
          </p>

          <form
            onSubmit={handleSubmit}
            className="auth-form"
          >
            <label htmlFor="name">
              الاسم
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="أدخل اسمك"
              required
            />

            <label htmlFor="phone">
              رقم الهاتف
            </label>

            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) =>
                setPhone(event.target.value)
              }
              placeholder="07XXXXXXXXX"
              required
            />

            <label htmlFor="address">
              عنوان التوصيل
            </label>

            <textarea
              id="address"
              value={address}
              onChange={(event) =>
                setAddress(event.target.value)
              }
              placeholder="أدخل عنوان التوصيل بالتفصيل"
              rows={4}
              required
            />

            <div
              style={{
                background: "#f7f7f7",
                padding: "15px",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            >
              <strong>
                إجمالي الطلب:{" "}
                {total.toLocaleString("ar-IQ")} د.ع
              </strong>
            </div>

            <button
              type="submit"
              className="primary-button"
            >
              تأكيد الطلب
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
