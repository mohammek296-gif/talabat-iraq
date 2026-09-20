"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");

    if (!supabase) {
      setError("لم يتم إعداد اتصال Supabase بعد.");
      return;
    }

    try {
      setLoading(true);

      const { error: loginError } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (loginError) {
        setError(loginError.message);
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("حدث خطأ أثناء تسجيل الدخول.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="auth-section">
        <div className="auth-card">
          <h1>تسجيل الدخول</h1>

          <p>سجل دخولك إلى حسابك في كربلاء فود</p>

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

          <form onSubmit={handleSubmit} className="auth-form">
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
              required
            />

            <button
              type="submit"
              className="primary-button"
              disabled={loading}
            >
              {loading
                ? "جاري تسجيل الدخول..."
                : "تسجيل الدخول"}
            </button>
          </form>

          <p className="auth-footer">
            ليس لديك حساب؟{" "}
            <Link href="/register">
              إنشاء حساب جديد
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
