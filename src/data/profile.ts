import type {
  Profile,
  Language,
  Technology,
  Education,
  Experience,
} from "../models/profile";

export const profile: Profile = {
  name: "Maria Azul Rossini",
  title: "Software Engineer",
  location: "Barcelona, Spain",
  email: "mazulrossini@gmail.com",
  phone: "+34610467983",
};

export const languages: Language[] = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Fluent" },
];

export const technologies: Technology[] = [
  { name: "React" },
  { name: "TypeScript" },
  { name: "Astro" },
  { name: "SQL" },
  { name: "Java" },
];

export const education: Education[] = [
  {
    school: "Universidad Tecnologia Nacional, Facultad Regional Santa Fe",
    degree: "",
    startDate: "2018-03-01",
    endDate: "2022-12-01",
    description:
      "Focus on software engineering, web development, and distributed systems.",
  },
  {
    school: "Bootcamp / Course",
    degree: "Full‑Stack Web Development",
    startDate: "2023-01-01",
    description:
      "Intensive program covering modern frontend and backend technologies.",
  },
];

export const experience: Experience[] = [
  {
    company: "FolderIT",
    role: " Fullstack developer",
    startDate: "2022-08-03",
    description:
      "I currently work as a full-stack developer. I design and build scalable web applications using Next.js, React, TypeScript, Node.js, and AWS services. I deliver efficient solutions for diverse businesses, including e-commerce and service platforms. Experienced in cross-functional collaboration, I communicate effectively in English and Spanish and thrive in fast-paced, innovation-driven environments.",
  },
  {
    company: "Previous Company",
    role: "Software Developer",
    startDate: "2021-01-01",
    endDate: "2022-12-01",
    description:
      "Worked on API design, internal tools, and end‑to‑end features across the stack.",
  },
];

