import React, { useMemo } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import SocialMediaIcons from '../socialMedia/SocialMediaIcons';
import { useTranslate } from '../../utils/hooks/useTranslate';
import { FadeIn } from '../styles/animations';
import {
    ContentStyles,
    largerMobileBreakPoint,
    serifFont,
} from '../styles/theme';
import Logo from '../../public/assets/logo.png';

const StyledDiv = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    h2 {
        font-family: ${serifFont};
    }
    p.heading-one {
        font-weight: 200;
        margin-bottom: 4px;
        max-width: 460px;
    }
    p.heading-two {
        margin-top: 4px;
    }
    .code-icons {
        margin-top: 30px;
        text-align: center;
    }
    .logo {
        margin-top: 15px;
        text-align: center;
    }
    .text {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all 1s ease;
        text-align: center;
    }
    .text-content {
        margin: auto;
        max-width: 800px;
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        .text {
            margin-left: 0;
        }
    }
`;

const HeroContent: React.FC = () => {
    const t = useTranslate();
    const { heading, contentOne } = useMemo(
        () => ({
            heading: t('homePage.hero.heading'),
            contentOne: t('homePage.hero.contentOne'),
            contentTwo: t('homePage.hero.contentTwo'),
            contentThree: t('homePage.hero.contentThree'),
            contentFour: t('homePage.hero.contentFour'),
        }),
        [t],
    );
    return (
        <StyledDiv>
            <FadeIn className="logo">
                <Image
                    priority
                    src={Logo}
                    width={200}
                    height={27.51}
                    placeholder="blur"
                    alt="Code Reroute"
                    title="Code Reroute"
                />
            </FadeIn>
            <ContentStyles padding={0} contentMargin className="text">
                <FadeIn className="text-content">
                    <h2>{heading}</h2>
                    <p className="heading-one">{contentOne}</p>
                    {/* <p className="heading-two">
                        {contentTwo}
                        <i>{contentThree}</i>
                        {contentFour}
                    </p> */}
                    <SocialMediaIcons
                        className="code-icons"
                        padding={25}
                        size={13}
                    />
                </FadeIn>
            </ContentStyles>
        </StyledDiv>
    );
};

export default HeroContent;
