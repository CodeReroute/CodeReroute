import React, { useCallback, useContext } from 'react';
import styled from 'styled-components';
import {
    darkWhite,
    sanSerifFont,
    smallerTextShadow,
} from '../../../components/styles/theme';
import {
    Languages,
    getOtherLanguages,
    LanguageContext,
} from './LanguageProvider';

const StyledDiv = styled.div`
    transform: rotate(90deg);
    font-size: 14px;
    color: ${darkWhite};
    text-shadow: ${smallerTextShadow};
    font-family: ${sanSerifFont};
    margin-top: 10px;
    margin-bottom: 10px;
    .language {
        cursor: pointer;
        margin-bottom: 10px;
    }
`;

const LanguageSelector: React.FC<{
    onClick: () => unknown;
}> = ({ onClick }) => {
    const { language, setLanguage } = useContext(LanguageContext);
    const onChange = useCallback(
        (l: Languages) => setLanguage(l),
        [setLanguage],
    );
    const others = getOtherLanguages(language);
    return (
        <StyledDiv>
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
