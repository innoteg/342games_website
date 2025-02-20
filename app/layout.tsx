import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import { useThemeStore } from '@/lib/stores'

export const metadata = {
  title: 'Next.js App Router + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, Postgres, NextAuth, Tailwind CSS, TypeScript, and Prettier.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const theme = useThemeStore((state) => state.theme)
  
  return (
    <html lang="en" className={theme}>
      <body className="flex min-h-screen w-full flex-col">{children}</body>
      <Analytics />
    </html>
  );
}
