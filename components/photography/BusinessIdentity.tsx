import React from 'react';
import styled from 'styled-components';
import { ContentSlideUp } from '../styles/ContentSlideUp';
import {
    ContentStyles,
    Heading,
    photographyBreakPoint,
    SmallHeading,
} from '../styles/theme';

const StyledDiv = styled.div`
    .content-wrapper {
        padding-bottom: 0;
    }
    .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .investment-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .quote {
        margin-top: 20px;
    }
    @media only screen and (max-width: ${photographyBreakPoint}px) {
        .investment-section,
        .content {
            display: block;
        }
        .content {
            padding-bottom: 0;
        }
        .investment-content {
            padding-top: 0;
            padding-bottom: 0;
        }
    }
`;

const BusinessIdentity: React.FC = () => (
    <StyledDiv>
        <ContentStyles padding={100} contentMargin className="content-wrapper">
            <ContentStyles padding={undefined} className="content">
                <div>
                    <ContentSlideUp>
                        <Heading>BUSINESS IDENTITY SESSIONS</Heading>
                    </ContentSlideUp>
                    <ContentSlideUp>
                        <p>
                            Join Danielle as she leads your team through our
                            dedicated 4-hour session created just for you.
                            Through the session, we will create consistency with
                            messaging, visual identity, and tone while
                            uncovering untapped strengths and weaknesses. We
                            identify a core audience and create an overview of
                            your local, regional, and national competition.
                        </p>
                    </ContentSlideUp>
                </div>
            </ContentStyles>
            <ContentStyles padding={undefined} className="investment-content">
                <ContentSlideUp>
                    <SmallHeading className="investment-heading">
                        INVESTMENT $695
                    </SmallHeading>
                </ContentSlideUp>
                <div className="investment-section">
                    <div>
                        <ContentSlideUp>
                            <p>In the session we work on:</p>
                        </ContentSlideUp>
                        <ContentSlideUp>
                            <ul>
                                <li>brand vision, mission, and core values</li>
                                <li>
                                    <span className="hide-on-mobile">
                                        identifying{' '}
                                    </span>
                                    key strengths and target audience
                                </li>
                                <li>creating a brand story</li>
                                <li>finding your voice</li>
                                <li>maintaining consistency</li>
                                <li>analyzing your competition</li>
                                <li>
                                    finding ways to establish you as a leader
                                </li>
                            </ul>
                        </ContentSlideUp>
                    </div>
                </div>
            </ContentStyles>
        </ContentStyles>
    </StyledDiv>
);

export default BusinessIdentity;
