export type MonthYearISO = string; // "YYYY-MM-DD" (we show only month+year)

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  githubUrl?: string;
  aboutTagline?: string;
  aboutBody?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Technology {
  name: string;
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  startDate: MonthYearISO;
  endDate?: MonthYearISO;
  description: string;
  highlights?: string[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  startDate: MonthYearISO;
  endDate?: MonthYearISO;
  description: string;
  responsibilities?: string[];
}

