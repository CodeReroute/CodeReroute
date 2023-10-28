import React from 'react';
import styled from 'styled-components';
import EmploymentFormFields from '../employment/EmploymentFormFields';
import { ContentSlideUp } from '../styles/ContentSlideUp';
import { ContentStyles, Heading, lightGray } from '../styles/theme';
import { useTranslate } from '../../utils/hooks/useTranslate';

const StyledDiv = styled.div`
    background-color: ${lightGray};
    .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

const OurTeam: React.FC = () => {
    const sectionRef = React.useRef<HTMLDivElement>(null);
    const formSectionRef = React.useRef<HTMLDivElement>(null);
    const t = useTranslate();
    const { heading, paragraphOne, paragraphTwo } = {
        heading: t('team.heading'),
        paragraphOne: t('team.paragraphOne'),
        paragraphTwo: t('team.paragraphTwo'),
    };

    return (
        <>
            <StyledDiv>
                <ContentStyles
                    padding={100}
                    contentMargin
                    className="content-wrapper"
                >
                    <ContentStyles padding={undefined} className="content">
                        <div>
                            <ContentSlideUp>
                                <Heading>{heading}</Heading>
                            </ContentSlideUp>
                            <ContentSlideUp>
                                <p>{paragraphOne}</p>
                            </ContentSlideUp>
                            <ContentSlideUp>
                                <p>{paragraphTwo}</p>
                            </ContentSlideUp>
                        </div>
                    </ContentStyles>
                </ContentStyles>
            </StyledDiv>
            <EmploymentFormFields
                sectionRef={sectionRef}
                formSectionRef={formSectionRef}
            />
        </>
    );
};

export default OurTeam;
