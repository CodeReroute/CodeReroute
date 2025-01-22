import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Script from 'next/script';
import { webConfig } from './webConfig';

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Google / Search Engine Tags --> */}
        <meta
          itemProp="name"
          content={title}
        />
        <meta
          itemProp="description"
          content={description}
        />
        <meta
          name="keywords"
          content={keywords}
        />
        <meta
          itemProp="image"
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
          content={title}
        />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:image"
          content={featuredImage}
        />
        <meta
          property="og:image:alt"
          content={title}
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
          content={title}
        />
        <meta
          property="twitter:image"
          content={featuredImage}
        />
        <meta
          property="twitter:description"
          content={description}
        />
        <meta
          name="twitter:title"
          content={title}
        />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta
          name="twitter:image"
          content={featuredImage}
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="/arrow-icon-light.png"
          media="(prefers-color-scheme: dark)"
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${webConfig.gaTrackingId}`}
        ></script>
        <Script
          async
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${webConfig.gaTrackingId}');
            `,
          }}
        />
      </head>
      <body className={`${goga.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
