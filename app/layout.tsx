import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ali Hameed',
  description: 'Ali Hameed',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
         <ThemeProvider >
            {children}
         </ThemeProvider>
        </body>
    </html>
  );
}