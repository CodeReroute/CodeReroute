export interface TeamMember {
  name: string;
  role: string;
  image: string;
  mobileInfo?: string;
}

export interface OpenRole {
  title: string;
  initialReview: string[] | string;
  process: string[];
  endLines: string[] | string;
  roleUrl: string;
}
