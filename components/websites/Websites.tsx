import React from 'react';
import styled from 'styled-components';
import { LinkBox } from '../shared/ButtonBox';
import {
    Heading,
    ContentStyles,
    sanSerifFont,
    largerBreakPoint,
    largerMobileBreakPoint,
    darkWhite,
    darkBrown,
} from '../styles/theme';
import { useTranslate } from '../../utils/hooks/useTranslate';
import { ContentSlideUp } from '../styles/ContentSlideUp';

const StyledDiv = styled.div`
    background-color: ${darkWhite};
    border-bottom: 1px solid ${darkBrown};
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
        getInTouch: t('labels.getInTouch'),
        detailOne: t('websites.details.detailOne'),
        detailTwo: t('websites.details.detailTwo'),
        programming: t('about.skillSets.programming'),
        frameworks: t('about.skillSets.frameworks'),
        tools: t('about.skillSets.tools'),
    };
    return (
        <StyledDiv>
            <ContentStyles padding={147} contentMargin>
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
                            <LinkBox
                                text={getInTouch}
                                href="https://www.linkedin.com/in/danielle-dufour/"
                                isLight={false}
                            />
                        </ContentSlideUp>
                    </div>
                </div>
            </ContentStyles>
        </StyledDiv>
    );
};

export default Websites;
