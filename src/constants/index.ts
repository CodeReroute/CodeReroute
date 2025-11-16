import { OpenRole, SocialLink, TeamMember } from '@/types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Haseeb Khalid',
    role: 'UI Designer',
    image: '/profileImages/haseeb.png',
    blurDataURL: '/profileImages/haseeb_optimized.png',
  },
  {
    name: 'Danielle Dufour',
    role: 'CEO',
    image: '/profileImages/danielle.png',
    blurDataURL: '/profileImages/danielle_optimized.png',
  },
  {
    name: 'Usman Ahmed',
    role: 'Software Engineer',
    image: '/profileImages/usman.png',
    blurDataURL: '/profileImages/usman_optimized.png',
  },
  {
    name: 'Ahmed Ashfaq',
    role: 'Software Engineer',
    image: '/profileImages/ahmed.png',
    blurDataURL: '/profileImages/ahmed_optimized.png',
  },

  {
    name: 'Hafiz Temuri',
    role: 'CTO',
    image: '/profileImages/hafiz.png',
    blurDataURL: '/profileImages/hafiz_optimized.png',
  },
  {
    name: 'Bilal Siddique',
    role: 'Software Engineer',
    image: '/profileImages/bilal.png',
    blurDataURL: '/profileImages/bilal_optimized.png',
  },
  {
    name: 'Naeem Raza',
    role: 'Software Engineer',
    image: '/profileImages/naeem.png',
    blurDataURL: '/profileImages/naeem_optimized.png',
  },
  {
    name: 'You',
    role: 'Apply Now',
    image: '/profileImages/deafultAvatar.jpg',
    blurDataURL: '/profileImages/deafultAvatar_optimized.jpg',
  },
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
    href: 'https://www.instagram.com/code_reroute/',
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