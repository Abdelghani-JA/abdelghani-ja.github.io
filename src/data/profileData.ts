import type { ProfilData, Project } from "@/types";
import resumeUrl from "../assets/resume.pdf";

export const projects: Project[] = [
  {
    key: 3,
    type: "Side project",
    title: "My Portfolio",
    description:
      "My personal website you're visiting now, ready to be customized.",
    moreUrl: "https://github.com/Abdelghani-JA/fso-typescript/",
  },
  {
    key: 2,
    type: "Learning",
    title: "TypeScript",
    description: "Projects that are part of my learning journey of TypeScript.",
    moreUrl: "https://github.com/Abdelghani-JA/fso-typescript/",
  },
  {
    key: 1,
    type: "Learning",
    title: "Full Stack Open Course",
    description:
      "Projects that are part of my learning journey of developing \
       web apps/SPAs with React, Node.js, and their ecosystem.",
    moreUrl: "https://github.com/Abdelghani-JA/Full-Stack-Open",
  },
];

export const profileData: ProfilData = {
  name: "Abdelghani JALDA",
  role: "Web Developer",
  roleSummary: [
    `Self-taught web developer from Morocco, experienced in building dynamic,
      component-based interfaces using React, integrating APIs, and writing unit to end-to-end tests.`,
    `My skills focus on translating design to code, make it alive, responsive and accessible.`,
  ],
  resumeUrl,
  projects,
  linkedInUrl: "https://www.linkedin.com/in/abdelghani-jalda/",
  githubUrl: "https://github.com/Abdelghani-JA/",
  email: "mailto:abdelghani.jalda@gmail.com",
};
