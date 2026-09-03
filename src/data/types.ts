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

export interface WritingSectionBlock {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Writing {
  slug: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  tags?: string[];
  sections: WritingSectionBlock[];
  takeaways?: string[];
}


