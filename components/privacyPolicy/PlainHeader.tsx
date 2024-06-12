import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { darkBrown } from '../styles/theme';
import Logo from '../../public/assets/logo.png';

const StyledDiv = styled.div`
    background-color: ${darkBrown};
    padding: 10px;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`;

const PlainHeader: React.FC<{ link?: string }> = ({ link = '/' }) => (
    <StyledDiv>
        <Link href={link}>
            <a>
                <Image
                    priority
                    src={Logo}
                    width={178}
                    height={24.49}
                    placeholder="blur"
                    alt="Code Reroute"
                    title="Code Reroute"
                />
            </a>
        </Link>
    </StyledDiv>
);

export default PlainHeader;
