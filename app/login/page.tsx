"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("سيتم ربط تسجيل الدخول مع Supabase في الخطوة القادمة.");
  };

  return (
    <main>
      <section className="auth-section">
        <div className="auth-card">
          <h1>تسجيل الدخول</h1>

          <p>سجل دخولك إلى حسابك في كربلاء فود</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <label htmlFor="email">البريد الإلكتروني</label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="example@email.com"
              required
            />

            <label htmlFor="password">كلمة المرور</label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="****"
              required
            />

            <button type="submit" className="primary-button">
              تسجيل الدخول
            </button>
          </form>

          <p className="auth-footer">
            ليس لديك حساب؟{" "}
            <Link href="/register">إنشاء حساب جديد</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
