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
    name: 'Haseeb Khalid',
    role: 'UI Designer',
    image: haseeb.src,
    blurDataURL: '/profileImages/haseeb_optimized.png',
  },
  {
    name: 'Danielle Dufour',
    role: 'CEO',
    image: danielle.src,
    blurDataURL: '/profileImages/danielle_optimized.png',
  },
  {
    name: 'Usman Ahmed',
    role: 'Software Engineer',
    image: usman.src,
    blurDataURL: '/profileImages/usman_optimized.png',
  },
  // {
  //   name: 'Ahmed Ashfaq',
  //   role: 'Software Engineer',
  //   image: ahmed.src,
  //   blurDataURL: '/profileImages/ahmed_optimized.png',
  // },

  {
    name: 'Hafiz Temuri',
    role: 'CTO',
    image: hafiz.src,
    blurDataURL: '/profileImages/hafiz_optimized.png',
  },
  {
    name: 'Bilal Siddique',
    role: 'Software Engineer',
    image: bilal.src,
    blurDataURL: '/profileImages/bilal_optimized.png',
  },
  {
    name: 'Shoaib Ahmed',
    role: 'Senior UI Designer',
    image: shoaib.src,
    blurDataURL: '/profileImages/shoaib_optimized.png',
  },
  {
    name: 'Naeem Raza',
    role: 'Software Engineer',
    image: naeem.src,
    blurDataURL: '/profileImages/naeem_optimized.png',
  },
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
  { href: '/tech-company', label: 'TECH AGENCY', exact: true },
  { href: '/mappetizer', label: 'MAPPETIZER', exact: true },
  { href: '/work-here', label: 'WORK HERE', exact: false },
];
