import React, { useMemo } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import SocialMediaIcons from '../socialMedia/SocialMediaIcons';
import { useTranslate } from '../../utils/hooks/useTranslate';
import { FadeIn } from '../styles/animations';
import { ContentStyles, largerMobileBreakPoint } from '../styles/theme';
import Logo from '../../public/assets/logo.png';

const StyledDiv = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
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
    const { heading, contentOne, contentTwo } = useMemo(
        () => ({
            heading: t('homePage.hero.heading'),
            contentOne: t('homePage.hero.contentOne'),
            contentTwo: t('homePage.hero.contentTwo'),
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
                    alt="Logo"
                    title="Logo"
                />
            </FadeIn>
            <ContentStyles padding={0} contentMargin className="text">
                <FadeIn className="text-content">
                    <h2>{heading}</h2>
                    <p>{contentOne}</p>
                    <p>{contentTwo}</p>
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
