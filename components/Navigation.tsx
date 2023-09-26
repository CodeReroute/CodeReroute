import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { keyframes } from 'styled-components';
import LanguageCircle from '../utils/hooks/language/LanguageCircle';
import LanguageSelector from '../utils/hooks/language/LanguageSelector';
import {
    buttonBoxShadow,
    darkBrown,
    darkGray,
    darkWhite,
    largerMobileBreakPoint,
} from './styles/theme';

const sideInAnimation = keyframes`
    0% {
        transform: rotate(-90deg) translateX(-100%);
    }
    100% {
        transform: rotate(-90deg) translateX(0);
    }
`;

export const SlideUp = styled.div`
    animation: ${sideInAnimation} 0.6s ease-in;
`;

const height = '46.8px';

const StyledDiv = styled(SlideUp)`
    position: fixed;
    z-index: 999;
    left: 50px;
    bottom: 9%;
    height: 40px;
    color: ${darkBrown};
    display: flex;
    flex-direction: row;
    align-items: center;
    transform-origin: left;
    transform: rotate(-90deg);
    .nav {
        ${buttonBoxShadow};
        padding: 0px 15px 3px 15px;
        border-radius: 30px;
        background-color: ${darkWhite};
        border: 1px solid ${darkGray};
        margin-left: 80px;
        a {
            margin-right: 10px;
            margin-left: 10px;
        }
    }
    .slider-enter {
        height: 0;
        overflow: hidden;
    }
    .slider-enter-active {
        height: ${height};
        transition: height 0.3s linear;
    }
    .slider-exit {
        height: ${height};
    }
    .slider-exit-active {
        height: 0;
        overflow: hidden;
        transition: height 0.3s linear;
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        display: none;
    }
`;

const Navigation: React.FC = () => {
    const [isSelectorOpen, setSelectorOpen] = useState<boolean>(false);
    const onOpenSelector = () => setSelectorOpen((s) => !s);
    return (
        <StyledDiv>
            <LanguageCircle isOpen={isSelectorOpen} onClick={onOpenSelector} />
            <CSSTransition
                in={isSelectorOpen}
                unmountOnExit
                timeout={300}
                classNames="slider"
            >
                <LanguageSelector onClick={onOpenSelector} />
            </CSSTransition>
            <div className="nav">
                <a href="#about">
                    <h6>ABOUT US</h6>
                </a>
                <a href="#contact">
                    <h6>CONTACT</h6>
                </a>
                <a href="#employment">
                    <h6>EMPLOYMENT</h6>
                </a>
            </div>
        </StyledDiv>
    );
};

export default Navigation;
