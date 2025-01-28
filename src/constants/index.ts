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
];

export const OPEN_ROLES: OpenRole[] = [
  {
    title: 'Software Engineer',
    initialReview:
      'We are looking for a Software Engineer to join our team. The ideal candidate will have experience in JavaScript, React, and Node.js.',
    process: [
      'first round of interviews',
      'second round of interviews',
      'third round of interviews',
    ],
    endLines: 'We will get back to you within 24 hours.',
    roleUrl: '/work-here/open-roles/software-engineer',
  },
  {
    title: 'UI Designer',
    initialReview: 'We are looking for a UI Designer to join our team.',
    process: ['first round of interviews', 'second round of interviews'],
    endLines: 'We will get back to you within 24 hours.',
    roleUrl: '/work-here/open-roles/ui-designer',
  },
  {
    title: 'Product Manager',
    initialReview: 'We are looking for a Product Manager to join our team.',
    process: ['first round of interviews', 'second round of interviews'],
    endLines: 'We will get back to you within 24 hours.',
    roleUrl: '/work-here/open-roles/product-manager',
  },
];
