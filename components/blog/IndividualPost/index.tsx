import React from 'react';
import styled from 'styled-components';
import AuthorName from '../AuthorName';
import { Post } from '../posts';
import { StyledImage } from '../../profile/Avatar';

interface IndividualPostProps {
    post: Post;
}

const StyledDiv = styled.div`
    .featured-image {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .post-content-wrapper {
        padding: 25px;
    }
    .post-content {
        padding-top: 25px;
        padding-bottom: 25px;
    }
`;

const IndividualPost: React.FC<IndividualPostProps> = ({ post }) => (
    <StyledDiv>
        {post.image && (
            <StyledImage
                {...(post.image.post || post.image.summary)}
                className="featured-image"
            />
        )}
        <h1 className="post-content-wrapper">{post.title}</h1>
        {post.content}
        <div className="post-content-wrapper">
            <AuthorName author={post.author} />
        </div>
    </StyledDiv>
);

export default IndividualPost;
