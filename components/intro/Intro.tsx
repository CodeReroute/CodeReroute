import React from 'react';
import styled from 'styled-components';
import {
    ContentStyles,
    largerBreakPoint,
    lightGray,
    midLightGray,
    sanSerifFont,
} from '../styles/theme';
import IntroSlider from './IntroSlider';

const StyledDiv = styled.div`
    background-color: ${lightGray};
    font-family: ${sanSerifFont};
    color: ${midLightGray};
    .content-wrapper {
        display: grid;
        grid-template-columns: 1fr 0.7fr;
        max-width: 1000px;
    }
    .content {
        overflow: hidden;
        max-height: 157.2px;
        margin-left: 20px;
    }
    h1 {
        font-size: 26px;
        letter-spacing: 1.5px;
    }
    @media only screen and (max-width: ${largerBreakPoint}px) {
        .content-wrapper {
            grid-template-columns: 1fr;
            justify-content: center;
            h1 {
                text-align: center;
            }
            .content {
                margin-left: 0;
                margin-top: 20px;
                display: flex;
                justify-content: center;
            }
        }
    }
`;

const Intro: React.FC = () => (
    <StyledDiv>
        <ContentStyles className="content-wrapper" padding={60} contentMargin>
            <h1>A digital solutions agency building</h1>
            <div className="content">
                <IntroSlider />
            </div>
        </ContentStyles>
    </StyledDiv>
);

export default Intro;
