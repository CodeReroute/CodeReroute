import React from 'react';
import styled from 'styled-components';
import {
    white,
    ContentStyles,
    FlexCenteredRow,
    textShadow,
    SanText,
    largerMobileBreakPoint,
    largerBreakPoint,
    black,
} from '../styles/theme';
import { webConfig } from '../../utils/webConfig';
import Avatar from './Avatar';
import { useTranslate } from '../../utils/hooks/useTranslate';
import { ContentSlideUp } from '../styles/ContentSlideUp';
import MemberTitle from './MemberTitle';

const StyledDiv = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
        url(${webConfig.basePath}/assets/profile-background.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    letter-spacing: 1.5px;
    font-weight: 200;
    color: ${white};
    text-shadow: ${textShadow};
    .content-wrapper {
        padding: 0px 5rem;
    }
    .credit-hafiz {
        text-align: right;
        margin-right: 20px;
        line-height: 19px;
        padding: 16px;
        background-color: ${black};
    }
    .credit-danielle {
        line-height: 19px;
        margin-left: 20px;
        padding: 16px;
        background-color: ${black};
    }
    .hafiz {
        text-align: right;
        justify-content: flex-end;
    }
    .description {
        padding: 32px;
        text-align: center;
        max-width: 575px;
        margin-left: auto;
        margin-right: auto;
        background-color: ${black};
    }
    .margin-top-0 {
        margin-top: 0;
    }
    .margin-bottom-0 {
        margin-bottom: 0;
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        .content-wrapper {
            padding: 0px 20px;
            .description {
                padding-left: 12px;
                padding-right: 12px;
            }
        }
    }
    @media only screen and (max-width: ${largerBreakPoint}px) {
        .description {
            margin: 50px auto;
        }
    }
`;

const Profiles: React.FC = () => {
    const t = useTranslate();
    const { descriptionOne, descriptionTwo, descriptionThree } = {
        descriptionOne: t('profiles.descriptionOne'),
        descriptionTwo: t('profiles.descriptionTwo'),
        descriptionThree: t('profiles.descriptionThree'),
    };
    return (
        <StyledDiv>
            <ContentStyles className="content-wrapper" padding={0}>
                <ContentSlideUp>
                    <FlexCenteredRow>
                        <Avatar
                            image={`${webConfig.basePath}/assets/danielle.jpeg`}
                            marginTop="-47px"
                        />
                        <MemberTitle
                            id="danielle"
                            name="Danielle Dufour"
                            title={
                                <>
                                    Founder
                                    <span className="hide-on-mobile">
                                        {' '}
                                        of Code Reroute
                                    </span>
                                </>
                            }
                            memberRole="Business Development"
                            className="credit-danielle"
                        />
                    </FlexCenteredRow>
                </ContentSlideUp>
                <ContentSlideUp>
                    <SanText className="description">
                        <p className="margin-top-0">{descriptionOne}</p>
                        <p>{descriptionTwo}</p>
                        <p className="margin-bottom-0">{descriptionThree}</p>
                    </SanText>
                </ContentSlideUp>
                <ContentSlideUp>
                    <FlexCenteredRow className="hafiz">
                        <MemberTitle
                            id="hafiz"
                            name="Hafiz Temuri"
                            memberRole="Software Engineer"
                            title="Team Lead"
                            className="credit-hafiz"
                        />
                        <Avatar
                            image={`${webConfig.basePath}/assets/hafiz.png`}
                            marginBottom="-47px"
                        />
                    </FlexCenteredRow>
                </ContentSlideUp>
            </ContentStyles>
        </StyledDiv>
    );
};

export default Profiles;
