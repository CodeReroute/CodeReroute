import React from 'react';
import styled from 'styled-components';
import {
    lightGray,
    Heading,
    ContentStyles,
    largerMobileBreakPoint,
    black,
    darkWhite,
} from '../styles/theme';
import { LinkBox } from '../shared/ButtonBox';
import { useTranslate } from '../../utils/hooks/useTranslate';
import LaptopImage from '../../public/assets/about/laptop.png';
import MobileImage from '../../public/assets/about/mobile.svg';
import { ContentSlideUp } from '../styles/ContentSlideUp';

const StyledDiv = styled.div`
    background-color: ${lightGray};
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .about {
        max-width: 600px;
    }
    .laptop-grid {
        position: relative;
    }
    .laptop-container {
        width: 100%;
        position: absolute;
        left: 20px;
        bottom: -54px;
        .laptop {
            width: 100%;
            transform: translate(3%, 37%);
        }
        .mobile {
            position: absolute;
            left: 0;
            bottom: 0px;
            z-index: 9;
            width: 150px;
            height: auto;
            transform: translate(0, 55%);
        }
    }
    @media only screen and (max-width: 1200px) {
        .grid {
            grid-template-columns: 1fr;
            grid-gap: 50px;
        }
        .laptop-container {
            position: inherit;
            max-height: 250px;
            .laptop {
                width: 100%;
                max-width: 600px;
                transform: translate(0, 11%);
            }
            .mobile {
                width: 180px;
                height: 320px;
                width: 40%;
                bottom: -80%;
                left: -3%;
                transform: translate(-20%, -20%);
            }
        }
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        .laptop-container {
            left: 0;
            bottom: -10px;
            max-height: 230px;
            .laptop {
                position: inherit;
                margin-bottom: -26%;
                transform: translate(0, 0);
            }
            .mobile {
                display: none;
            }
        }
    }
`;

const About: React.FC = () => {
    const t = useTranslate();
    const {
        heading,
        descriptionOne,
        descriptionTwo,
        descriptionThree,
        getInTouch,
    } = {
        heading: t('about.heading'),
        descriptionOne: t('about.descriptionOne'),
        descriptionTwo: t('about.descriptionTwo'),
        descriptionThree: t('about.descriptionThree'),
        getInTouch: t('labels.getInTouch'),
    };
    return (
        <StyledDiv>
            <ContentStyles padding={100} contentMargin>
                <div className="grid">
                    <div className="about">
                        <ContentSlideUp>
                            <Heading>{heading}</Heading>
                        </ContentSlideUp>
                        <ContentSlideUp>
                            <p>{descriptionOne}</p>
                        </ContentSlideUp>
                        <ContentSlideUp>
                            <p>{descriptionTwo}</p>
                        </ContentSlideUp>
                        <ContentSlideUp>
                            <p>{descriptionThree}</p>
                        </ContentSlideUp>
                        <ContentSlideUp>
                            <LinkBox
                                text={getInTouch}
                                href="https://www.linkedin.com/company/social-reroute"
                                isLight
                                hoverColor={black}
                                hoverTextColor={darkWhite}
                                backgroundColor={lightGray}
                            />
                        </ContentSlideUp>
                    </div>
                    <div className="laptop-grid">
                        <div className="laptop-container">
                            <img
                                src={LaptopImage.src}
                                alt="Laptop"
                                title="Laptop"
                                className="laptop"
                            />
                            <img
                                src={MobileImage.src}
                                alt="Mobile"
                                title="Mobile"
                                className="mobile"
                            />
                        </div>
                    </div>
                </div>
            </ContentStyles>
        </StyledDiv>
    );
};

export default About;
