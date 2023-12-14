export type ContentGeneratorContent = {
  introOverview: JSX.Element | string;
  techUsed?: ContentGeneratorTechProduct[];
  featuresAndFunctionality?: JSX.Element | string;
  problemsAndSolutions?: JSX.Element | string;
  resultsAndImpact?: JSX.Element | string;
  skillsShown: SkillItem[];
};

export type SkillItem = {
  skill: string;
  desc: string;
};

export type ContentGeneratorTechProduct = {
  name: "React" | "TypeScript" | "MUI";
  content: JSX.Element | string;
};
