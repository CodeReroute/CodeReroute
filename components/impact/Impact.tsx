import React from 'react';
import styled from 'styled-components';
import { ContentSlideUp } from '../styles/ContentSlideUp';
import {
    ContentStyles,
    Heading,
    pictureGradient,
    white,
} from '../styles/theme';
import { webConfig } from '../../utils/webConfig';

const StyledSection = styled.section`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: ${white};
    background-image: ${pictureGradient},
        url(${webConfig.basePath}/assets/employment-background.jpeg);
    text-align: center;
    .content {
        max-width: 802px;
    }
    hr {
        border: 1px solid ${white};
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
                    ENVIRONMENTAL AND SOCIAL IMPACT
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
                    We respectfully acknowledge that we are located on Treaty 6
                    territory, a traditional meeting ground and home for many
                    Indigenous Peoples, including Cree, Saulteaux, Niisitapi
                    (Blackfoot), Métis, and Nakota Sioux Peoples
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
