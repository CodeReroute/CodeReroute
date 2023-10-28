import React from 'react';
import styled from 'styled-components';
import {
    ContentStyles,
    lightGray,
    photographyBreakPoint,
} from '../styles/theme';
import PhotographyText from './PhotographyText';
import PhotographySlider from './PhotographySlider';

const StyledDiv = styled.div`
    background-color: ${lightGray};
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .slider-grid {
        position: relative;
    }
    .content {
        padding-bottom: 80px;
    }
    @media only screen and (max-width: ${photographyBreakPoint}px) {
        .grid {
            display: block;
            .slider-grid {
                margin-top: 50px;
                min-height: 400px;
            }
        }
    }
`;

const Photography: React.FC = () => (
    <StyledDiv>
        <ContentStyles padding={100} contentMargin className="content">
            <div className="grid">
                <PhotographyText />
                <div className="slider-grid">
                    <PhotographySlider />
                </div>
            </div>
        </ContentStyles>
    </StyledDiv>
);

export default Photography;
