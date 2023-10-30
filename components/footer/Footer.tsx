import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import {
    ContentStyles,
    black,
    largerMobileBreakPoint,
    lightGray,
    sanSerifFont,
    tabletBreakPoint,
} from '../styles/theme';
import SocialMediaIcons from '../socialMedia/SocialMediaIcons';
import Logo from '../../public/assets/logo-dark.png';
import { ContentSlideUp } from '../styles/ContentSlideUp';

const StyledFooter = styled.footer`
    border-top: 1px solid ${black};
    background-color: ${lightGray};
    font-size: 16px;
    font-family: ${sanSerifFont};
    letter-spacing: 0.3px;
    height: 462px;
    display: flex;
    align-items: center;
    .declaration {
        max-width: 642px;
        text-align: center;
        margin: 25px auto 0 auto;
        p {
            margin-bottom: 0;
        }
    }
    .content {
        // padding-bottom: 45px;
    }
    .logo {
        text-align: center;
        margin-bottom: 10px;
    }
    .grid {
        display: grid;
        grid-template-columns: 1fr 1.2fr 1fr;
        grid-gap: 10px;
        .links {
            a {
                display: block;
            }
        }
        .centering {
            display: flex;
            justify-content: center;
        }
        .social-icons {
            margin-bottom: 5px;
            a {
                background-color: ${black};
                svg {
                    fill: ${lightGray};
                }
            }
        }
    }
    @media only screen and (max-width: ${tabletBreakPoint}px) {
        .grid {
            grid-template-columns: 1fr 1fr;
        }
        .links,
        .centering {
            display: block;
            justify-content: left !important;
        }
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        .content {
            padding-top: 45px;
            .grid {
                grid-template-columns: 1fr;
                grid-gap: 30px;
            }
        }
    }
`;

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => (
    <StyledFooter>
        <ContentStyles padding={30} contentMargin className="content">
            <div className="grid">
                <div className="links centering">
                    <div>
                        {/* <ContentSlideUp>
                            <a
                                rel="nofollow noreferrer"
                                target="_blank"
                                href="https://g.page/codereroute/review"
                            >
                                hype
                            </a>
                        </ContentSlideUp> */}
                        <ContentSlideUp>
                            <div>
                                copyright @ {currentYear} Code Reroute
                                {/* <br /> */}
                                {/* designed + developed by Code Reroute */}
                            </div>
                        </ContentSlideUp>
                        {/* <ContentSlideUp>
                            <a href="tel:2502184074">(250) 218 4074</a>
                        </ContentSlideUp> */}
                        {/* <ContentSlideUp>
                            <a
                                rel="nofollow noreferrer"
                                target="_blank"
                                href="https://www.instagram.com/parmarproductions/"
                            >
                                video @parmarproductions
                            </a>
                        </ContentSlideUp> */}
                    </div>
                </div>
                <ContentSlideUp>
                    <ContentSlideUp>
                        <div className="logo">
                            <Link href="/">
                                <a>
                                    <Image
                                        src={Logo}
                                        width={180}
                                        height={25}
                                        placeholder="blur"
                                        alt="Logo"
                                        title="Logo"
                                    />
                                </a>
                            </Link>
                        </div>
                    </ContentSlideUp>
                </ContentSlideUp>
                <div className="centering">
                    <div>
                        <ContentSlideUp>
                            <SocialMediaIcons
                                size={10}
                                padding={20}
                                className="social-icons"
                            />
                        </ContentSlideUp>
                        {/* <ContentSlideUp>
                            <Link href="/privacy-policy/">
                                <a>privacy policy</a>
                            </Link>
                        </ContentSlideUp> */}
                    </div>
                </div>
            </div>
            <ContentSlideUp className="declaration">
                <p>
                    We respectfully acknowledge that we are located on Treaty 6
                    territory, a traditional meeting ground and home for many
                    Indigenous Peoples, including Cree, Saulteaux, Niisitapi
                    (Blackfoot), Métis, and Nakota Sioux Peoples
                </p>
            </ContentSlideUp>
        </ContentStyles>
    </StyledFooter>
);

export default Footer;
