import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import {
    darkGray,
    darkWhite,
    sanSerifFont,
} from '../../../components/styles/theme';
import {
    Languages,
    getOtherLanguages,
    LanguageContext,
} from './LanguageProvider';

const StyledDiv = styled.div`
    font-size: 14px;
    font-family: ${sanSerifFont};
    position: absolute;
    right: 0;
    top: 12px;
    background-color: ${darkWhite};
    border-left: 2px solid ${darkGray};
    border-bottom: 2px solid ${darkGray};
    padding: 8px 16px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    .language {
        cursor: pointer;
    }
`;

const LanguageSelector: React.FC<{
    className?: string;
    onClick: () => unknown;
}> = ({ className, onClick }) => {
    const { language, setLanguage } = useContext(LanguageContext);
    const onChange = useCallback(
        (l: Languages) => setLanguage(l),
        [setLanguage],
    );
    const others = getOtherLanguages(language);
    return (
        <StyledDiv className={className}>
            {others.map((l, i) => (
                <div
                    key={l.language}
                    className="language"
                    role="option"
                    aria-selected={false}
                    tabIndex={i}
                    aria-label={l.name}
                    onClick={() => {
                        onChange(l.language);
                        onClick();
                    }}
                    onKeyDown={() => {
                        onChange(l.language);
                        onClick();
                    }}
                >
                    {l.name}
                </div>
            ))}
        </StyledDiv>
    );
};

export default LanguageSelector;
