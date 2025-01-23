import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Code Reroute',
  description: 'Code Reroute',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className="min-h-screen flex flex-col bg-cover bg-center bg-fixed"
          style={{}} // For now don't have background image
        >
          <Header />
          <main className="h-[100vh]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
