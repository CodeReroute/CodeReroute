import Link from 'next/link';
import React from 'react';
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

const PostNotFound: React.FC<PostNotFoundProps> = () => {
    return (
        <StyledDiv>
            <div>Post Not Found</div>
            <Link href="/blog" passHref>
                <LinkBox
                    isLight={true}
                    hoverColor={black}
                    noNewTab={true}
                    hoverTextColor={darkWhite}
                    text="SEE ALL BLOG POSTS"
                    className="see-all-posts"
                />
            </Link>
        </StyledDiv>
    );
};

export default PostNotFound;
