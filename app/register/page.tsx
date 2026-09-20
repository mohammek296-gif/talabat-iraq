"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!supabase) {
      setError("لم يتم إعداد اتصال Supabase بعد.");
      return;
    }

    try {
      setLoading(true);

      const { data, error: registerError } =
        await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
            },
          },
        });

      if (registerError) {
        setError(registerError.message);
        return;
      }

      if (data.session) {
        router.push("/");
        router.refresh();
        return;
      }

      setSuccess(
        "تم إنشاء الحساب. تحقق من بريدك الإلكتروني لتأكيد الحساب."
      );
    } catch {
      setError("حدث خطأ أثناء إنشاء الحساب.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="auth-section">
        <div className="auth-card">
          <h1>إنشاء حساب</h1>

          <p>
            أنشئ حسابك وابدأ الطلب من كربلاء فود
          </p>

          {error && (
            <div
              style={{
                background: "#ffe8e8",
                color: "#b42318",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "18px",
                fontSize: "14px",
              }}
            >
              {error}
            </div>
          )}

          {success && (
            <div
              style={{
                background: "#e8f7ee",
                color: "#18794e",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "18px",
                fontSize: "14px",
              }}
            >
              {success}
            </div>
          )}

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

            <label htmlFor="email">
              البريد الإلكتروني
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="example@email.com"
              required
            />

            <label htmlFor="password">
              كلمة المرور
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              placeholder="****"
              minLength={6}
              required
            />

            <button
              type="submit"
              className="primary-button"
              disabled={loading}
            >
              {loading
                ? "جاري إنشاء الحساب..."
                : "إنشاء الحساب"}
            </button>
          </form>

          <p className="auth-footer">
            لديك حساب بالفعل؟{" "}
            <Link href="/login">
              تسجيل الدخول
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
