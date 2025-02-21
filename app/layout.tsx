import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';
// import { arial, din, sourceHanSansCN } from '@/lib/font'
import { inter } from '@/lib/font'


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
  return (
    // <html lang="en" className={`${arial.variable} ${din.variable} ${sourceHanSansCN.variable}`}>
    <html lang="en" className={`light ${inter.className}`}>

      <ThemeProvider>
        <body className="flex min-h-screen w-full flex-col">{children}</body>
        <Analytics />
      </ThemeProvider>
    </html>
  );
}
