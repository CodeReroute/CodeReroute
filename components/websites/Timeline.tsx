import React from 'react';
import styled from 'styled-components';
import { black, largerMobileBreakPoint } from '../styles/theme';
import { webConfig } from '../../utils/webConfig';
import { ContentSlideUp } from '../styles/ContentSlideUp';
import {
    SocialMediaIconSlideUp,
    socialMediaAnimationDelayTime,
    socialMediaAnimationTime,
} from '../socialMedia/SocialMediaIcons';

export interface TimelinePhase {
    id: string;
    title: string;
    description: string | JSX.Element;
    above: boolean;
    width: number;
    left?: string;
    addIcon?: boolean;
}

interface TimelineProps {
    phases: TimelinePhase[];
    className?: string;
}

const StyledDiv = styled.div`
    position: relative;
    .line {
        height: 1px;
        width: 100vw;
        position: absolute;
        left: 0;
        top: 50%;
        background-color: ${black};
    }
    .timeline-wrapper {
        max-width: 1440px;
        margin-right: auto;
        margin-left: auto;
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding-left: 5rem;
        padding-right: 5rem;
        .dot-wrapper {
            text-align: center;
            position: relative;
            .dot {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                background-color: ${black};
            }
            .text {
                width: 100%;
                position: absolute;
                text-align: center;
                transform: translate(-50%);
                left: 50%;
            }
            .text.above {
                bottom: 100%;
                margin-bottom: 8px;
            }
            .text.below {
                top: 100%;
                margin-top: 8px;
                .bold {
                    margin-bottom: 8px;
                }
            }
            .arrow-icon {
                position: absolute;
                width: 20px;
                height: 20px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                background-image: url(${webConfig.basePath}/android-chrome-192x192.png);
            }
            .icon-above {
                bottom: -40px;
            }
            .icon-below {
                top: -40px;
            }
        }
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

const Timeline: React.FC<TimelineProps> = ({ phases, className }) => (
    <StyledDiv className={className}>
        <div className="line" />
        <div className="timeline-wrapper">
            {phases.map((p, i) => (
                <div key={p.id} id={p.id} className="dot-wrapper">
                    <ContentSlideUp
                        style={{ width: p.width, left: p.left }}
                        className={p.above ? 'text above' : 'text below'}
                    >
                        <h6 className="bold">{p.title}</h6>
                        <h6>{p.description}</h6>
                        {p.addIcon && <h6 className="bold">WE ARE HERE</h6>}
                    </ContentSlideUp>
                    {p.addIcon && (
                        <ContentSlideUp>
                            <div
                                className={
                                    p.above
                                        ? 'arrow-icon icon-above'
                                        : 'arrow-icon icon-below'
                                }
                            />
                        </ContentSlideUp>
                    )}
                    <SocialMediaIconSlideUp
                        time={socialMediaAnimationTime}
                        delay={socialMediaAnimationDelayTime * (i + 1)}
                    >
                        <div className="dot" />
                    </SocialMediaIconSlideUp>
                </div>
            ))}
        </div>
    </StyledDiv>
);

export default Timeline;
