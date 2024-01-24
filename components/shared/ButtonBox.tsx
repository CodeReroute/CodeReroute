import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';
import { trackEvent } from '../../utils/googleAnalytics';
import { webConfig } from '../../utils/webConfig';
import {
    black,
    darkBrown,
    darkGray,
    darkWhite,
    lightGray,
    sanSerifFont,
    tabletBreakPoint,
    white,
} from '../styles/theme';

declare global {
    interface Window {
        Calendly?: {
            initPopupWidget: (options: { url: string }) => unknown;
        };
    }
}

const eventData = {
    action: 'ButtonClicked',
    category: 'button',
    label: 'Calendly Button Clicked',
    value: 1,
};
export const openCalendly = () => {
    trackEvent(eventData);
    const calendly = window.Calendly;
    if (!calendly) return;
    calendly.initPopupWidget({
        url: webConfig.calendly.url,
    });
};

const styles = `
    cursor: pointer;
    display: inline-block;
    padding: 18px 50px;
    font-size: 12px;
    cursor: pointer;
    color: inherit;
    letter-spacing: 2px;
    font-family: ${sanSerifFont};
    margin-top: 10px;
    border-radius: 36px;
    outline: none;
    border: none;
    color: ${black};
    min-width: 182px;
    text-align: center;
    @media screen and (max-width: ${tabletBreakPoint}px) {
        display: block;
        margin-top: 30px;
        max-width: 205px;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
`;

const StyledA = styled.a<{
    isLight: boolean;
    backgroundColor?: string;
    hoverColor?: string;
    hoverTextColor?: string;
}>`
    ${styles}
    color: ${black};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: 1px solid ${black};
    &:hover {
        background-color: ${({ hoverColor }) => hoverColor};
        color: ${({ hoverTextColor }) => hoverTextColor || lightGray};
    }
    &:active {
        color: ${black};
        background-color: ${({ backgroundColor }) => backgroundColor};
    }
`;

export const StyledButton = styled.button<{
    isLight: boolean;
    backgroundColor?: string;
    hoverColor?: string;
    hoverTextColor?: string;
}>`
    ${styles}
    color: ${black};
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: 1px solid ${black};
    &:hover {
        background-color: ${({ hoverColor }) => hoverColor};
        color: ${({ hoverTextColor }) => hoverTextColor || lightGray};
    }
    &:active {
        color: ${black};
        background-color: ${({ backgroundColor }) => backgroundColor};
    }
`;

interface Box {
    text: string;
    isLight: boolean;
    className?: string;
}

interface LinkBoxProps extends AnchorHTMLAttributes<HTMLAnchorElement>, Box {
    href?: string;
    backgroundColor?: string;
    hoverColor?: string;
    hoverTextColor?: string;
    onClick?: () => unknown;
}

export const LinkBox: React.FC<LinkBoxProps> = (props) => {
    const { href, onClick, text, className, ...rest } = props;
    return (
        <StyledA
            href={href}
            target={href ? '_blank' : undefined}
            onClick={onClick}
            className={className}
            {...rest}
        >
            {text}
        </StyledA>
    );
};

interface ButtonBoxProps extends ButtonHTMLAttributes<HTMLButtonElement>, Box {
    ref?: React.RefObject<HTMLButtonElement>;
    backgroundColor?: string;
    hoverColor?: string;
    hoverTextColor?: string;
}

export const ButtonBox: React.FC<ButtonBoxProps> = (props) => {
    const { text, ...rest } = props;
    return <StyledButton {...rest}>{text}</StyledButton>;
};
