import React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { webConfig } from '../utils/webConfig';

class MyDocument extends Document {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        href={`${webConfig.basePath}/fonts.css`}
                    />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        rel="android-chrome"
                        sizes="512x512"
                        href={`${webConfig.basePath}/android-chrome-512x512.png`}
                    />
                    <link
                        rel="android-chrome"
                        sizes="192x192"
                        href={`${webConfig.basePath}/android-chrome-192x192.png`}
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href={`${webConfig.basePath}/apple-touch-icon.png`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href={`${webConfig.basePath}/favicon-32x32.png`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href={`${webConfig.basePath}/favicon-16x16.png`}
                    />
                    <link
                        rel="icon"
                        type="image/x-icon"
                        href={`${webConfig.basePath}/favicon.ico`}
                    />
                    <link
                        rel="manifest"
                        href={`${webConfig.basePath}/site.webmanifest`}
                    />
                    {webConfig.isProduction && (
                        <>
                            <script
                                async
                                src={`https://www.googletagmanager.com/gtag/js?id=${webConfig.gaTrackingId}`}
                            />
                            <script
                                // eslint-disable-next-line react/no-danger
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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
