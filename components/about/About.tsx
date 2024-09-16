import React from 'react';
import styled from 'styled-components';
import {
    lightGray,
    Heading,
    ContentStyles,
    largerMobileBreakPoint,
    black,
    darkWhite,
    largerBreakPoint,
} from '../styles/theme';
import { LinkBox } from '../shared/ButtonBox';
import { useTranslate } from '../../utils/hooks/useTranslate';
// import LaptopImage from '../../public/assets/about/laptop.png';
// import MobileImage from '../../public/assets/about/mobile.svg';
import MobileImage from '../../public/assets/about/mobile.png';
import { ContentSlideUp } from '../styles/ContentSlideUp';

const StyledDiv = styled.div`
    background-color: ${lightGray};
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .about {
    }
    .laptop-grid {
        position: relative;
    }
    .laptop-container {
        width: 100%;
        position: absolute;
        left: 66%;
        bottom: 10px;
        .laptop {
            width: 100%;
            transform: translate(3%, 37%);
        }
        .mobile {
            position: absolute;
            left: 0;
            bottom: -90px;
            z-index: 9;
            width: auto;
            height: 600px;
            transform: translate(-50%, 55%);
        }
    }
    @media only screen and (max-width: ${largerBreakPoint}px) {
        .laptop-container {
            .mobile {
                bottom: 0;
                height: 444px;
            }
        }
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        .grid {
            grid-template-columns: 1fr;
            grid-gap: 30px;
        }
        .laptop-container {
            left: 0;
            bottom: -10px;
            max-height: 320px;
            position: inherit;
            text-align: center;
            .laptop {
                position: inherit;
                margin-bottom: -26%;
                transform: translate(0, 0);
            }
            .mobile {
                position: inherit;
                transform: translate(0, 0);
            }
        }
    }
`;

const About: React.FC = () => {
    const t = useTranslate();
    const { heading, descriptionOne, descriptionThree } = {
        heading: t('about.heading'),
        descriptionOne: t('about.descriptionOne'),
        descriptionThree: t('about.descriptionThree'),
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
                        {/* <ContentSlideUp>
                            <p>{descriptionTwo}</p>
                        </ContentSlideUp> */}
                        <ContentSlideUp>
                            <p>{descriptionThree}</p>
                        </ContentSlideUp>
                        <ContentSlideUp>
                            <LinkBox
                                text="MAPPETIZER"
                                href="http://mappetizer.com/"
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
