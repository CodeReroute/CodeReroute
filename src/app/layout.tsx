import type { Metadata } from 'next';

import './globals.css';
import localFont from 'next/font/local';
import Background from '@/components/BackgroundWrapper';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { webConfig } from '@/utils/webConfig';

const goga = localFont({
  src: [
    {
      path: '../../public/fonts/GogaTest-Extrabold-BF6646d5d7d0a2b.otf',
    },
  ],
  variable: '--font-goga',
});

const title = 'Code Reroute';
const description = 'Female-led tech company';
const keywords =
  'software development, canada, agency, edmonton, alberta, consultations, web design, software engineering, digital, app development, communications, web application, mobile application';
const featuredImage = 'https://codereroute.com/sharing-meta-image.png';

export const metadata: Metadata = {
  title,
  description,
  keywords,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title,
    description,
    url: 'https://codereroute.com',
    images: [
      {
        alt: title,
        url: featuredImage,
      },
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {webConfig.gaTrackingId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${webConfig.gaTrackingId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${webConfig.gaTrackingId}', {
                      page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
        <link
          rel="icon"
          type="image/x-icon"
          href="/arrow-icon-light.png"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className={`${goga.variable} font-sans`}>
        <Background />
        <div className="min-h-[100svh] flex flex-col bg-cover bg-center bg-fixed relative z-10">
          <Header />
          <main className="h-[100svh]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
