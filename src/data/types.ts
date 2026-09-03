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

export interface Writing {
  slug: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  likes?: number;
  image?: string;
  paragraphs: string[];
}

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  detail: string;
  link?: string;
}





