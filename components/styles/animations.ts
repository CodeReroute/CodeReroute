import styled, { keyframes } from 'styled-components';

export const fadeInAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const slideDownAnimation = keyframes`
    0% {
        transform: rotateX(-90deg)
    }
    70% {
        transform: rotateX(20deg) 
    }
    100% {
        transform: rotateX(0deg) 
    }
`;

export type FadeInAnimationProps = {
    time?: number;
    delay?: number;
};

export const FadeIn = styled.div<FadeInAnimationProps>`
    ${({ delay }) => (delay ? `animation-delay: ${delay}s;` : '')}
    animation: ${fadeInAnimation} ${({ time }) => time || 1}s ease-in;
`;

interface SlideDownProps extends FadeInAnimationProps {
    height?: number;
    open?: boolean;
}

export const SlideDown = styled.div<SlideDownProps>`
    animation: ${slideDownAnimation} ${({ time }) => time || 1}s ease-in-out
        forwards;
`;
