import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Avatar from '../profile/Avatar';
import { Author } from './authors';

interface AuthorNameProps {
    author: Author;
}

const StyledDiv = styled.div<{ borderWidth?: number }>`
    display: flex;
    align-items: center;
    .author-avatar {
        width: 50px;
        height: 50px;
        ${({ borderWidth }) =>
            borderWidth ? `border-width: ${borderWidth}px !important;` : ''}
    }
    .author-name {
        margin-left: 8px;
        .author-full-name {
            font-weight: 600;
        }
    }
`;

const AuthorComponent: React.FC<AuthorNameProps> = ({ author }) => (
    <StyledDiv borderWidth={author.borderWidth}>
        <Avatar
            image={author.url}
            title={author.name}
            className="author-avatar"
        />
        <div>
            <h6 className="author-name">
                <span className="author-full-name">
                    {author.name.toUpperCase()}
                </span>
                {author.title && (
                    <>
                        <br />
                        {author.title.toUpperCase()}
                    </>
                )}
            </h6>
        </div>
    </StyledDiv>
);

const AuthorName: React.FC<AuthorNameProps> = ({ author }) =>
    author.link ? (
        <Link href={author.link} passHref>
            <a
                target="_blank"
                rel="noopener noreferrer"
                className="author-flex"
            >
                <AuthorComponent author={author} />
            </a>
        </Link>
    ) : (
        <AuthorComponent author={author} />
    );

export default AuthorName;
