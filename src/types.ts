export type ProjectType = "Learning" | "Side project";

export interface Project {
  key: number;
  type: ProjectType;
  title: string;
  description: string;
  moreUrl: string;
  preview?: string;
}

export interface ProfilData {
  name: string;
  role: string;
  roleSummary: string[];
  resumeUrl: string;
  projects: Project[];
  githubUrl: string;
  linkedInUrl: string;
  email: string;
}
