import styled from 'styled-components';

export const white = '#ffffff';
export const midWhite = '#e7e4df';
export const darkWhite = '#f6f5f3';
export const lightGray = '#e2ddd9';
export const midGray = '#736E6E';
export const midLightGray = '#5e5858';
export const darkGray = '#d1d0cc';
export const lighterBrown = '#ECECEC';
export const lightBrown = '#A49484';
export const darkBrown = '#5B5B5B';
export const languageGrayColor = '#6B6B6B';

export const textShadow = '0px 0px 11px #565656';
export const smallerTextShadow = '1px 1px 2px #343434';
export const buttonBoxShadow = `box-shadow: 2px 2px 0px ${darkGray}`;

export const serifFont = "'Cormorant Garamond', serif";
export const sanSerifFont = "'Neue Einstellung', sans-serif";

export const pictureGradient =
    'linear-gradient(rgba(94,88,88, 0.6), rgba(94,88,88, 0.6))';

export const videoGradient =
    'linear-gradient(rgba(94, 88, 88, 0.6), rgba(94, 88, 88, 0.7))';

export const maxContentWidth = 1440;
export const largerBreakPoint = 1000;
export const photographyBreakPoint = 900;
export const tabletBreakPoint = 850;
export const largerMobileBreakPoint = 650;
export const mobileBreakPoint = 450;

interface ContentStylesProps {
    padding?: number;
    contentMargin?: true;
}

export const ContentStyles = styled.div`
    width: 100%;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    ${({ padding, contentMargin }: ContentStylesProps) => {
        if (contentMargin) {
            return `
                padding-top: ${padding}px;
                padding-bottom: ${padding}px;
                padding-left: 5rem;
                padding-right: 5rem;
            `;
        }
        return `
            padding-top: ${padding}px;
            padding-bottom: ${padding}px;
            padding-left: ${padding}px;
            padding-right: ${padding}px;
        `;
    }}
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        padding-top: 70px;
        padding-bottom: 70px;
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const FlexCenteredRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

interface TextProps {
    bold?: boolean;
}

export const SanText = styled.div`
    font-size: 17px;
    font-family: ${sanSerifFont};
    letter-spacing: 1.5px;
`;

export const SmallText = styled.div`
    font-size: 15px;
    letter-spacing: 1.5px;
    font-family: ${sanSerifFont};
    font-weight: ${(props: TextProps) => (props.bold ? '300' : undefined)};
`;

export const Heading = styled.h4`
    font-weight: 300;
`;
export const LighterHeading = styled.h4`
    letter-spacing: 2.5px;
    font-weight: 200;
`;
export const SmallHeading = styled.h4`
    font-size: 16px;
    font-weight: 500;
`;

export const QuoteCredit = styled.div`
    font-family: ${sanSerifFont};
    margin-top: 30px;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1px;
`;

export const Input = styled.input`
    color: ${darkBrown};
    font-family: ${sanSerifFont};
    letter-spacing: 0.3px;
    border: 0;
    border-radius: 30px;
    text-align: center;
    outline: none;
    background-color: ${darkWhite};
    padding: 15px 10px;
    ::placeholder {
        color: #a0a0a0;
    }
    :-ms-input-placeholder {
        color: #a0a0a0;
    }
    ::-ms-input-placeholder {
        color: #a0a0a0;
    }
`;
