export const webConfig = {
    isProduction: process.env.APP_ENV === 'production',
    basePath: process.env.CODE_REROUTE_BASE_PATH || '',
    sendEmailBaseUrl:
        process.env.SEND_EMAIL_BASE_URL ||
        'http://localhost:9000/.netlify/functions/api',
    gaTrackingId: process.env.GA_TRACKING_ID,
    calendly: {
        url: 'https://calendly.com/social-reroute/discoverymeeting',
        css: 'https://assets.calendly.com/assets/external/widget.css',
        script: 'https://assets.calendly.com/assets/external/widget.js',
    },
};
