import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Language from './Language';
import Logo from '../../public/assets/logo-dark.png';
import { darkWhite, photographyBreakPoint } from '../styles/theme';
import { FadeIn } from '../styles/animations';

const StyledDiv = styled.div`
    padding-top: 12px;
    padding-bottom: 12px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${darkWhite};
    box-shadow: 0px 1px 38px 0px #ccc;
    visibility: hidden;
    z-index: 999;
    display: flex;
    .hidden {
        visibility: hidden;
    }
    .logo {
        margin-bottom: -5px;
        opacity: 0.6;
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

const Header: React.FC = () => {
    // eslint-disable-line @typescript-eslint/no-non-null-assertion
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!ref.current) return;
        const listener = () => {
            if (window.scrollY > window.innerHeight) {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                ref.current!.style.visibility = 'visible';
            } else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                ref.current!.style.visibility = 'hidden';
            }
        };
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, [ref]);

    return (
        <StyledDiv ref={ref}>
            <Language className="language-selector hidden" />
            <div className="menu-wrapper">
                <div className="menu">
                    <a href="#about" className="menu-item">
                        <h6>ABOUT US</h6>
                    </a>
                    <a href="#restaurateurs" className="menu-item">
                        <h6>RESTAURATEURS</h6>
                    </a>
                    <a href="#home">
                        <FadeIn className="logo">
                            <Image
                                priority
                                src={Logo}
                                width={200}
                                height={27.51}
                                placeholder="blur"
                                alt="Code Reroute"
                                title="Code Reroute"
                            />
                        </FadeIn>
                    </a>
                    <a href="#contact" className="menu-item">
                        <h6>CONTACT</h6>
                    </a>
                    <a href="#employment" className="menu-item">
                        <h6>EMPLOYMENT</h6>
                    </a>
                    <Language className="language-selector" />
                </div>
            </div>
        </StyledDiv>
    );
};

export default Header;
