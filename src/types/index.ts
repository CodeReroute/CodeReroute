export interface TeamMember {
  name: string;
  role: string;
  image: string;
  blurDataURL: string;
  mobileInfo?: string;
}

export interface OpenRole {
  id: string;
  title: string;
  initialReview: string[] | string;
  process: string[];
  endLines: string[] | string;
  roleUrl: string;
}

export interface SocialLink {
  href: string;
  icon: string;
  platform: string;
}
