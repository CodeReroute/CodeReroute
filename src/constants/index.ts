import { OpenRole, TeamMember } from '@/types';

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
    name: 'Your Photo Here',
    role: 'Apply Now',
    image: '/profileImages/deafultAvatar.jpg',
  },
];

export const OPEN_ROLES: OpenRole[] = [
  {
    title: 'Senior UI/UX Designer Position',
    initialReview: [
      'Searching for a Senior UI/UX Designer to join our team.',
      'We’re building an ambitious project called mappetizer— a new social media platform for restaurant discovery, easy reservations, trustworthy reviews + more.',
    ],
    process: [
      'This is a fully remote and full-time position',
      'There is a mandatory daily standup but otherwise, working hours can happen at any time',
      'Offering 15 vacation days (+ your country’s national holidays)',
      'Candidate should be a figma expert',
    ],
    endLines: '',
    roleUrl: '/work-here/Senior-UI-UX-Designer-Position-February-2025',
  },
];
