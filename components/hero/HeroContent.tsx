import React, { useMemo } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import SocialMediaIcons from '../socialMedia/SocialMediaIcons';
import { useTranslate } from '../../utils/hooks/useTranslate';
import { FadeIn } from '../styles/animations';
import {
    ContentStyles,
    Heading,
    largerMobileBreakPoint,
} from '../styles/theme';
import Logo from '../../public/assets/logo.png';

const StyledDiv = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    .heading-one {
        font-size: 26px;
        font-weight: 400;
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
        max-width: 755px;
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        .heading-one {
            font-size: 16px;
        }
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
                    {/* <h2>{heading}</h2> */}
                    <Heading className="heading-one">{contentOne}</Heading>
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
