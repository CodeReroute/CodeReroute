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

const StyledDiv = styled.div`
    background-color: ${lightGray};
    .content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 32px;
        .members {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 30px;
            flex-wrap: wrap;
            .member {
                cursor: pointer;
                .member-details {
                    text-align: center;
                    .bio-button-wrapper .bio-button {
                        color: ${black};
                        border-color: ${black};
                        background-color: transparent;
                        margin: 8px auto 0 auto;
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
                        <div ref={memberSectionRef} className="members">
                            <div
                                onClick={() => onClick('usman')}
                                className="member"
                            >
                                <ContentSlideUp>
                                    <Avatar
                                        image={`${webConfig.basePath}/assets/team/usman.png`}
                                    />
                                </ContentSlideUp>
                                <ContentSlideUp>
                                    <MemberTitle
                                        id="usman"
                                        name="Usman Ahmed"
                                        role="Software Engineer"
                                        onClick={() => null}
                                        className="member-details"
                                    />
                                </ContentSlideUp>
                            </div>
                            <div
                                onClick={() => onClick('nabah')}
                                className="member"
                            >
                                <ContentSlideUp>
                                    <Avatar
                                        image={`${webConfig.basePath}/assets/team/nabah.png`}
                                    />
                                </ContentSlideUp>
                                <ContentSlideUp>
                                    <MemberTitle
                                        id="nabah"
                                        name="Nabah Sheikh"
                                        role="Software Engineer"
                                        onClick={() => null}
                                        className="member-details"
                                    />
                                </ContentSlideUp>
                            </div>
                        </div>
                    </ContentStyles>
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
