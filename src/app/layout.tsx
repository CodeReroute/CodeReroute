import type { Metadata } from 'next';

import './globals.css';
import localFont from 'next/font/local';
import { Header } from '@/components/ui';
import { webConfig } from '@/utils/webConfig';

const goga = localFont({
  src: [
    {
      path: '../../public/fonts/GogaTest-Extrabold-BF6646d5d7d0a2b.otf',
    },
  ],
  variable: '--font-goga',
});

const siteTitle = 'Code Reroute';
const siteDescription = 'Female-led tech company';
const keywords =
  'software development, canada, agency, edmonton, alberta, consultations, web design, software engineering, digital, app development, communications, web application, mobile application';
const featuredImage = 'https://codereroute.com/sharing-meta-image.png';

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: [
      { url: '/favicon.ico', media: '(prefers-color-scheme: light)' },
      { url: '/arrow-icon-light.png', media: '(prefers-color-scheme: dark)' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  keywords,
  openGraph: {
    type: 'website',
    url: 'https://codereroute.com',
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        alt: siteTitle,
        url: featuredImage,
      },
    ],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          name="name"
          content={siteTitle}
        />
        <meta
          name="title"
          content={siteTitle}
        />
        <meta
          name="description"
          content={siteDescription}
        />
        <meta
          name="keywords"
          content={keywords}
        />
        <meta
          name="image"
          content={featuredImage}
        />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://codereroute.com"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:title"
          content={siteTitle}
        />
        <meta
          property="og:description"
          content={siteDescription}
        />
        <meta
          property="og:image"
          content={featuredImage}
        />
        <meta
          property="og:image:alt"
          content={siteTitle}
        />
        <meta
          property="fb:app_id"
          content="811203999437355"
        />
        {/* <!-- Twitter Meta Tags --> */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          property="twitter:url"
          content="https://codereroute.com"
        />
        <meta
          property="twitter:title"
          content={siteTitle}
        />
        <meta
          property="twitter:image"
          content={featuredImage}
        />
        <meta
          property="twitter:description"
          content={siteDescription}
        />
        <meta
          name="twitter:title"
          content={siteTitle}
        />
        <meta
          name="twitter:description"
          content={siteDescription}
        />
        <meta
          name="twitter:image"
          content={featuredImage}
        />
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
        <div className="min-h-[100svh] h-[100svh] flex flex-col bg-cover bg-center bg-fixed relative z-10 w-full lg:w-11/12 mx-auto">
          <Header />
          <main className="flex-1 overflow-hidden ">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
