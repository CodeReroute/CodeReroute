import React, { useEffect } from 'react';
import styled from 'styled-components';
import PlainHeader from '../../components/privacyPolicy/PlainHeader';
import Footer from '../../components/footer/Footer';
import {
    ContentStyles,
    lightGray,
    sanSerifFont,
} from '../../components/styles/theme';
import PostRow from '../../components/blog/PostRow';
import { ContentSlideUp } from '../../components/styles/ContentSlideUp';
import MetaTags from '../../components/MetaTags';
import { authors } from '../../components/blog/authors';
import { webConfig } from '../../utils/webConfig';
import { postKeys, posts } from '../../components/blog/posts';

interface BlogProps {}

const StyledContentStyles = styled(ContentStyles)`
    max-width: 800px;
    margin: 0 auto;
    padding: 100px 20px;
    font-size: 17px;
    font-family: ${sanSerifFont};
`;

const Blog: React.FC<BlogProps> = () => {
    useEffect(() => {
        document.body.style.backgroundColor = lightGray;
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);
    return (
        <>
            <MetaTags
                title="Blog Posts | Code Reroute"
                keywords="code reroute, blog, posts"
                description="Code Reroute - Blog Posts"
            />
            <PlainHeader />
            <StyledContentStyles contentMargin>
                {postKeys.map((p) => {
                    const post = posts[p];
                    return (
                        post && (
                            <ContentSlideUp key={p}>
                                <PostRow {...post} />
                            </ContentSlideUp>
                        )
                    );
                })}
            </StyledContentStyles>
            <Footer />
        </>
    );
};

export default Blog;
