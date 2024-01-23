import React, { useContext } from 'react';
import styled from 'styled-components';
import {
    buttonBoxShadow,
    darkBrown,
    darkGray,
    darkWhite,
    sanSerifFont,
    white,
} from '../../../components/styles/theme';
import { LanguageContext } from './LanguageProvider';

const StyledDiv = styled.div<{ isOpen?: boolean }>`
    font-family: ${sanSerifFont};
    border: 1px solid ${darkGray};
    border-radius: 36px;
    font-size: 14px;
    color: ${darkBrown};
    margin-right: 8px;
    margin-left: 8px;
    background-color: ${({ isOpen }) => (isOpen ? white : darkWhite)};
    cursor: pointer;
    width: 78px;
    height: 35px;
    display: flex;
    letter-spacing: 2px;
    justify-content: center;
    align-items: center;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;

interface CircledButtonProps {
    text: string;
    isOpen?: boolean;
    className?: string;
    onClick: () => unknown;
}

export const CircledButton: React.FC<CircledButtonProps> = ({
    text,
    className,
    isOpen,
    onClick,
}) => {
    return (
        <StyledDiv
            className={className}
            onClick={onClick}
            isOpen={isOpen}
            unselectable="on"
        >
            {text}
        </StyledDiv>
    );
};

const LanguageCircle: React.FC<Omit<CircledButtonProps, 'text'>> = ({
    isOpen,
    onClick,
    className,
}) => {
    const { language } = useContext(LanguageContext);
    return (
        <CircledButton
            className={className}
            onClick={onClick}
            isOpen={isOpen}
            text={isOpen ? 'CLOSE' : language.toUpperCase()}
        />
    );
};

export default LanguageCircle;
