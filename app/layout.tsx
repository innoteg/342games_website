import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';
// import { arial, din, sourceHanSansCN } from '@/lib/font'
import { inter } from '@/lib/font'
import { Toaster } from '@/components/ui/toaster';
// import { Toaster as HotToaster } from 'react-hot-toast'
export const metadata = {
  title: '342GAMES',
  description: '342GAMES',
  icons: {
    icon: '/facicon.ico',
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en" className={`${arial.variable} ${din.variable} ${sourceHanSansCN.variable}`}>
    <html lang="en" className={`${inter.className}`}>
      <body className='bg-[#18141a]'>
        <ThemeProvider className="flex min-h-screen w-full flex-col">
          <main className="mt-[45px] md:mt-[90px]">
            {children}
          </main>
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
