import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps /* , AppContext */ } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { pageView } from '../utils/googleAnalytics';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            pageView(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
