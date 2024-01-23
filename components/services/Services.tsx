import React from 'react';
import styled from 'styled-components';
import {
    ContentStyles,
    pictureGradient,
    white,
    SanText,
    LighterHeading,
    textShadow,
    largerBreakPoint,
    mobileBreakPoint,
    black,
    darkWhite,
} from '../styles/theme';
import { webConfig } from '../../utils/webConfig';
import { useTranslate } from '../../utils/hooks/useTranslate';
import FormButton from '../sliderPanel/FormButton';
import InquiryFormFields from '../inquiry/InquiryFormFields';
import { ContentSlideUp } from '../styles/ContentSlideUp';

const StyledDiv = styled.div`
    padding-top: 20px;
    background-image: ${pictureGradient},
        url(${webConfig.basePath}/assets/services-background.jpeg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: ${white};
    text-shadow: ${textShadow};
    .description {
        max-width: 450px;
        margin: 25px auto 15px auto;
    }
    .grid-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 27px;
        max-width: 760px;
        margin-top: 30px;
        margin-bottom: 0;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        padding-left: 0;
        ul {
            display: inline-block;
        }
        .first {
            justify-self: right;
        }
    }
    .button-wrapper {
        text-align: center;
        margin-top: 45px;
    }
    @media only screen and (max-width: ${largerBreakPoint}px) {
        .grid-list {
            grid-template-columns: 1fr;
            grid-gap: 0px;
            .first,
            .second,
            .third {
                display: block;
                justify-self: unset;
                margin: 0 0 0 30%;
            }
        }
    }
    @media only screen and (max-width: ${mobileBreakPoint}px) {
        .first,
        .second,
        .third {
            margin: 0 0 0 20% !important;
        }
    }
`;

const buttonText = 'INQUIRY';

const Services: React.FC = () => {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const formSectionRef = React.useRef<HTMLDivElement>(null);
    const t = useTranslate();
    const {
        heading,
        description,
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
    } = {
        heading: t('services.heading'),
        description: t('services.description'),
        one: t('services.list.one'),
        two: t('services.list.two'),
        three: t('services.list.three'),
        four: t('services.list.four'),
        five: t('services.list.five'),
        six: t('services.list.six'),
        seven: t('services.list.seven'),
        eight: t('services.list.eight'),
        nine: t('services.list.nine'),
    };
    return (
        <>
            <StyledDiv>
                <ContentStyles padding={150} contentMargin className="content">
                    <ContentSlideUp>
                        <LighterHeading className="center">
                            {heading}
                        </LighterHeading>
                    </ContentSlideUp>
                    <SanText>
                        <ContentSlideUp>
                            <div className="center description">
                                {description}
                            </div>
                        </ContentSlideUp>
                        <div className="grid-list">
                            <ContentSlideUp>
                                <ul className="first">
                                    <li>{one}</li>
                                    <li>{two}</li>
                                    <li>{three}</li>
                                </ul>
                            </ContentSlideUp>
                            <ContentSlideUp>
                                <ul className="second">
                                    <li>{four}</li>
                                    <li>{five}</li>
                                    <li>{six}</li>
                                </ul>
                            </ContentSlideUp>
                            <ContentSlideUp>
                                <ul className="third">
                                    <li>{seven}</li>
                                    <li>{eight}</li>
                                    <li>{nine}</li>
                                </ul>
                            </ContentSlideUp>
                        </div>
                    </SanText>
                    <div className="button-wrapper">
                        <ContentSlideUp>
                            <FormButton
                                name="Services Inquiry Button"
                                hoverColor={black}
                                hoverTextColor={darkWhite}
                                backgroundColor={darkWhite}
                                buttonText={buttonText}
                                sectionRef={sectionRef}
                                formSectionRef={formSectionRef}
                            />
                        </ContentSlideUp>
                    </div>
                </ContentStyles>
            </StyledDiv>
            <InquiryFormFields
                sectionRef={sectionRef}
                formSectionRef={formSectionRef}
            />
        </>
    );
};

export default Services;
