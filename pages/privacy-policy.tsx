import React from 'react';
import Footer from '../components/footer/Footer';
import MetaTags from '../components/MetaTags';
import PlainHeader from '../components/privacyPolicy/PlainHeader';
import PrivacyPolicyText from '../components/privacyPolicy/PrivacyPolicyText';

const PrivacyPolicy: React.FC = () => (
    <>
        <MetaTags
            title="Privacy Policy | Code Reroute"
            keywords="code reroute, privacy policy"
            description="Code Reroute - Privacy Policy"
        />
        <PlainHeader />
        <PrivacyPolicyText />
        <Footer />
    </>
);

export default PrivacyPolicy;
