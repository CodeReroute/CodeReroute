import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { darkBrown } from '../styles/theme';
import Logo from '../../public/assets/logo.png';

const StyledDiv = styled.div`
    background-color: ${darkBrown};
    padding: 20px;
    text-align: center;
`;

const PlainHeader: React.FC = () => (
    <StyledDiv>
        <Link href="/">
            <a>
                <Image
                    priority
                    src={Logo}
                    width={220}
                    height={46.88}
                    placeholder="blur"
                    alt="Logo"
                    title="Logo"
                />
            </a>
        </Link>
    </StyledDiv>
);

export default PlainHeader;
