import { webConfig } from '../../utils/webConfig';

export interface Author {
    name: string;
    title?: string;
    link?: string;
    url: string;
    borderWidth?: number;
}

type AuthorNames = 'ahmed' | 'usman';

export const authors: { [id in AuthorNames]: Author } = {
    ahmed: {
        name: 'Ahmed Ashfaq',
        url: `${webConfig.basePath}/assets/team/ahmed.jpg`,
        title: 'Junior Software Engineer',
        borderWidth: 1,
    },
    usman: {
        name: 'Usman Ahmed',
        url: `${webConfig.basePath}/assets/team/usman.png`,
        title: 'Junior Software Engineer',
    },
};
