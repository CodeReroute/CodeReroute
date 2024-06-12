import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { LinkBox } from '../shared/ButtonBox';
import { black, darkWhite } from '../styles/theme';

interface PostNotFoundProps {
    slug: string | string[] | undefined;
}

const StyledDiv = styled.div`
    padding: 25px;
    .see-all-posts {
        margin-top: 25px;
    }
`;

const PostNotFound: React.FC<PostNotFoundProps> = () => (
    <StyledDiv>
        <div>Post Not Found</div>
        <Link href="/blog" passHref>
            <LinkBox
                isLight
                hoverColor={black}
                noNewTab
                hoverTextColor={darkWhite}
                text="SEE ALL BLOG POSTS"
                className="see-all-posts"
            />
        </Link>
    </StyledDiv>
);

export default PostNotFound;
