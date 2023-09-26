import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export type AnimationProps = {
    time?: number;
    delay?: number;
};

export const FadeIn = styled.div`
    animation: ${fadeInAnimation} ${(props: AnimationProps) => props.time || 1}s
        ease-in;
`;
