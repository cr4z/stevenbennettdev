export type ContentGeneratorContent = {
  introOverview: React.ReactNode | string;
  techUsed?: ContentGeneratorTechProduct[];
  featuresAndFunctionality?: React.ReactNode | string;
  problemsAndSolutions?: React.ReactNode | string;
  resultsAndImpact?: React.ReactNode | string;
  skillsShown?: SkillItem[];
};

export type SkillItem = {
  skill: string;
  desc: string | React.ReactNode;
};

export type ContentGeneratorTechProduct = {
  name: "React" | "TypeScript" | "MUI" | "Figjam";
  content: React.ReactNode | string;
};
