import type { Metadata } from 'next';

import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Background from '@/components/BackgroundWrapper';

const goga = localFont({
  src: [
    {
      path: '../../public/fonts/GogaTest-Extrabold-BF6646d5d7d0a2b.otf',
    },
  ],
  variable: '--font-goga',
});

const title = 'Code Reroute';
const description =
  'Code Reroute is a female-led tech company building innovative web and mobile apps— mappetizer';
const keywords =
  'software development, canada, agency, edmonton, alberta, consultations, web design, software engineering, digital, app development, communications, web application, mobile application';
const featuredImage = 'https://codereroute.com/assets/sharing-meta-image.png';

export const metadata: Metadata = {
  title,
  description,
  keywords,
  openGraph: {
    title,
    description,
    images: [featuredImage],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${goga.variable} font-sans`}>
        <Background />
        <div
          className="min-h-screen flex flex-col bg-cover bg-center bg-fixed relative z-10"
          style={{}}
        >
          <Header />
          <main className="h-[100vh]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
