import React, { useEffect } from 'react';
import styled from 'styled-components';
import { posts } from '../../components/blog/posts';
import PostNotFound from '../../components/blog/PostNotFound';
import MetaTags from '../../components/MetaTags';
import Footer from '../../components/footer/Footer';
import PlainHeader from '../../components/privacyPolicy/PlainHeader';
import IndividualPost from '../../components/blog/IndividualPost';
import {
    ContentStyles,
    largerMobileBreakPoint,
    lightGray,
    sanSerifFont,
} from '../../components/styles/theme';
import { StyledPostWrapper } from '../../components/blog/PostRow';
import { GetServerSideProps } from 'next';

interface BlogPostProps {
    title: string | undefined;
    slug: string | undefined;
}

export const getServerSideProps: GetServerSideProps<BlogPostProps> = async (
    context,
) => {
    const { params } = context;
    if (!params) {
        return {
            props: {
                title: undefined,
                slug: undefined,
            },
        };
    }
    const { slug } = params;
    const slugString = typeof slug === 'string' ? slug : undefined;
    const post = slugString ? posts[slugString] : undefined;
    return {
        props: {
            title: post?.titleString,
            slug: slugString,
        },
    };
};

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

const BlogPost: React.FC<BlogPostProps> = ({ slug, title }) => {
    const post = slug ? posts[slug] : undefined;

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
                        ? `${title} | Code Reroute`
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
                        <PostNotFound slug={slug} />
                    )}
                </StyledPostWrapper>
            </StyledContentStyles>
            <Footer />
        </>
    );
};

export default BlogPost;
