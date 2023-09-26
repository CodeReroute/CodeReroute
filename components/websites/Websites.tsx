import React from 'react';
import styled from 'styled-components';
import { LinkBox, openCalendly } from '../shared/ButtonBox';
import {
    Heading,
    ContentStyles,
    sanSerifFont,
    SmallText,
    largerBreakPoint,
    largerMobileBreakPoint,
} from '../styles/theme';
import { useTranslate } from '../../utils/hooks/useTranslate';
import SkillSet from '../about/SkillSet';
import { ContentSlideUp } from '../styles/ContentSlideUp';

const StyledDiv = styled.div`
    .equal-grids,
    .equal-grids-right {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    .left-grid {
        align-self: center;
    }
    .details {
        font-family: ${sanSerifFont};
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
    }
    .laptop {
        width: 100%;
        margin-top: -170px;
        padding-left: 30px;
        padding-right: 30px;
    }
    .web-services {
        justify-self: right;
    }
    ul {
        margin-top: 3px;
        padding-left: 19px;
    }
    @media only screen and (max-width: ${largerBreakPoint}px) {
        .equal-grids {
            grid-template-columns: 1fr;
            grid-gap: 50px;
        }
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        .equal-grids-right {
            grid-template-columns: 1fr;
            .web-services {
                justify-self: left;
            }
        }
    }
`;

const Websites: React.FC = () => {
    const t = useTranslate();
    const {
        heading,
        contentOne,
        contentTwo,
        contentThree,
        getInTouch,
        detailOne,
        detailTwo,
        programming,
        frameworks,
        tools,
    } = {
        heading: t('websites.heading'),
        contentOne: t('websites.contents.contentOne'),
        contentTwo: t('websites.contents.contentTwo'),
        contentThree: t('websites.contents.contentThree'),
        getInTouch: t('labels.getInTouch'),
        detailOne: t('websites.details.detailOne'),
        detailTwo: t('websites.details.detailTwo'),
        programming: t('about.skillSets.programming'),
        frameworks: t('about.skillSets.frameworks'),
        tools: t('about.skillSets.tools'),
    };
    return (
        <StyledDiv>
            <ContentStyles padding={100} contentMargin>
                <div className="equal-grids">
                    <div className="left-grid">
                        <ContentSlideUp>
                            <Heading>{heading}</Heading>
                        </ContentSlideUp>
                        <ContentSlideUp>
                            <p>{contentOne}</p>
                        </ContentSlideUp>
                        <ContentSlideUp>
                            <p>{contentTwo}</p>
                        </ContentSlideUp>
                        <ContentSlideUp>
                            <p>{contentThree}</p>
                        </ContentSlideUp>
                        <ContentSlideUp>
                            <LinkBox
                                text={getInTouch}
                                onClick={openCalendly}
                                isLight={false}
                            />
                        </ContentSlideUp>
                    </div>
                    <SmallText>
                        <div className="details">
                            <div className="equal-grids-right">
                                <div className="skills">
                                    <ContentSlideUp>
                                        <SkillSet
                                            heading={programming}
                                            description="JavaScript, TypeScript, HTML5, CSS3, CSS Animations, Sass, C#, C/C++, Python"
                                        />
                                    </ContentSlideUp>
                                    <ContentSlideUp>
                                        <SkillSet
                                            heading={frameworks}
                                            description="React, React Native, NextJS, NodeJS, Express, .NET"
                                        />
                                    </ContentSlideUp>
                                    <ContentSlideUp>
                                        <SkillSet
                                            heading={tools}
                                            description="Shopify, WordPress, Photoshop, Figma, Canva, Lightroom"
                                        />
                                    </ContentSlideUp>
                                </div>
                                <ContentSlideUp>
                                    <div className="web-services">
                                        <div className="bold">
                                            Website Services
                                        </div>
                                        <ul>
                                            <li>UX/UI design</li>
                                            <li>web applications</li>
                                            <li>e-commerce</li>
                                            <li>payment processors</li>
                                            <li>graphic design</li>
                                            <li>forums/support pages</li>
                                            <li>live chat plugins</li>
                                            <li>email marketing</li>
                                        </ul>
                                    </div>
                                </ContentSlideUp>
                            </div>
                            <ContentSlideUp>
                                <p>{detailOne}</p>
                            </ContentSlideUp>
                            <ContentSlideUp>
                                <p>{detailTwo}</p>
                            </ContentSlideUp>
                        </div>
                    </SmallText>
                </div>
            </ContentStyles>
        </StyledDiv>
    );
};

export default Websites;
