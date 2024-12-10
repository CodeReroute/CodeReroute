import React, { useEffect } from 'react';
import LanguageProvider from '../utils/hooks/language/LanguageProvider';
import Hero from '../components/hero/Hero';
import MetaTags from '../components/MetaTags';
import Profiles from '../components/profile/Profiles';
import About from '../components/about/About';
import Websites from '../components/websites/Websites';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import BusinessIdentity from '../components/photography/BusinessIdentity';
import OurTeam from '../components/team/OurTeam';
import { webConfig } from '../utils/webConfig';
import ReCaptchaV3 from '../utils/ReCaptchaV3';

const description =
    'Code Reroute is a female-led tech company building innovative web and mobile apps— mappetizer';
const keywords =
    'software development, canada, agency, edmonton, alberta, consultations, web design, software engineering, digital, app development, communications, web application, mobile application';

const Home: React.FC = () => {
    useEffect(() => {
        const link = document.createElement('link');
        const script = document.createElement('script');
        link.href = webConfig.calendly.css;
        link.rel = 'stylesheet';
        script.src = webConfig.calendly.script;
        script.type = 'text/javascript';
        document.body.appendChild(link);
        document.body.appendChild(script);
    }, []);
    return (
        <>
            <MetaTags
                title="Code Reroute"
                keywords={keywords}
                description={description}
            />
            <LanguageProvider>
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a id="home" />
                <Hero />
                {/* <Intro /> */}
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a id="contact" />
                <About />
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a id="restaurateurs" />
                <Websites />
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a id="about" />
                <Profiles />
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a id="employment" />
                <BusinessIdentity />
                <OurTeam />
                {/* <Services /> */}
                {/* <Photography /> */}
                {/* <Clients /> */}
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                {/* <a id="employment" />
                <Employment /> */}
                {/* <Testimonials /> */}
                {/* <Impact /> */}
                <Footer />
                {/* <Navigation /> */}
                <Header />
                <ReCaptchaV3 hideText />
            </LanguageProvider>
        </>
    );
};

export default Home;
