import React, { useEffect } from 'react';
import LanguageProvider from '../utils/hooks/language/LanguageProvider';
import Hero from '../components/hero/Hero';
import MetaTags from '../components/MetaTags';
import Profiles from '../components/profile/Profiles';
import About from '../components/about/About';
import Websites from '../components/websites/Websites';
import Photography from '../components/photography/Photography';
import Impact from '../components/impact/Impact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { webConfig } from '../utils/webConfig';

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
                keywords="marketing, communications, canada, agency, edmonton, alberta, consultations, photography, graphic design, web design, websites, digital, branding, local, indigenous, organizations, nonprofit"
                description="Code Reroute is a creative marketing agency building & designing custom-coded websites; crafting visual identities and providing business development support"
            />
            <LanguageProvider>
                <Hero />
                {/* <Intro /> */}
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a id="contact" />
                <About />
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a id="investors" />
                <Websites />
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a id="about" />
                <Profiles />
                {/* <Services /> */}
                <Photography />
                {/* <Clients /> */}
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                {/* <a id="employment" />
                <Employment /> */}
                {/* <Testimonials /> */}
                {/* <Impact /> */}
                <Footer />
                {/* <Navigation /> */}
                <Header />
            </LanguageProvider>
        </>
    );
};

export default Home;
