"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function ProfilePage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      if (!supabase) {
        setLoading(false);
        return;
      }

      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
        return;
      }

      setEmail(data.user.email ?? "");

      setName(
        data.user.user_metadata?.name ?? ""
      );

      setLoading(false);
    };

    loadUser();
  }, [router]);

  const handleLogout = async () => {
    if (!supabase) {
      return;
    }

    await supabase.auth.signOut();

    router.push("/");
    router.refresh();
  };

  if (loading) {
    return (
      <main>
        <section className="auth-section">
          <div className="auth-card">
            <h1>جاري التحميل...</h1>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="auth-section">
        <div className="auth-card">
          <h1>حسابي</h1>

          <p>
            مرحبًا {name || "بك"} 👋
          </p>

          <div
            style={{
              background: "#f7f7f7",
              borderRadius: "12px",
              padding: "18px",
              marginBottom: "20px",
            }}
          >
            <p>
              <strong>الاسم:</strong>{" "}
              {name || "غير محدد"}
            </p>

            <p style={{ marginTop: "8px" }}>
              <strong>البريد الإلكتروني:</strong>{" "}
              {email}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Link
              href="/orders"
              className="primary-button"
            >
              طلباتي
            </Link>

            <Link
              href="/restaurants"
              className="secondary-button"
            >
              تصفح المطاعم
            </Link>

            <button
              type="button"
              className="secondary-button"
              onClick={handleLogout}
            >
              تسجيل الخروج
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
