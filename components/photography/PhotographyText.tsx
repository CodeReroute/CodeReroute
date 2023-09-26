import React, { CSSProperties, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslate } from '../../utils/hooks/useTranslate';
import Bullets from '../shared/Bullets';
import { Heading, SmallHeading } from '../styles/theme';

const PHOTOGRAPHY_TEXT_COUNTER = 5000;
const HOW_MANY_BULLETS = 3;
let interval: NodeJS.Timeout;

const StyledBullets = styled(Bullets)`
    text-align: center;
    margin-top: 69px;
`;

const style: CSSProperties = { minHeight: 424 };

const PhotographyText: React.FC = () => {
    const t = useTranslate();

    const [index, setIndex] = useState<number>(0);
    const onClick = useCallback((i: number) => setIndex(i), [setIndex]);

    const [headingText, setHeadingText] = useState<string>();
    const [smallHeadingText, setSmallHeadingText] = useState<string>();
    const [paragraphOneText, setParagraphOneText] = useState<string>();
    const [paragraphTwoText, setParagraphTwoText] = useState<string>();
    const [paragraphThreeText, setParagraphThreeText] = useState<string>();

    useEffect(() => {
        clearInterval(interval);
        setHeadingText(t(`photography.${index}.heading`));
        setSmallHeadingText(t(`photography.${index}.smallHeading`));
        setParagraphOneText(t(`photography.${index}.paragraphOne`));
        setParagraphTwoText(t(`photography.${index}.paragraphTwo`));
        setParagraphThreeText(t(`photography.${index}.paragraphThree`));
        interval = setInterval(() => {
            setIndex((i) => (i < HOW_MANY_BULLETS - 1 ? i + 1 : 0));
        }, PHOTOGRAPHY_TEXT_COUNTER);
        return () => clearInterval(interval);
    }, [
        t,
        index,
        setHeadingText,
        setSmallHeadingText,
        setParagraphOneText,
        setParagraphTwoText,
        setParagraphThreeText,
    ]);

    return (
        <div style={style}>
            <Heading>{headingText}</Heading>
            <p>{paragraphOneText}</p>
            <p>{paragraphTwoText}</p>
            <SmallHeading>{smallHeadingText}</SmallHeading>
            <p>{paragraphThreeText}</p>
            <StyledBullets
                onClick={onClick}
                index={index}
                howMany={HOW_MANY_BULLETS}
            />
        </div>
    );
};

export default PhotographyText;
