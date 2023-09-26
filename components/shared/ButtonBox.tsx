import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import styled from 'styled-components';
import { trackEvent } from '../../utils/googleAnalytics';
import { webConfig } from '../../utils/webConfig';
import {
    darkBrown,
    darkGray,
    darkWhite,
    lightGray,
    sanSerifFont,
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
    color: ${darkBrown};
    min-width: 182px;
    transition: background-color 0.5s ease-in-out;
`;

const StyledA = styled.a`
    ${styles}
    background-color: ${({ isLight }: { isLight: boolean }) =>
        isLight ? darkWhite : darkGray};
    box-shadow: 3px 3px 0px
        ${({ isLight }: { isLight: boolean }) =>
            isLight ? darkGray : darkWhite};
    color: ${({ isLight }: { isLight: boolean }) =>
        isLight ? darkBrown : white};
    &:hover {
        background-color: ${({ isLight }: { isLight: boolean }) =>
            isLight ? white : lightGray};
    }
`;

export const StyledButton = styled.button`
    ${styles}
    color: ${darkBrown};
    background-color: ${({ isLight }: { isLight: boolean }) =>
        isLight ? darkWhite : darkGray};
    box-shadow: 3px 3px 0px
        ${({ isLight }: { isLight: boolean }) =>
            isLight ? darkGray : darkWhite};
    &:hover {
        background-color: ${lightGray};
    }
`;

interface Box {
    text: string;
    isLight: boolean;
    className?: string;
}

interface LinkBoxProps extends AnchorHTMLAttributes<HTMLAnchorElement>, Box {
    href?: string;
    onClick?: () => unknown;
}

export const LinkBox: React.FC<LinkBoxProps> = (props) => {
    const { href, onClick, text, className, ...rest } = props;
    return (
        <StyledA href={href} onClick={onClick} className={className} {...rest}>
            {text}
        </StyledA>
    );
};

interface ButtonBoxProps extends ButtonHTMLAttributes<HTMLButtonElement>, Box {
    ref?: React.RefObject<HTMLButtonElement>;
}

export const ButtonBox: React.FC<ButtonBoxProps> = (props) => {
    const { text, ...rest } = props;
    return <StyledButton {...rest}>{text}</StyledButton>;
};
