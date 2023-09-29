import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Language from './Language';
import styled from 'styled-components';
import Logo from '../../public/assets/logo-dark.png';
import { darkGray, darkWhite, photographyBreakPoint } from '../styles/theme';
import { FadeIn } from '../styles/animations';

interface HeaderProps {}

const StyledDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${darkWhite};
    border-bottom: 2px solid ${darkGray};
    visibility: hidden;
    z-index: 999;
    display: flex;
    .logo {
        margin-bottom: -5px;
        opacity: 0.5;
    }
    .menu-wrapper {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        .menu {
            gap: 20px;
            display: flex;
            width: 100%;
            max-width: 800px;
            align-items: center;
            justify-content: space-between;
        }
    }
    @media only screen and (max-width: ${photographyBreakPoint}px) {
        .menu-wrapper {
            .menu {
                justify-content: center;
                .menu-item {
                    display: none;
                }
            }
        }
    }
`;

const Header: React.FC<HeaderProps> = () => {
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;
        const listener = () => {
            if (window.scrollY > window.innerHeight) {
                ref.current!.style.visibility = 'visible';
            } else {
                ref.current!.style.visibility = 'hidden';
            }
        };
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, [ref.current]);

    return (
        <StyledDiv ref={ref}>
            <div className="menu-wrapper">
                <div className="menu">
                    <a href="#about" className="menu-item">
                        <h6>ABOUT US</h6>
                    </a>
                    <a href="#about" className="menu-item">
                        <h6>INVESTMENT</h6>
                    </a>
                    <FadeIn className="logo">
                        <Image
                            priority
                            src={Logo}
                            width={200}
                            height={27.51}
                            placeholder="blur"
                            alt="Logo"
                            title="Logo"
                        />
                    </FadeIn>
                    <a href="#contact" className="menu-item">
                        <h6>CONTACT</h6>
                    </a>
                    <a href="#employment" className="menu-item">
                        <h6>EMPLOYMENT</h6>
                    </a>
                </div>
            </div>
            <Language className="language-selector" />
        </StyledDiv>
    );
};

export default Header;
