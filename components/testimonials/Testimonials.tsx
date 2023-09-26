import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Bullets from '../shared/Bullets';
import { ContentStyles, lighterBrown } from '../styles/theme';
import { testimonialData } from './testimonialData';
import Quote from '../shared/Quote';
import { ContentSlideUp } from '../styles/ContentSlideUp';

const StyledSection = styled.section`
    background-color: ${lighterBrown};
    .heading {
        text-align: center;
    }
    .content-wrapper {
        max-width: 900px;
    }
    .credit {
        margin-top: 50px;
    }
`;

let interval: NodeJS.Timeout;
const HOW_MANY_TESTIMONIALS = testimonialData.length;
const TESTIMONIAL_COUNTER = 5000;
const observerOptions: IntersectionObserverInit = {
    root: null, // window scroll
    rootMargin: '0px',
    threshold: 0.5, // percentage of target's visible area
};

const Testimonials: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState<number>(0);
    const onClick = useCallback((i: number) => setIndex(i), [setIndex]);
    const data = testimonialData[index];
    useEffect(() => {
        clearInterval(interval);
        const divRef = ref.current;
        if (!divRef) return;
        const callback = ([entry]: IntersectionObserverEntry[]) => {
            if (entry.isIntersecting) {
                interval = setInterval(() => {
                    setIndex((i) =>
                        i < HOW_MANY_TESTIMONIALS - 1 ? i + 1 : 0,
                    );
                }, TESTIMONIAL_COUNTER);
            } else {
                clearInterval(interval);
            }
        };
        const divObserver = new IntersectionObserver(callback, observerOptions);
        divObserver.observe(divRef);
        return () => {
            if (divRef) return divObserver.unobserve(divRef);
        };
    }, [ref]);
    return (
        <StyledSection ref={ref}>
            <ContentStyles
                padding={100}
                contentMargin
                className="content-wrapper"
            >
                <ContentSlideUp>
                    <Quote {...data} maxWidth={800} />
                </ContentSlideUp>
                <ContentSlideUp>
                    <Bullets
                        howMany={HOW_MANY_TESTIMONIALS}
                        index={index}
                        onClick={onClick}
                        className="center credit"
                    />
                </ContentSlideUp>
            </ContentStyles>
        </StyledSection>
    );
};

export default Testimonials;
