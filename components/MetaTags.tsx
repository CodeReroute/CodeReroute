import Head from 'next/head';
import React from 'react';

interface MetaTagsProps {
    title: string;
    description: string;
    keywords: string;
}

const favIconUrl = 'https://codereroute.com/assets/sharing-meta-image.png';

const MetaTags: React.FC<MetaTagsProps> = ({
    title,
    description,
    keywords,
}) => (
    <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={title} />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,500;1,600;1,700&display=swap"
        />
        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={favIconUrl} />
        {/* <!-- Facebook Meta Tags --> */}
        <meta
            property="og:url"
            content="https://temurih.github.io/CodeReroute"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={favIconUrl} />
        <meta property="og:image:alt" content={title} />
        <meta property="fb:app_id" content="811203999437355" />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
            property="twitter:url"
            content="https://temurih.github.io/CodeReroute/"
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:image" content={favIconUrl} />
        <meta property="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={favIconUrl} />
        <meta
            name="publish_date"
            property="og:publish_date"
            content="2021-04-08T00:00:00-0700"
        />
        <meta name="theme-color" content="#ad9f91" />
    </Head>
);

export default MetaTags;
