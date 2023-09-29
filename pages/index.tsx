import React, { useEffect } from 'react';
import LanguageProvider from '../utils/hooks/language/LanguageProvider';
import Hero from '../components/hero/Hero';
import MetaTags from '../components/MetaTags';
import Navigation from '../components/Navigation';
import Intro from '../components/intro/Intro';
import Profiles from '../components/profile/Profiles';
import About from '../components/about/About';
import { webConfig } from '../utils/webConfig';
import Websites from '../components/websites/Websites';
import Services from '../components/services/Services';
import Photography from '../components/photography/Photography';
import Employment from '../components/employment/Employment';
import Clients from '../components/clients/Clients';
import Impact from '../components/impact/Impact';
import Footer from '../components/footer/Footer';
import Testimonials from '../components/testimonials/Testimonials';
import Header from '../components/header/Header';

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
                <a id="about" />
                <About />
                <Websites />
                <Profiles />
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                <a id="contact" />
                {/* <Services /> */}
                <Photography />
                {/* <Clients /> */}
                {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                {/* <a id="employment" />
                <Employment /> */}
                {/* <Testimonials /> */}
                <Impact />
                <Footer />
                {/* <Navigation /> */}
                <Header />
            </LanguageProvider>
        </>
    );
};

export default Home;
