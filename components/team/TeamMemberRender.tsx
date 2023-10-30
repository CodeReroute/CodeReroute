import styled from 'styled-components';
import { ContentStyles, Heading, SanText, SmallText } from '../styles/theme';
import { useTranslate } from '../../utils/hooks/useTranslate';
import { useMemo } from 'react';
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
    padding-top: 4px;
    padding-bottom: 80px;
    padding-left: 80px;
    padding-right: 80px;
    h4 {
        margin-top: 8px;
    }
    .icon-wrapper {
        cursor: pointer;
        svg {
            fill: transparent;
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
        <StyledDiv>
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
            <ContentSlideUp>
                <Heading>{name}</Heading>
            </ContentSlideUp>
            <ContentSlideUp>
                <SmallText>{role}</SmallText>
            </ContentSlideUp>
            <div className="bio-description-wrapper">
                {bio.map((b, i) => (
                    <ContentSlideUp className="bio-description" key={i}>
                        <SanText>{b}</SanText>
                    </ContentSlideUp>
                ))}
            </div>
        </StyledDiv>
    );
};

export default TeamMemberRender;
