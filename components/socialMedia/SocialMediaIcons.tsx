import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FadeInAnimationProps } from '../styles/animations';
import {
    FacebookIcon,
    InstagramIcon,
    LinkedInIcon,
    // PinterestIcon,
    // SpotifyIcon,
    // TikTokIcon,
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

export const SocialMediaIconSlideUp = styled.div<FadeInAnimationProps>`
    animation-fill-mode: forwards;
    animation: ${sideInAnimation} ${({ time }) => time}s ease-in;
    animation-delay: ${({ delay }) => delay}s;
`;

interface StyledDivProps {
    size: number;
    padding: number;
}

export const StyledSocialMediaDiv = styled.div<StyledDivProps>`
    .icon:hover {
        background-color: #e7e7e7;
        transform: translateY(-10%);
    }
    .icon {
        width: ${({ padding }) => padding}px;
        height: ${({ padding }) => padding}px;
        border-radius: 50%;
        background-color: ${darkWhite};
        background-origin: content-box;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        transition: all 0.3s ease-in-out;
    }
    .icon svg {
        width: ${({ size }) => size}px;
        height: ${({ size }) => size}px;
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

export const socialMediaAnimationTime = 0.3;
export const socialMediaAnimationDelayTime = 0.2;

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
    <StyledSocialMediaDiv className={className} padding={padding} size={size}>
        <SocialMediaIconSlideUp
            className="icon-wrapper"
            time={socialMediaAnimationTime}
            delay={socialMediaAnimationDelayTime * 1}
        >
            <a
                href="https://www.instagram.com/code_reroute/"
                target="_blank"
                className="icon-margin-right icon"
                rel="noreferrer"
            >
                {InstagramIcon}
            </a>
        </SocialMediaIconSlideUp>
        <SocialMediaIconSlideUp
            className="icon-wrapper"
            time={socialMediaAnimationTime}
            delay={socialMediaAnimationDelayTime * 2}
        >
            <a
                href="https://www.facebook.com/codereroute"
                target="_blank"
                className="icon-margin-right icon"
                rel="noreferrer"
            >
                {FacebookIcon}
            </a>
        </SocialMediaIconSlideUp>
        <SocialMediaIconSlideUp
            className="icon-wrapper"
            time={socialMediaAnimationTime}
            delay={socialMediaAnimationDelayTime * 3}
        >
            <a
                href="https://www.linkedin.com/in/danielle-dufour/"
                target="_blank"
                className="icon-margin-right icon"
                rel="noreferrer"
            >
                {LinkedInIcon}
            </a>
        </SocialMediaIconSlideUp>
        {/* <SlideUp
            className="icon-wrapper"
            time={animationTime}
            delay={animationDelayTime * 4}
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
            delay={animationDelayTime * 5}
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
            delay={animationDelayTime * 6}
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
    </StyledSocialMediaDiv>
);

export default SocialMediaIcons;
