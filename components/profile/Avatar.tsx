import React from 'react';
import styled from 'styled-components';
import {
    midWhite,
    largerMobileBreakPoint,
    mobileBreakPoint,
} from '../styles/theme';

interface AvatarProps {
    image: string;
    title?: string;
    marginTop?: string;
    marginBottom?: string;
    className?: string;
}

export interface StyledImageProps {
    url?: string;
    height: number;
    positionHorizontal?: string;
    positionVertical?: string;
}

export const StyledImage = styled.div<StyledImageProps>`
    background-image: url(${({ url }) => url});
    background-size: cover;
    background-position: ${({ positionHorizontal }) =>
            positionHorizontal || 'center'}
        ${({ positionVertical }) => positionVertical || 'center'};
    width: 100%;
    height: ${({ height }) => (height ? `${height}px` : 'auto')};
`;

const StyledDiv = styled.div<AvatarProps>`
    border-radius: 100%;
    border: 4px solid ${midWhite} !important;
    margin-top: ${(props) => props.marginTop} !important;
    margin-bottom: ${(props) =>
        props.marginBottom && `${props.marginBottom} !important`};
    width: 250px;
    height: 250px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    display: inline-block;
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        width: 200px;
        height: 200px;
    }
    @media only screen and (max-width: ${mobileBreakPoint}px) {
        width: 150px;
        height: 150px;
    }
`;

const Avatar: React.FC<AvatarProps> = ({
    title,
    image,
    marginTop,
    marginBottom,
    className,
}) => (
    <StyledDiv
        marginTop={marginTop}
        marginBottom={marginBottom}
        image={image}
        className={className}
        title={title}
    />
);

export default Avatar;
