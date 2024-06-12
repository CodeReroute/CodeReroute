import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactDOMServer from 'react-dom/server';
import { useRouter } from 'next/router';
import { posts } from '../../components/blog/posts';
import PostNotFound from '../../components/blog/PostNotFound';
import MetaTags from '../../components/MetaTags';
import Footer from '../../components/footer/Footer';
import PlainHeader from '../../components/privacyPolicy/PlainHeader';
import IndividualPost from '../../components/blog/IndividualPost';
import {
    ContentStyles,
    lightGray,
    sanSerifFont,
} from '../../components/styles/theme';
import { StyledPostWrapper } from '../../components/blog/PostRow';

const StyledContentStyles = styled(ContentStyles)`
    max-width: 800px;
    margin: 0 auto;
    padding: 150px 20px 100px 20px;
    font-size: 17px;
    font-family: ${sanSerifFont};
`;

const BlogPost: React.FC = () => {
    const router = useRouter();
    const post =
        typeof router.query.slug === 'string'
            ? posts[router.query.slug]
            : undefined;

    useEffect(() => {
        document.body.style.backgroundColor = lightGray;
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (
        <>
            <MetaTags
                title={
                    post
                        ? `${ReactDOMServer.renderToStaticMarkup(
                              post.title,
                          )} | Code Reroute`
                        : 'Post Not Found | Code Reroute'
                }
                keywords="code reroute, blog, posts"
                description="Code Reroute - Blog Posts"
            />
            <PlainHeader link="/blog" />
            <StyledContentStyles contentMargin>
                <StyledPostWrapper>
                    {post ? (
                        <IndividualPost post={post} />
                    ) : (
                        <PostNotFound slug={router.query.slug} />
                    )}
                </StyledPostWrapper>
            </StyledContentStyles>
            <Footer />
        </>
    );
};

export default BlogPost;
