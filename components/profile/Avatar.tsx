import React from 'react';
import styled from 'styled-components';
import {
    midWhite,
    largerMobileBreakPoint,
    mobileBreakPoint,
} from '../styles/theme';

interface AvatarProps {
    image: string;
    marginTop?: string;
    marginBottom?: string;
    className?: string;
}

const StyledDiv = styled.div`
    border-radius: 100%;
    border: 4px solid ${midWhite} !important;
    margin-top: ${(props: AvatarProps) => props.marginTop} !important;
    margin-bottom: ${(props: AvatarProps) =>
        props.marginBottom && `${props.marginBottom} !important`};
    width: 250px;
    height: 250px;
    background-image: url(${(props: AvatarProps) => props.image});
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
    />
);

export default Avatar;
