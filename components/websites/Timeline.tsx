import React from 'react';
import styled from 'styled-components';
import { black, largerMobileBreakPoint } from '../styles/theme';
import { webConfig } from '../../utils/webConfig';

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
    display: flex;
    position: relative;
    justify-content: space-between;
    .line {
        height: 1px;
        width: 100vw;
        position: absolute;
        left: -5rem;
        top: 50%;
        background-color: ${black};
    }
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
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        .line {
            left: 20px;
        }
    }
`;

const Timeline: React.FC<TimelineProps> = ({ phases, className }) => {
    return (
        <StyledDiv className={className}>
            <div className="line" />
            {phases.map((p) => {
                return (
                    <div key={p.id} id={p.id} className="dot-wrapper">
                        <div
                            style={{ width: p.width, left: p.left }}
                            className={p.above ? 'text above' : 'text below'}
                        >
                            <h6 className="bold">{p.title}</h6>
                            <h6>{p.description}</h6>
                            {p.addIcon && <h6 className="bold">WE ARE HERE</h6>}
                        </div>
                        {p.addIcon && (
                            <div
                                className={
                                    p.above
                                        ? 'arrow-icon icon-above'
                                        : 'arrow-icon icon-below'
                                }
                            />
                        )}
                        <div className="dot" />
                    </div>
                );
            })}
        </StyledDiv>
    );
};

export default Timeline;
