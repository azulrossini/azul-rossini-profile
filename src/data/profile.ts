import type {
  Profile,
  Language,
  Technology,
  Education,
  Experience,
} from "../types/profile";

export const profile: Profile = {
  name: "Maria Azul Rossini",
  title: "Software Engineer",
  location: "Barcelona, Spain",
  email: "mazulrossini@gmail.com",
  phone: "+34610467983",
  githubUrl: "https://github.com/azulrossini/azul-rossini-profile",
  aboutTagline:
    "Software Engineer · 5+ years building products that scale, now focused on AI-powered solutions",
  aboutBody:
    "I turn complex problems into clean, user-focused solutions. Strong in full-stack development and cloud architecture, I work best in teams that care about quality and delivery. I'm currently building an AI-powered product end to end, from integrating AI tools into my own workflow to shipping AI-driven features for clients. Bilingual (English & Spanish), used to remote and agile environments—ready to bring focus and reliability to your next project.",
};

export const languages: Language[] = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Fluent" },
];

export const technologies: Technology[] = [
  { name: "React" },
  { name: "TypeScript" },
  { name: "Javascript" },
  { name: "SQL" },
  { name: "PostgreSQL" },
  { name: "Java Springboot" },
  { name: "AWS" },
  { name: "NodeJS" },
  { name: "HTML" },
  { name: "CSS" },
  { name: "Next.js" },
  { name: "Git" },
  { name: "MaterialUI" },
  { name: "Nuxt" },
  { name: "Astro" },
  { name: "MongoDB" },
  { name: "Docker" },
  { name: "AI Tools (Copilot, Cursor, ChatGPT, Claude)" },
  { name: "Prompt Engineering" },
  { name: "AI-powered Product Development" },
];

export const education: Education[] = [
  {
    school: "Universidad Tecnológica Nacional, Facultad Regional Santa Fe",
    degree: "Information Systems Engineering",
    location: "Santa Fe, Argentina",
    startDate: "2014-03-01",
    endDate: "2021-08-01",
    description:
      "Full degree in Information Systems Engineering with a strong foundation in software design, databases, and systems analysis. The program combined theoretical coursework with practical projects and final-year thesis work.",
    highlights: [
      "Software engineering, algorithms, data structures, and object-oriented design",
      "Databases (relational and SQL), systems analysis, and software architecture",
      "Networks, operating systems, and software project management",
      "Final thesis and project work in real-world systems development",
    ],
  },
];

export const experience: Experience[] = [
  {
    company: "Kabilio",
    role: "Fullstack Developer",
    location: "Barcelona, Spain",
    startDate: "2026-03-01",
    description:
      "Building an AI-powered product from the ground up: a software platform that both uses AI tools in its own development workflow and delivers AI-driven solutions directly to clients.",
    responsibilities: [
      "Design and build the product's core features as part of a small, fast-moving team",
      "Use AI tools (Copilot, Cursor, ChatGPT, Claude) throughout the development process to boost productivity and code quality",
      "Develop AI-driven capabilities that ship directly to clients as product features",
      "Collaborate cross-functionally to turn product ideas into shipped, reliable software",
    ],
  },
  {
    company: "FolderIT",
    role: "Fullstack Developer",
    location: "Santa Fe, Argentina",
    startDate: "2022-08-03",
    endDate: "2025-12-01",
    description:
      "Design and build scalable web applications for diverse clients (e-commerce, services, internal tools) using modern full-stack technologies. Work closely with stakeholders and cross-functional teams in English and Spanish to deliver on time and iterate based on feedback.",
    responsibilities: [
      "Architect and implement full-stack features with Next.js, React, TypeScript, Node.js, and AWS",
      "Own end-to-end delivery: requirements, implementation, testing, and deployment",
      "Integrate third-party APIs and services; design and maintain PostgreSQL databases",
      "Collaborate with product and design to align technical solutions with business goals",
      "Mentor and support teammates; participate in code reviews and agile ceremonies",
    ],
  },
  {
    company: "Serfe",
    role: "Software Developer",
    location: "Santa Fe, Argentina",
    startDate: "2021-10-01",
    endDate: "2022-08-01",
    description:
      "Full-stack development with React, Redux, JavaScript, and AWS. Delivered efficient, client-oriented web solutions and integrated third-party products to enhance project functionality. Thrived in fast-paced environments through adaptability, problem-solving, and effective teamwork.",
    responsibilities: [
      "Developed and maintained React, Redux, and JavaScript-based web applications",
      "Used AWS services for deployment, storage, and infrastructure",
      "Integrated third-party products and APIs to extend platform functionality",
      "Delivered client-oriented solutions with a focus on efficiency and usability",
      "Worked in agile, fast-paced teams with strong emphasis on problem-solving and collaboration",
    ],
  },
];
