import React, { useEffect, useRef } from 'react';

import styled from 'styled-components';
import { webConfig } from '../../utils/webConfig';
import HeroContent from './HeroContent';
import { white } from '../styles/theme';

const StyledDiv = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
    color: ${white};
    background-image: linear-gradient(
        rgba(94, 88, 88, 0.8),
        rgba(94, 88, 88, 0.9)
    );
    overflow: hidden;
    video {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        object-fit: cover;
    }
`;

const heroVideoOptions: IntersectionObserverInit = {
    root: null, // window scroll
    rootMargin: '0px',
    threshold: 0.1, // percentage of target's visible area
};

const Hero: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        const ref = videoRef.current;
        if (!ref) return;
        const heroVideoCallback = ([entry]: IntersectionObserverEntry[]) => {
            if (entry.isIntersecting) {
                ref.play();
            } else {
                ref.pause();
            }
        };
        const heroVideoObserver = new IntersectionObserver(
            heroVideoCallback,
            heroVideoOptions,
        );
        heroVideoObserver.observe(ref);
        return () => {
            if (ref) return heroVideoObserver.unobserve(ref);
        };
    }, [videoRef]);
    return (
        <StyledDiv>
            <HeroContent />
            <video ref={videoRef} autoPlay muted loop playsInline>
                <source
                    src={`${webConfig.basePath}/assets/background-video.mp4`}
                    type="video/mp4"
                />
                Your browser does not support HTML5 video.
            </video>
        </StyledDiv>
    );
};

export default Hero;
