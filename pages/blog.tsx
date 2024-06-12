import React from 'react';
import styled from 'styled-components';
import PlainHeader from '../components/privacyPolicy/PlainHeader';

interface BlogProps {}

const StyledDiv = styled.div``;

const Blog: React.FC<BlogProps> = () => {
    return (
        <StyledDiv>
            <PlainHeader />
        </StyledDiv>
    );
};

export default Blog;
