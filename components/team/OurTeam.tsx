import React, { useRef } from 'react';
import styled from 'styled-components';
import { ContentSlideUp } from '../styles/ContentSlideUp';
import {
    ContentStyles,
    Heading,
    black,
    largerBreakPoint,
    lightGray,
} from '../styles/theme';
import { useTranslate } from '../../utils/hooks/useTranslate';
import Avatar from '../profile/Avatar';
import { webConfig } from '../../utils/webConfig';
import MemberTitle from '../profile/MemberTitle';
import TeamMember, { TeamMemberForwardProps } from './TeamMember';
import { MemberId } from './TeamMemberRender';
import Member from './Member';

const StyledDiv = styled.div`
    background-color: ${lightGray};
    .content {
        .members-content {
            max-width: 630px;
        }
        .members {
            margin-top: 60px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 30px;
            flex-wrap: wrap;
            .member {
                cursor: pointer;
                text-align: center;
                .member-details {
                    text-align: center;
                    .bio-button-wrapper .bio-button {
                        color: ${black};
                        border-color: ${black};
                        letter-spacing: 2.5px;
                        background-color: transparent;
                        margin: 8px auto 0 auto;
                        &:hover {
                            color: ${lightGray};
                            background-color: ${black};
                        }
                    }
                }
            }
        }
    }
    @media only screen and (max-width: ${largerBreakPoint}px) {
        .content {
            display: block;
            .members {
                margin-top: 64px;
                justify-content: center;
            }
        }
    }
`;

const OurTeam: React.FC = () => {
    const ref = useRef<TeamMemberForwardProps>(null);
    const memberSectionRef = useRef<HTMLDivElement>(null);
    const t = useTranslate();
    const { heading, paragraphOne, paragraphTwo } = {
        heading: t('team.heading'),
        paragraphOne: t('team.paragraphOne'),
        paragraphTwo: t('team.paragraphTwo'),
    };

    const onClick = (id: MemberId) => {
        ref.current?.onClick(id);
    };

    return (
        <>
            <StyledDiv>
                <ContentStyles padding={100} contentMargin className="content">
                    <div className="members-content">
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
                    <div ref={memberSectionRef} className="members">
                        <Member onClick={onClick} memberId="usman" />
                        <Member onClick={onClick} memberId="ahmed" />
                        <Member onClick={onClick} memberId="bilal" />
                        <Member onClick={onClick} memberId="haseeb" />
                    </div>
                </ContentStyles>
            </StyledDiv>
            <TeamMember
                ref={ref}
                id="team-members"
                memberSectionRef={memberSectionRef}
            />
        </>
    );
};

export default OurTeam;
