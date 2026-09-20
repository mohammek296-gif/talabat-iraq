"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("سيتم ربط إنشاء الحساب مع Supabase في الخطوة القادمة.");
  };

  return (
    <main>
      <section className="auth-section">
        <div className="auth-card">
          <h1>إنشاء حساب</h1>

          <p>أنشئ حسابك وابدأ الطلب من كربلاء فود</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <label htmlFor="name">الاسم</label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="أدخل اسمك"
              required
            />

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
              minLength={6}
              required
            />

            <button type="submit" className="primary-button">
              إنشاء الحساب
            </button>
          </form>

          <p className="auth-footer">
            لديك حساب بالفعل؟{" "}
            <Link href="/login">تسجيل الدخول</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
