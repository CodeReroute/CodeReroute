import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInAnimation } from './animations';

const slideUpAnimation = keyframes`
    0% {
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        visibility: visible;
        transform: translateY(0px);
    }
`;

type AnimationTypes = typeof fadeInAnimation | typeof slideUpAnimation;

const StyledDiv = styled.div<{ animationType: AnimationTypes }>`
    .hidden {
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
    }
    .content-animation {
        animation: ${({ animationType }) => animationType} 0.5s ease-in;
    }
`;

interface ContentSlideUpProps {
    rootMargin?: string;
    threshold?: number;
    className?: string;
    animationType?: AnimationTypes;
    children: React.ReactChildren | React.ReactElement | React.ReactElement[];
}

export const ContentSlideUp: React.FC<ContentSlideUpProps> = ({
    rootMargin = '0px',
    threshold = 1.0,
    animationType = fadeInAnimation,
    children,
    className,
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
    }, [contentRef, rootMargin, threshold]);

    return (
        <StyledDiv
            animationType={animationType}
            ref={contentRef}
            className={className}
        >
            <div className={mount ? 'content-animation' : 'hidden'}>
                {children}
            </div>
        </StyledDiv>
    );
};
