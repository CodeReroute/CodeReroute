import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AnimationProps } from '../styles/animations';
import {
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    PinterestIcon,
    SpotifyIcon,
    TikTokIcon,
} from './Icons';
import { darkWhite } from '../styles/theme';

const sideInAnimation = keyframes`
    0% {
        transform: translateY(0%);
    }
    50% {
        transform: translateY(20%);
    }
    100% {
        transform: translateY(0);
    }
`;

const SlideUp = styled.div`
    animation-fill-mode: forwards;
    animation: ${sideInAnimation} ${(props: AnimationProps) => props.time}s
        ease-in;
    animation-delay: ${(props: AnimationProps) => props.delay}s;
`;

interface StyledDivProps {
    size: number;
    padding: number;
}

const StyledDiv = styled.div`
    .icon:hover {
        background-color: #e7e7e7;
        transform: translateY(-10%);
    }
    .icon {
        width: ${({ padding }: StyledDivProps) => padding}px;
        height: ${({ padding }: StyledDivProps) => padding}px;
        border-radius: 50%;
        background-color: ${darkWhite};
        background-origin: content-box;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        transition: all 0.3s ease-in-out;
    }
    .icon svg {
        width: ${({ size }: StyledDivProps) => size}px;
        height: ${({ size }: StyledDivProps) => size}px;
        fill: #5b5b5b;
    }
    .icon-wrapper {
        display: inline-block;
    }
    .icon-wrapper a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .icon-margin-right {
        margin-right: 8px;
    }
`;

const animationTime = 0.3;
const animationDelayTime = 0.2;

interface SocialMediaIconsProps {
    size: number;
    padding: number;
    className?: string;
}

const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({
    size,
    padding,
    className,
}) => (
    <StyledDiv className={className} padding={padding} size={size}>
        <SlideUp className="icon-wrapper" time={animationTime}>
            <a
                href="https://www.instagram.com/code_reroute/"
                target="_blank"
                className="icon-margin-right icon"
                rel="noreferrer"
            >
                {InstagramIcon}
            </a>
        </SlideUp>
        <SlideUp
            className="icon-wrapper"
            time={animationTime}
            delay={animationDelayTime * 1}
        >
            <a
                href="https://www.facebook.com/codereroute"
                target="_blank"
                className="icon-margin-right icon"
                rel="noreferrer"
            >
                {FacebookIcon}
            </a>
        </SlideUp>
        <SlideUp
            className="icon-wrapper"
            time={animationTime}
            delay={animationDelayTime * 2}
        >
            <a
                href="https://www.linkedin.com/in/danielle-dufour/"
                target="_blank"
                className="icon-margin-right icon"
                rel="noreferrer"
            >
                {LinkedInIcon}
            </a>
        </SlideUp>
        {/* <SlideUp
            className="icon-wrapper"
            time={animationTime}
            delay={animationDelayTime * 3}
        >
            <a
                href="https://www.tiktok.com/@code_reroute"
                target="_blank"
                className="icon-margin-right icon"
                rel="noreferrer"
            >
                {TikTokIcon}
            </a>
        </SlideUp>
        <SlideUp
            className="icon-wrapper"
            time={animationTime}
            delay={animationDelayTime * 4}
        >
            <a
                href="https://www.pinterest.ca/codereroute/_saved/"
                target="_blank"
                className="icon-margin-right icon"
                rel="noreferrer"
            >
                {PinterestIcon}
            </a>
        </SlideUp>
        <SlideUp
            className="icon-wrapper"
            time={animationTime}
            delay={animationDelayTime * 5}
        >
            <a
                href="https://open.spotify.com/user/ut2zfaiznmcd6a19pii8yqnt2?si=SQiRxsrvTrKmGH1ZKAnOkA"
                target="_blank"
                className="icon"
                rel="noreferrer"
            >
                {SpotifyIcon}
            </a>
        </SlideUp> */}
    </StyledDiv>
);

export default SocialMediaIcons;
