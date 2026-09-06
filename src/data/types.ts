export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags?: string[];
  github?: string;
  link?: string;
  image?: string;
  [key: string]: any;
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

export interface BookItem {
  id: number;
  title: string;
  author: string;
  status: string;
  cover: string;
  coverBg?: string;
}

export interface GoalItem {
  id: number;
  text: string;
  done: boolean;
}
