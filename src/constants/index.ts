import { OpenRole, SocialLink, TeamMember } from '@/types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Haseeb Khalid',
    role: 'UI Designer',
    image: '/profileImages/haseeb.png',
  },
  {
    name: 'Danielle Dufour',
    role: 'CEO',
    image: '/profileImages/danielle.png',
  },
  {
    name: 'Usman Ahmed',
    role: 'Software Engineer',
    image: '/profileImages/usman.png',
  },
  {
    name: 'Ahmed Ashfaq',
    role: 'Software Engineer',
    image: '/profileImages/ahmed.png',
  },

  {
    name: 'Hafiz Temuri',
    role: 'CTO',
    image: '/profileImages/hafiz.png',
  },
  {
    name: 'Bilal Siddique',
    role: 'Software Engineer',
    image: '/profileImages/bilal.png',
  },
  {
    name: 'Naeem Raza',
    role: 'Software Engineer',
    image: '/profileImages/naeem.png',
  },
  {
    name: 'You',
    role: 'Apply Now',
    image: '/profileImages/deafultAvatar.jpg',
  },
];

export const OPEN_ROLES_IDS: string[] = [
  'Senior-UI-UX-Designer-Position-February-2025',
];
export const OPEN_ROLES: OpenRole[] = [
  {
    id: OPEN_ROLES_IDS[0],
    title: 'Senior UI/UX Designer Position',
    initialReview: [
      'We’re building an ambitious project called mappetizer— a reimagined social media platform for restaurant discovery, easy reservations, trustworthy reviews + more.',
    ],
    process: [
      'Remote position',
      'Full-time hours',
      'Mandatory daily standup',
      '15 vacation days + 15 stat holidays',
      'Searching for a figma expert',
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
