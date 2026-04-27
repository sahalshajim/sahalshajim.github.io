export type Link = {
  label: string;
  url: string;
};

export type Publication = {
  title: string;
  authors: string[];
  meIndex: number;
  coFirst?: number[];
  venue: string;
  notes?: string[];
  description: string;
  links: Link[];
  downloads?: string;
};

export type Patent = {
  title: string;
  authors: string[];
  status: "Granted" | "Pending";
  number: string;
  url: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  gpa?: string;
  notes?: string;
};

export type ExperienceItem = {
  role: string;
  org: string;
  period?: string;
  link?: string;
};

export type Project = {
  title: string;
  blurb: string;
  bullets: string[];
  demo?: string;
};

export type FeaturedPost = {
  eyebrow: string;
  title: string;
  dek: string;
  href: string;
  image?: string;
  background?: string;
  youtube?: string;
  objectPosition?: string;
};

export type HighlightSegment = {
  text: string;
  url?: string;
  bold?: boolean;
};

export type Highlight = HighlightSegment[];

export type Award = {
  title: string;
  year: string;
};

export type ImpactStat = {
  value: string;
  label: string;
};
