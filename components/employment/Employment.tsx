import React from 'react';
import styled from 'styled-components';
import {
    ContentStyles,
    pictureGradient,
    white,
    sanSerifFont,
    LighterHeading,
    SanText,
    textShadow,
} from '../styles/theme';
import { webConfig } from '../../utils/webConfig';
import { useTranslate } from '../../utils/hooks/useTranslate';
import FormButton from '../sliderPanel/FormButton';
import EmploymentFormFields from './EmploymentFormFields';
import { ContentSlideUp } from '../styles/ContentSlideUp';

const StyledDiv = styled.div`
    padding-top: 20px;
    background-image: ${pictureGradient},
        url(${webConfig.basePath}/assets/employment-background.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: ${white};
    font-family: ${sanSerifFont};
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    text-shadow: ${textShadow};
    .content {
        max-width: 930px;
    }
    .last-paragraph {
        margin-bottom: 0;
    }
    .button-wrapper {
        text-align: center;
        margin-top: 45px;
    }
`;

const buttonText = 'APPLY HERE';

const Employment: React.FC = () => {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const formSectionRef = React.useRef<HTMLDivElement>(null);
    const t = useTranslate();
    const { heading, paragraphOne, paragraphTwo } = {
        heading: t('employment.heading'),
        paragraphOne: t('employment.paragraphOne'),
        paragraphTwo: t('employment.paragraphTwo'),
    };
    return (
        <>
            <StyledDiv>
                <ContentStyles padding={155} contentMargin className="content">
                    <ContentSlideUp>
                        <LighterHeading>{heading}</LighterHeading>
                    </ContentSlideUp>
                    <SanText>
                        <ContentSlideUp>
                            <p>{paragraphOne}</p>
                        </ContentSlideUp>
                        <ContentSlideUp>
                            <p>{paragraphTwo}</p>
                        </ContentSlideUp>
                    </SanText>
                    <div className="button-wrapper">
                        <ContentSlideUp>
                            <FormButton
                                name="Employment Apply Here Button"
                                buttonText={buttonText}
                                sectionRef={sectionRef}
                                formSectionRef={formSectionRef}
                            />
                        </ContentSlideUp>
                    </div>
                </ContentStyles>
            </StyledDiv>
            <EmploymentFormFields
                sectionRef={sectionRef}
                formSectionRef={formSectionRef}
            />
        </>
    );
};

export default Employment;
