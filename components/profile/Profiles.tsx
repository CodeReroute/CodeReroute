import React from 'react';
import styled from 'styled-components';
import {
    videoGradient,
    white,
    ContentStyles,
    FlexCenteredRow,
    SmallText,
    textShadow,
    SanText,
    largerMobileBreakPoint,
    largerBreakPoint,
} from '../styles/theme';
import { webConfig } from '../../utils/webConfig';
import Avatar from './Avatar';
import { useTranslate } from '../../utils/hooks/useTranslate';
import { ContentSlideUp } from '../styles/ContentSlideUp';

const StyledDiv = styled.div`
    background-image: ${videoGradient},
        url(${webConfig.basePath}/assets/laptop-table.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
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
    }
    .credit-danielle {
        line-height: 19px;
        margin-left: 20px;
    }
    .hafiz {
        text-align: right;
        justify-content: flex-end;
    }
    .description {
        text-align: center;
        max-width: 660px;
        margin-top: 50px;
        margin-bottom: 50px;
        margin-left: auto;
        margin-right: auto;
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
            margin: 50px 0;
        }
    }
`;

const Profiles: React.FC = () => {
    const t = useTranslate();
    const { description } = {
        description: t('profiles.description'),
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
                        <div className="credit-danielle">
                            <SmallText className="name">
                                Danielle Dufour
                            </SmallText>
                            <SmallText bold className="title">
                                Founder
                                <span className="hide-on-mobile">
                                    {' '}
                                    of Code Reroute
                                </span>
                            </SmallText>
                            <SmallText bold className="role">
                                UI/UX Design
                            </SmallText>
                        </div>
                    </FlexCenteredRow>
                </ContentSlideUp>
                <ContentSlideUp>
                    <SanText className="description">{description}</SanText>
                </ContentSlideUp>
                <ContentSlideUp>
                    <FlexCenteredRow className="hafiz">
                        <div className="credit-hafiz">
                            <SmallText className="name">Hafiz Temuri</SmallText>
                            <SmallText bold className="title">
                                Team Leader
                            </SmallText>
                            <SmallText bold className="role">
                                Software Engineer
                            </SmallText>
                        </div>
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
