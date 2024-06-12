import React, { useEffect } from 'react';
import styled from 'styled-components';
import MetaTags from '../../components/MetaTags';
import Footer from '../../components/footer/Footer';
import PlainHeader from '../../components/privacyPolicy/PlainHeader';
import {
    ContentStyles,
    largerMobileBreakPoint,
    lightGray,
    sanSerifFont,
} from '../../components/styles/theme';
import PostRow from '../../components/blog/PostRow';
import { ContentSlideUp } from '../../components/styles/ContentSlideUp';
import { postKeys, posts } from '../../components/blog/posts';

const StyledContentStyles = styled(ContentStyles)`
    max-width: 800px;
    margin: 0 auto;
    padding: 150px 20px 100px 20px;
    font-size: 17px;
    font-family: ${sanSerifFont};
    @media screen and (max-width: ${largerMobileBreakPoint}px) {
        padding: 100px 10px 80px 10px;
    }
`;

const Blog: React.FC = () => {
    useEffect(() => {
        document.body.style.backgroundColor = lightGray;
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);
    return (
        <>
            <MetaTags
                title="Blog | Code Reroute"
                keywords="code reroute, blog, posts"
                description="Code Reroute - Blog"
            />
            <PlainHeader />
            <StyledContentStyles contentMargin>
                {postKeys.map((p) => {
                    const post = posts[p];
                    return (
                        post && (
                            <ContentSlideUp rootMargin="150px" key={p}>
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
