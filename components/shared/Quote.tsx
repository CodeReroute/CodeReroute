import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { QuoteCredit } from '../styles/theme';
import quoteImage from '../../public/assets/small-quote.svg';

const StyledDiv = styled.div`
    blockquote {
        margin: 0 auto;
        max-width: ${({ maxWidth }: { maxWidth: number }) => maxWidth}px;
        justify-self: center;
    }
    .quote {
        margin-bottom: 30px;
    }
    .credit {
        margin-top: 45px;
    }
`;

interface QuoteProps {
    quote: string;
    name: string;
    company: string;
    maxWidth: number;
    className?: string;
}

const Quote: React.FC<QuoteProps> = ({
    quote,
    name,
    company,
    maxWidth,
    className,
}) => (
    <StyledDiv maxWidth={maxWidth} className={className}>
        <div className="center quote">
            <Image
                src={quoteImage}
                width={30}
                height={30}
                alt="Quote"
                title="Quote"
            />
        </div>
        <blockquote className="center">
            "{quote}"
            <QuoteCredit>
                {name} | <br className="show-on-mobile" />
                {company}
            </QuoteCredit>
        </blockquote>
    </StyledDiv>
);

export default Quote;
