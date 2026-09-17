import './globals.css';import Header from '@/components/Header';import {CartProvider} from '@/components/CartProvider';import {ReactNode} from 'react';
export const metadata={title:'كربلاء فود',description:'منصة توصيل الطعام في كربلاء'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="ar" dir="rtl"><body><CartProvider><Header/><main>{children}</main><footer>كربلاء فود © {new Date().getFullYear()} — منصة طلب وتوصيل الطعام</footer></CartProvider></body></html>}
