import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { webConfig } from '../../utils/webConfig';
import {
    largerBreakPoint,
    largerMobileBreakPoint,
    photographyBreakPoint,
} from '../styles/theme';
import { photographyData } from './photographyData';

const StyledDiv = styled.div`
    width: 100%;
    justify-content: flex-end;
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 48%;
    left: 50%;
    transform: translate(-50%, 0);
    img {
        transition: all 1s ease-in-out;
    }
    .credit {
        display: flex;
        justify-content: flex-end;
        align-items: start;
        text-align: right;
        width: 170px;
        font-size: 14px;
        margin-top: 68px;
        .credit-content {
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: flex-end;
            height: 150px;
            border-right: 1px solid #000;
        }
    }
    @media only screen and (max-width: 1200px) {
        width: auto;
        left: 60%;
    }
    @media only screen and (max-width: ${largerBreakPoint}px) {
        img {
            width: 300px;
            height: auto;
        }
    }
    @media only screen and (max-width: ${photographyBreakPoint}px) {
        top: 0;
        left: 40%;
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        flex-direction: column-reverse;
        justify-content: center;
        left: 50%;
        .credit {
            margin-top: 0px;
            display: block;
            width: 100%;
            .credit-content {
                border: none;
                display: block;
                text-align: center;
            }
        }
    }
`;

let interval: NodeJS.Timeout;
const NUMBER_OF_PHOTOS = photographyData.length - 1;
const PHOTOGRAPHY_TIMER = 3000;
const observerOptions: IntersectionObserverInit = {
    root: null, // window scroll
    rootMargin: '0px',
    threshold: 0.3, // percentage of target's visible area
};

const PhotographySlider: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const divRef = ref.current;
        if (!divRef) return;
        const callback = ([entry]: IntersectionObserverEntry[]) => {
            if (entry.isIntersecting) {
                interval = setInterval(() => {
                    setIndex((i) => (i < NUMBER_OF_PHOTOS ? i + 1 : 0));
                }, PHOTOGRAPHY_TIMER);
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

    const data = photographyData[index];

    return (
        <StyledDiv ref={ref}>
            <div className="credit">
                <div className="credit-content">
                    <div>{data.name}</div>
                    <div>{data.company}</div>
                </div>
            </div>
            <img
                src={`${webConfig.basePath}/${data.url}`}
                width={350}
                height={622.23}
                alt={data.name}
                title={data.name}
            />
        </StyledDiv>
    );
};

export default PhotographySlider;
