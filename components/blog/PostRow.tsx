import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import AuthorName from './AuthorName';
import { StyledImage } from '../profile/Avatar';
import { black, darkWhite, tabletBreakPoint, white } from '../styles/theme';
import { LinkBox } from '../shared/ButtonBox';
import { Post } from './posts';

export const StyledPostWrapper = styled.div`
    border-radius: 8px;
    margin-bottom: 30px;
    background-color: ${white};
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledDiv = styled(StyledPostWrapper)`
    .featured-image {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .read-more {
        padding-top: 12px;
        padding-bottom: 12px;
    }
    .post-summary {
        padding: 25px;
        .summary {
            padding-top: 25px;
            padding-bottom: 25px;
        }
    }
    h1 {
        font-size: 25px;
        font-weight: 500;
    }
    .author-flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    @media screen and (max-width: ${tabletBreakPoint}px) {
        .author-flex {
            flex-direction: column-reverse;
        }
        .read-more {
            margin-top: 0;
            margin-bottom: 25px;
        }
    }
`;

const PostRow: React.FC<Post> = ({ author, title, summary, image, slug }) => (
    <StyledDiv>
        {image && <StyledImage {...image.summary} className="featured-image" />}
        <div className="post-summary">
            <h1>{title}</h1>
            <div className="summary">{summary}</div>
            <div className="author-and-read-more author-flex">
                <AuthorName author={author} />
                <Link href={`/blog/${slug}`} passHref>
                    <LinkBox
                        isLight
                        hoverColor={black}
                        noNewTab
                        hoverTextColor={darkWhite}
                        text="READ MORE"
                        className="read-more"
                    />
                </Link>
            </div>
        </div>
    </StyledDiv>
);

export default PostRow;
