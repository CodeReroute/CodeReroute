import { webConfig } from '../../utils/webConfig';
import { StyledImageProps } from '../profile/Avatar';
import { Author, authors } from './authors';
import { postContent } from './postContent';
import { postSummary } from './postSummary';

export interface Post {
    slug: string;
    title: JSX.Element;
    summary: JSX.Element;
    content: JSX.Element;
    image?: {
        summary: StyledImageProps;
        post?: StyledImageProps;
    };
    author: Author;
}

export const posts: { [id: string]: Post | undefined } = {
    'react-native-windows-setup': {
        slug: 'react-native-windows-setup',
        author: authors.ahmed,
        title: <>React Native Setup On Windows</>,
        summary: postSummary['react-native-windows-setup'],
        content: postContent['react-native-windows-setup'],
        image: {
            summary: {
                height: 300,
                positionVertical: 'calc(50% + 20px)',
                url: `${webConfig.basePath}/assets/blog/react-native-windows-setup/featured-image.png`,
            },
            post: {
                height: 0,
            },
        },
    },
};

export const postKeys = Object.keys(posts);
