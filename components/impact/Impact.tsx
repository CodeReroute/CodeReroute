import React from 'react';
import styled from 'styled-components';
import { ContentSlideUp } from '../styles/ContentSlideUp';
import { ContentStyles, Heading, lightGray } from '../styles/theme';

const StyledSection = styled.section`
    background-color: ${lightGray};
    text-align: center;
    .content {
        max-width: 802px;
    }
    hr {
        border: 1px solid #6b6b6b;
        max-width: 58px;
    }
    .no-margin-bottom {
        margin-bottom: 0;
    }
`;

const Impact: React.FC = () => (
    <StyledSection>
        <ContentStyles padding={100} contentMargin className="content">
            <ContentSlideUp>
                <Heading className="hide-on-mobile">
                    ENVIRONMENTAL AND CODE IMPACT
                </Heading>
            </ContentSlideUp>
            <ContentSlideUp>
                <Heading className="show-on-mobile">
                    ENVIRONMENTAL
                    <br /> & CODE IMPACT
                </Heading>
            </ContentSlideUp>
            <ContentSlideUp>
                <p>
                    Our mission is to empower and elevate voices. We believe
                    that there is power in diversity and as a female-led
                    company, we at Code Reroute understand the importance of
                    inclusion and equal opportunities.
                </p>
            </ContentSlideUp>
            <ContentSlideUp>
                <p>
                    We work closely with our clients to encourage diverse
                    language, imagery, and copywriting on their websites and in
                    their brand guidelines. It's our pleasure to provide
                    resources and be a liaison — forming a strong network of
                    forward-thinking colleagues and clients.
                </p>
            </ContentSlideUp>
            <ContentSlideUp>
                <hr />
            </ContentSlideUp>
            <ContentSlideUp>
                <p className="no-margin-bottom">
                    Our company is committed to being a positive agent of
                    change. As we grow, we look forward to implementing policies
                    that will positively impact our greenhouse gas emissions and
                    waste.
                </p>
            </ContentSlideUp>
        </ContentStyles>
    </StyledSection>
);

export default Impact;
