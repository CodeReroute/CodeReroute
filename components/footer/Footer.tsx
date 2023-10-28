import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import {
    ContentStyles,
    largerMobileBreakPoint,
    pictureGradient,
    sanSerifFont,
    tabletBreakPoint,
    white,
} from '../styles/theme';
import SocialMediaIcons from '../socialMedia/SocialMediaIcons';
import Logo from '../../public/assets/logo.png';
import { ContentSlideUp } from '../styles/ContentSlideUp';
import { webConfig } from '../../utils/webConfig';

const StyledFooter = styled.footer`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: ${white};
    background-image: ${pictureGradient},
        url(${webConfig.basePath}/assets/employment-background.jpeg);
    color: ${white};
    font-size: 16px;
    font-family: ${sanSerifFont};
    letter-spacing: 0.3px;
    height: 695px;
    display: flex;
    align-items: center;
    .declaration {
        margin: 50px auto 0 auto;
        max-width: 642px;
        text-align: center;
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
        .code-icons {
            margin-bottom: 5px;
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
                        <ContentSlideUp>
                            <a
                                rel="nofollow noreferrer"
                                target="_blank"
                                href="https://g.page/codereroute/review"
                            >
                                hype
                            </a>
                        </ContentSlideUp>
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
                                className="code-icons"
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
