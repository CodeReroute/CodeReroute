import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import styled from 'styled-components';
import {
    lightGray,
    ContentStyles,
    largerMobileBreakPoint,
} from '../styles/theme';
import TeamMemberRender, { MemberId } from './TeamMemberRender';
import { getElementHeight } from '../../utils/elementOperations';

const scrollOptions: ScrollIntoViewOptions = {
    behavior: 'auto',
    block: 'center',
    inline: 'center',
};

interface TeamMemberProps {
    id: string;
    memberSectionRef: React.RefObject<HTMLDivElement>;
}

export interface TeamMemberForwardProps {
    onClick: (id: MemberId | undefined) => unknown;
}

const StyledDiv = styled.div`
    background-color: ${lightGray};
    .member-wrapper {
        height: 0;
        overflow: hidden;
        transition: all 0.5s ease-in-out;
    }
    @media only screen and (max-width: ${largerMobileBreakPoint}px) {
        .member-wrapper {
            padding-top: 0;
            padding-bottom: 0;
        }
    }
`;

const TeamMember = forwardRef<TeamMemberForwardProps, TeamMemberProps>(
    ({ id }, forwardedRef) => {
        const [open, setOpen] = useState<boolean>(false);
        const [memberId, setMemberId] =
            useState<MemberId | undefined>(undefined);
        const sectionRef = useRef<HTMLDivElement>(null);
        const formSectionRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const formElement = formSectionRef.current;
            if (!sectionRef.current || !formElement) return;
            if (!open && !memberId) return;
            if (!memberId) {
                setOpen(false);
                // memberSectionRef.current?.scrollIntoView(scrollOptions);
                formElement.setAttribute('style', 'height: 0;');
            } else {
                setOpen(true);
                formElement.scrollIntoView(scrollOptions);
                const height = getElementHeight(
                    formElement,
                    sectionRef.current,
                );
                formElement.setAttribute('style', `height: ${height}px;`);
            }
            // eslint-disable-next-line  react-hooks/exhaustive-deps
        }, [memberId]);

        useImperativeHandle(forwardedRef, () => ({
            onClick: (i) =>
                memberId === i ? setMemberId(undefined) : setMemberId(i),
        }));

        return (
            <StyledDiv id={id} ref={sectionRef}>
                <ContentStyles ref={formSectionRef} className="member-wrapper">
                    {memberId && (
                        <TeamMemberRender open={open} memberId={memberId} />
                    )}
                </ContentStyles>
            </StyledDiv>
        );
    },
);

TeamMember.displayName = 'TeamMember';

export default TeamMember;
