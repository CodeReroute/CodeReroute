import React, { useMemo } from 'react';
import styled from 'styled-components';
import {
    ContentStyles,
    Heading,
    SanText,
    SmallText,
    lightGray,
} from '../styles/theme';
import { useTranslate } from '../../utils/hooks/useTranslate';
import {
    SocialMediaIconSlideUp,
    StyledSocialMediaDiv,
    socialMediaAnimationDelayTime,
    socialMediaAnimationTime,
} from '../socialMedia/SocialMediaIcons';
import { LinkedInIcon } from '../socialMedia/Icons';
import { ContentSlideUp } from '../styles/ContentSlideUp';

const defaultDetails = {
    linkedin: undefined,
    name: undefined,
    role: undefined,
    bio: [],
};

export type MemberId = 'usman' | 'nabah';

interface TeamMemberRenderProps {
    open: boolean;
    memberId: MemberId | undefined;
}

const StyledDiv = styled(ContentStyles)`
    padding-top: 0;
    padding-bottom: 80px;
    padding-left: 80px;
    padding-right: 80px;
    .icon-wrapper {
        margin-top: 8px;
        cursor: pointer;
        svg {
            fill: ${lightGray};
        }
    }
    .bio-description-wrapper {
        margin-top: 24px;
        .bio-description {
            margin-top: 8px;
        }
    }
`;

const TeamMemberRender: React.FC<TeamMemberRenderProps> = ({ memberId }) => {
    const t = useTranslate();
    const { linkedin, name, role, bio } = useMemo(() => {
        if (!memberId) return defaultDetails;
        return {
            linkedin: t(`teamMembers.${memberId}.linkedIn`),
            name: t(`teamMembers.${memberId}.name`),
            role: t(`teamMembers.${memberId}.role`),
            bio: t(`teamMembers.${memberId}.bio`) as unknown as string[],
        };
    }, [t, memberId]);

    return (
        <ContentSlideUp>
            <StyledDiv>
                <Heading>{name}</Heading>
                <SmallText>{role}</SmallText>
                <StyledSocialMediaDiv padding={25} size={13}>
                    {linkedin && (
                        <SocialMediaIconSlideUp
                            className="icon-wrapper"
                            time={socialMediaAnimationTime}
                            delay={socialMediaAnimationDelayTime * 2}
                        >
                            <a
                                href={linkedin}
                                target="_blank"
                                className="icon-margin-right icon"
                                rel="noreferrer"
                            >
                                {LinkedInIcon}
                            </a>
                        </SocialMediaIconSlideUp>
                    )}
                </StyledSocialMediaDiv>
                <div className="bio-description-wrapper">
                    {bio.map((b, i) => (
                        <div
                            className="bio-description"
                            // eslint-disable-next-line react/no-array-index-key
                            key={`${i}-${memberId}`}
                        >
                            {b}
                        </div>
                    ))}
                </div>
            </StyledDiv>
        </ContentSlideUp>
    );
};

export default TeamMemberRender;
