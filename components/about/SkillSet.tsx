import React from 'react';
import styled from 'styled-components';
import { SmallText } from '../styles/theme';

const StyledSmallText = styled(SmallText)`
    ul {
        margin-top: 3px;
        padding-left: 19px;
    }
`;

const SkillSet: React.FC<{ heading: string; description: string }> = ({
    heading,
    description,
}) => (
    <StyledSmallText>
        <div className="bold">{heading}</div>
        <ul>
            <li>{description}</li>
        </ul>
    </StyledSmallText>
);

export default SkillSet;
