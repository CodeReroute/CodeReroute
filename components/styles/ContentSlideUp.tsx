import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

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

const StyledDiv = styled.div`
    .hidden {
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
    }
    .content-animation {
        animation: ${slideUpAnimation} 1s ease-in;
    }
`;

interface ContentSlideUpProps {
    rootMargin?: string;
    threshold?: number;
    children: React.ReactChildren | React.ReactElement | React.ReactElement[];
}

export const ContentSlideUp: React.FC<ContentSlideUpProps> = ({
    rootMargin = '0px',
    threshold = 1.0,
    children,
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
        <StyledDiv ref={contentRef}>
            <div className={mount ? 'content-animation' : 'hidden'}>
                {children}
            </div>
        </StyledDiv>
    );
};
