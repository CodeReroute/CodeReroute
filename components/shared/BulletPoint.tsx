import React from 'react';
import styled from 'styled-components';
import { darkGray, white } from '../styles/theme';

const StyledDiv = styled.div`
    z-index: 9;
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: ${(props: { isActive: boolean }) =>
        props.isActive ? darkGray : white};
    border-radius: 100%;
    margin-left: 6px;
    margin-right: 6px;
    cursor: pointer;
`;

interface BulletPointProps {
    index: number;
    isActive: boolean;
    onClick: (index: number) => unknown;
}

const BulletPoint: React.FC<BulletPointProps> = ({
    isActive,
    index,
    onClick,
}) => {
    const onClickFunction = () => onClick(index);
    return <StyledDiv isActive={isActive} onClick={onClickFunction} />;
};

export default BulletPoint;
