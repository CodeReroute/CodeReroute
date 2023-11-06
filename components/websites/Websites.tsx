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
} from '../styles/theme';
import { useTranslate } from '../../utils/hooks/useTranslate';
import { ContentSlideUp } from '../styles/ContentSlideUp';
import Timeline, { TimelinePhase } from './Timeline';

const phases: TimelinePhase[] = [
    {
        id: '1',
        title: 'PHASE 1',
        above: true,
        description: 'MARKET RESEARCH',
        width: 141,
    },
    {
        id: '2',
        title: 'PHASE 2',
        above: false,
        description: 'PROTOTYPING (USER FLOWS)',
        width: 130,
        addIcon: true,
    },
    {
        id: '3',
        title: 'PHASE 3',
        above: true,
        description: 'UI/UX DESIGN',
        width: 105,
    },
    {
        id: '4',
        title: 'PHASE 4',
        above: false,
        width: 169,
        description: (
            <>
                FRONTEND + BACKEND
                <br />
                DEVELOPMENT
            </>
        ),
    },
    {
        id: '5',
        title: 'PHASE 5',
        above: true,
        description: 'USER TESTING',
        width: 105,
    },
    {
        id: '6',
        title: 'PHASE 6',
        above: false,
        description: 'SYSTEM STRESS TESTING',
        width: 120,
    },
    {
        id: '7',
        title: 'PHASE 7',
        above: true,
        description: 'PRE-RELEASE',
        width: 100,
    },
    {
        id: '8',
        title: 'PHASE 8',
        above: false,
        description: 'POST-RELEASE',
        width: 109,
    },
];

const StyledDiv = styled.div`
    background-color: ${darkWhite};
    .content {
        padding-bottom: 0;
    }
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
    .timeline {
        padding-top: 160px;
        padding-bottom: 220px;
    }
    @media only screen and (max-width: ${largerBreakPoint}px) {
        .equal-grids {
            grid-template-columns: 1fr;
            grid-gap: 50px;
        }
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        .content {
            padding-top: 100px;
        }
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
    const { heading, contentOne, contentTwo, getInTouch } = {
        heading: t('websites.heading'),
        contentOne: t('websites.contents.contentOne'),
        contentTwo: t('websites.contents.contentTwo'),
        getInTouch: t('labels.getInTouch'),
    };
    return (
        <StyledDiv>
            <ContentStyles padding={100} contentMargin className="content">
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
            <div className="timeline-wrapper">
                <div className="timeline">
                    <Timeline phases={phases} />
                </div>
            </div>
        </StyledDiv>
    );
};

export default Websites;
