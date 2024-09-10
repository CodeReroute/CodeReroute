import React from 'react';
import Avatar from '../profile/Avatar';
import MemberTitle from '../profile/MemberTitle';
import { MemberId } from './TeamMemberRender';
import { webConfig } from '../../utils/webConfig';
import { ContentSlideUp } from '../styles/ContentSlideUp';
import { useTranslate } from '../../utils/hooks/useTranslate';

interface MemberProps {
    memberId: MemberId;
    onClick: (memberId: MemberId) => unknown;
}

const Member: React.FC<MemberProps> = ({ memberId, onClick }) => {
    const t = useTranslate();
    const { memberInfo } = {
        memberInfo: {
            name: t(`teamMembers.${memberId}.name`),
            role: t(`teamMembers.${memberId}.role`),
        },
    };
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => onClick(memberId)}
            onKeyDown={() => onClick(memberId)}
            className="member"
        >
            <ContentSlideUp>
                <Avatar
                    image={`${webConfig.basePath}/assets/team/${memberId}.png`}
                />
            </ContentSlideUp>
            <ContentSlideUp>
                <MemberTitle
                    id={memberId}
                    name={memberInfo.name}
                    memberRole={memberInfo.role}
                    onClick={() => null}
                    className="member-details"
                />
            </ContentSlideUp>
        </div>
    );
};

export default Member;
