export type MonthYearISO = string; // "YYYY-MM-DD" (we show only month+year)

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
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
  startDate: MonthYearISO;
  endDate?: MonthYearISO;
  description: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: MonthYearISO;
  endDate?: MonthYearISO;
  description: string;
}

