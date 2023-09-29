import React, { useState } from 'react';
import styled from 'styled-components';
import LanguageCircle from '../../utils/hooks/language/LanguageCircle';
import LanguageSelector from '../../utils/hooks/language/LanguageSelector';
import { SlideDown } from '../styles/animations';

interface LanguageProps {
    className?: string;
}

const height = '86.43';
const StyledDiv = styled.div`
    position: relative;
    .slider-enter {
        height: 0;
        overflow: hidden;
    }
    .slider-enter-active {
        height: ${height};
        transition: height 0.5s linear;
    }
    .slider-exit {
        height: ${height};
    }
    .slider-exit-active {
        height: 0;
        overflow: hidden;
        transition: height 0.5s linear;
    }
`;

const Language: React.FC<LanguageProps> = ({ className }) => {
    const [isSelectorOpen, setSelectorOpen] = useState<boolean>(false);
    const onOpenSelector = () => setSelectorOpen((s) => !s);
    return (
        <StyledDiv className={className}>
            <LanguageCircle isOpen={isSelectorOpen} onClick={onOpenSelector} />
            {isSelectorOpen && (
                <SlideDown time={0.5}>
                    <LanguageSelector
                        onClick={onOpenSelector}
                        className="slider"
                    />
                </SlideDown>
            )}
        </StyledDiv>
    );
};

export default Language;
