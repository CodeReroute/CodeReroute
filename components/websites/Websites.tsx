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
    tabletBreakPoint,
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
                <span className="phase-four-desktop">
                    FRONTEND + BACKEND
                    <br />
                    DEVELOPMENT
                </span>
                <span className="phase-four-mobile">
                    FRONTEND +
                    <br />
                    BACKEND DEV
                </span>
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
    .website-timeline {
        padding-top: 168px;
        padding-bottom: 238px;
    }
    .phase-four-mobile {
        display: none;
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
    @media screen and (max-width: ${tabletBreakPoint}px) {
        .website-timeline-wrapper {
            display: flex;
            height: 1000px;
            margin-top: 60px;
            align-items: center;
            padding-bottom: 122px;
            justify-content: center;
            .website-timeline {
                width: 850px;
                padding-top: 0;
                padding-bottom: 0;
                transform: rotate(90deg);
                & > div {
                    width: 850px;
                }
                .line {
                    width: 100%;
                }
                .timeline-wrapper {
                    width: 850px;
                    .dot-wrapper {
                        .text {
                            transform: translate(-50%) rotate(-90deg);
                        }
                        .arrow-icon {
                            transform: rotate(-90deg);
                        }
                        .text.above {
                            text-align: left;
                            margin-bottom: 66px;
                            bottom: 15px;
                        }
                        .text.below {
                            text-align: right;
                            margin-top: 33px;
                            top: 70px;
                        }
                    }
                    .dot-wrapper:nth-child(1) .text.above {
                        bottom: 28px;
                    }
                    .dot-wrapper:nth-child(2) .text.below {
                        top: 37px;
                    }
                    .dot-wrapper:nth-child(3) .text.above {
                        bottom: 13px;
                    }
                    .dot-wrapper:nth-child(4) .text.below {
                        top: 72px;
                        h6 {
                            display: block;
                        }
                        .phase-four-desktop {
                            display: none;
                        }
                        .phase-four-mobile {
                            display: block;
                        }
                    }
                    .dot-wrapper:nth-child(5) .text.above {
                        bottom: 13px;
                    }
                    .dot-wrapper:nth-child(6) .text.below {
                        top: 47px;
                    }
                    .dot-wrapper:nth-child(7) .text.above {
                        bottom: 12px;
                    }
                    .dot-wrapper:nth-child(8) .text.below {
                        top: 47px;
                    }
                }
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
                                href="https://www.linkedin.com/company/social-reroute"
                                isLight={false}
                            />
                        </ContentSlideUp>
                    </div>
                </div>
            </ContentStyles>
            <div className="website-timeline-wrapper">
                <div className="website-timeline">
                    <Timeline phases={phases} />
                </div>
            </div>
        </StyledDiv>
    );
};

export default Websites;
