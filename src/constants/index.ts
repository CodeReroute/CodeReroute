import { OpenRole, SocialLink, TeamMember } from '@/types';

// Profile images for work-here page grid
import danielle from '../../public/profileImages/danielle.png';
import usman from '../../public/profileImages/usman.png';
import naeem from '../../public/profileImages/naeem.png';
import hafiz from '../../public/profileImages/hafiz.png';
import bilal from '../../public/profileImages/bilal.png';
import shoaib from '../../public/profileImages/shoaib.png';
import haseeb from '../../public/profileImages/haseeb.png';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Danielle Dufour',
    role: 'CEO',
    image: danielle,
  },
  {
    name: 'Usman Ahmed',
    role: 'Software Engineer',
    image: usman,
  },
  {
    name: 'Naeem Raza',
    role: 'Software Engineer',
    image: naeem,
  },
  {
    name: 'Hafiz Temuri',
    role: 'CTO',
    image: hafiz,
  },
  {
    name: 'Bilal Siddique',
    role: 'Software Engineer',
    image: bilal,
  },
  {
    name: 'Shoaib Ahmed',
    role: 'Senior UI Designer',
    image: shoaib,
  },
  {
    name: 'Haseeb Khalid',
    role: 'UI Designer',
    image: haseeb,
  },
  // {
  //   name: 'Ahmed Ashfaq',
  //   role: 'Software Engineer',
  //   image: ahmed,
  //   blurDataURL: '/profileImages/ahmed_optimized.png',
  // },
  // {
  //   name: 'You',
  //   role: 'Apply Now',
  //   image: '/profileImages/deafultAvatar.jpg',
  //   blurDataURL: '/profileImages/deafultAvatar_optimized.jpg',
  // },
];

export const OPEN_ROLES_IDS: string[] = [
  'Frontend-Developer-Position-August-2025',
];
export const OPEN_ROLES: OpenRole[] = [
  {
    id: OPEN_ROLES_IDS[0],
    title: 'Frontend Developer Position',
    initialReview: [
      'We’re building an ambitious project called mappetizer— a reimagined social media platform for restaurant discovery, easy reservations, trustworthy reviews + more.',
    ],
    process: [
      'Remote position',
      'Full-time hours',
      'Mandatory daily standup',
      '15 vacation days + 15 stat holidays',
      'Searching for a React Native developer',
    ],
    endLines: '',
    roleUrl: `/work-here/${OPEN_ROLES_IDS[0]}`,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://www.instagram.com/_mappetizer/',
    icon: 'insta',
    platform: 'Instagram',
  },
  {
    href: 'https://www.tiktok.com/@mappetizer',
    icon: 'tiktok',
    platform: 'TikTok',
  },
  {
    href: 'https://www.linkedin.com/company/code-reroute/',
    icon: 'linkedin',
    platform: 'LinkedIn',
  },
];

export interface NavItem {
  href: string;
  label: string;
  exact?: boolean;
  external?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { href: '/tech-agency', label: 'TECH AGENCY', exact: true },
  { href: '/mappetizer', label: 'MAPPETIZER', exact: true },
  { href: '/work-here', label: 'WORK HERE', exact: false },
];

// Export shared styles
export * from './styles';
