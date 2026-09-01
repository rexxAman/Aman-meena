export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  why: string;
  architecture?: string[];
  features?: string[];
  tags: string[];
  link?: string;
  github: string;
  image?: string;
}

