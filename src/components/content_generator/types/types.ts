export type ContentGeneratorContent = {
  introOverview: JSX.Element | string;
  techUsed?: ContentGeneratorTechProduct[];
  featuresAndFunctionality?: JSX.Element | string;
  problemsAndSolutions?: JSX.Element | string;
  resultsAndImpact?: JSX.Element | string;
};

export type ContentGeneratorTechProduct = {
  name: "React" | "TypeScript" | "MUI";
  content: JSX.Element | string;
};
