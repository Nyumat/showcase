export type Project = {
  id: number | string;
  title: string;
  image: string;
  link?: string;
  github?: string;
  demoVideo?: string;
};

export type Image = {
  id: number | string;
  title?: string;
  image: string;
  link?: string;
};

export type Interest = {
  id: number | string;
  title: string;
  image: string;
  link?: string;
};

export type Skill = {
  id: number;
  title: string;
  image: string;
  link?: string;
};

export type Experience = {
  id: number;
  title: string;
  image: string;
  position?: string;
  date?: string;
  description?: string;
};

export type Education = {
  id: number;
  title: string;
  image: string;
  date?: string;
};

export type Contact = {
  id: number;
  title: string;
  image: string;
  link?: string;
};

export type Social = {
  id: number;
  title: string;
  image: string;
  link?: string;
  username?: string;
};
