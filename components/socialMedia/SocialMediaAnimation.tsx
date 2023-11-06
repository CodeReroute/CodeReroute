import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FadeInAnimationProps } from '../styles/animations';
import { sideInAnimation } from './SocialMediaIcons';

export const SocialMediaIconSlideUp = styled.div<FadeInAnimationProps>`
    .hidden {
        opacity: 0;
        visibility: hidden;
    }
    .social-content-animation {
        animation-fill-mode: forwards;
        animation: ${sideInAnimation} ${({ time }) => time}s ease-in;
        animation-delay: ${({ delay }) => delay}s;
    }
`;

interface SocialMediaAnimationProps {
    time?: number | undefined;
    delay?: number | undefined;
}

const threshold = 1.0;
const rootMargin = '0px';
const SocialMediaAnimation: React.FC<SocialMediaAnimationProps> = ({
    time,
    delay,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [mount, setMount] = useState<boolean>(false);

    useEffect(() => {
        const ref = contentRef.current;
        if (!ref) return;
        const contentOptions: IntersectionObserverInit = {
            root: null, // window scroll
            rootMargin,
            threshold, // percentage of target's visible area
        };
        const contentCallback = ([entry]: IntersectionObserverEntry[]) => {
            if (entry.isIntersecting && entry.intersectionRatio === 1) {
                setMount(true);
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                contentObserver.unobserve(ref);
            }
        };
        const contentObserver = new IntersectionObserver(
            contentCallback,
            contentOptions,
        );
        contentObserver.observe(ref);
        return () => {
            if (ref) return contentObserver.unobserve(ref);
        };
    }, [contentRef]);

    return (
        <SocialMediaIconSlideUp time={time} delay={delay} ref={contentRef}>
            <div
                className={
                    mount ? 'dot social-content-animation' : 'dot hidden'
                }
            />
        </SocialMediaIconSlideUp>
    );
};

export default SocialMediaAnimation;
