# كربلاء فود
مشروع Next.js + Supabase عربي RTL لمنصة توصيل الطعام في كربلاء.

## التشغيل
1. انسخ `.env.local.example` إلى `.env.local`.
2. ضع `NEXT_PUBLIC_SUPABASE_URL` و`NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. شغّل `npm install` ثم `npm run dev`.

## مخطط Supabase المستخدم
restaurants, foods, orders, order_items, profiles, drivers, driver_profiles, driver_locations, order_assignments, driver_applications.

ملاحظة: المشروع لا يحتوي أي مفتاح سري. استخدم anon/publishable key فقط في الواجهة. لا تضع service_role key في المتصفح.
