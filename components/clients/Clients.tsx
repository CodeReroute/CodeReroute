import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { ContentStyles, largerMobileBreakPoint } from '../styles/theme';
import tylerAndToddLogo from '../../public/assets/clients/tyler-and-todd.png';
import matressenceLogo from '../../public/assets/clients/matressence.png';
import freedomLogo from '../../public/assets/clients/freedom.png';
import maavaLogo from '../../public/assets/clients/maava.png';
import dmLogo from '../../public/assets/clients/dm.png';
import alignedMovementLogo from '../../public/assets/clients/aligned-movement.png';
import { ContentSlideUp } from '../styles/ContentSlideUp';

const StyledSection = styled.section`
    .content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex-basis: 50px;
        margin-top: 12px;
        margin-bottom: 37px;
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        margin-top: 0;
        .content {
            padding-top: 30px;
        }
    }
`;

const Clients: React.FC = () => (
    <StyledSection>
        <ContentStyles contentMargin className="content">
            <ContentSlideUp>
                <Image
                    src={tylerAndToddLogo}
                    width={110}
                    height={110}
                    placeholder="blur"
                    alt="Tyler and Todd"
                    title="Tyler and Todd"
                    className="tyler"
                />
            </ContentSlideUp>
            <ContentSlideUp>
                <Image
                    src={matressenceLogo}
                    width={130}
                    height={75.61}
                    placeholder="blur"
                    alt="Matressence Yoga"
                    title="Matressence Yoga"
                />
            </ContentSlideUp>
            <ContentSlideUp>
                <Image
                    src={freedomLogo}
                    width={130}
                    height={130}
                    placeholder="blur"
                    alt="Freedom with Fiona"
                    title="Freedom with Fiona"
                />
            </ContentSlideUp>
            <ContentSlideUp>
                <Image
                    src={maavaLogo}
                    width={100}
                    height={100}
                    placeholder="blur"
                    alt="Maava meal"
                    title="Maava meal"
                />
            </ContentSlideUp>
            <ContentSlideUp>
                <Image
                    src={dmLogo}
                    width={173.63}
                    height={45}
                    placeholder="blur"
                    alt="DM's Custom Furniture"
                    title="DM's Custom Furniture"
                />
            </ContentSlideUp>
            <ContentSlideUp>
                <Image
                    src={alignedMovementLogo}
                    width={191.11}
                    height={53}
                    placeholder="blur"
                    alt="Aligned Movement Studios"
                    title="Aligned Movement Studios"
                />
            </ContentSlideUp>
        </ContentStyles>
    </StyledSection>
);

export default Clients;
