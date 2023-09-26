import React from 'react';
import styled, { keyframes } from 'styled-components';
import { darkGray, darkWhite } from '../styles/theme';

const loadingAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const StyledDiv = styled.div`
    border: 5px solid ${darkGray};
    border-radius: 50%;
    border-top: 5px solid ${darkWhite};
    width: 30px;
    height: 30px;
    animation: ${loadingAnimation} 2s linear infinite;
`;

const Loading: React.FC<{ className?: string }> = ({ className }) => (
    <StyledDiv className={className} />
);

export default Loading;
