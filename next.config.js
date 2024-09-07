module.exports = {
    env: {
        APP_ENV: process.env.APP_ENV,
        GA_TRACKING_ID: process.env.GA_TRACKING_ID,
        GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
        CODE_REROUTE_BASE_PATH: process.env.CODE_REROUTE_BASE_PATH,
        SEND_EMAIL_BASE_URL: process.env.SEND_EMAIL_BASE_URL,
    },
    basePath: process.env.CODE_REROUTE_BASE_PATH || '',
    trailingSlash: true,
    // https://github.com/vercel/next.js/issues/21079
    // Remove the workaround the issue is fixed
    images: {
        loader: 'imgix',
        path: '/',
    },
    // exportPathMap: async function (
    //     defaultPathMap,
    //     { dev, dir, outDir, distDir, buildId },
    // ) {
    //     return {
    //         '/': { page: '/' },
    //     };
    // },
};
