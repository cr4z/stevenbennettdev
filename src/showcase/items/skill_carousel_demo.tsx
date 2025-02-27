import { Box, Stack, Typography } from "@mui/material";
import SkillCarousel from "../../views/home/components/skill_carousel";
import { SBDCodeBlock } from "../../sbd_development_kit/components/code_block";

const code = `import { IoLogoReact } from "react-icons/io5";
import { TbBrandTypescript, TbBrandRedux, TbBrandNextjs } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import { IoLogoGithub } from "react-icons/io";
import { RxFigmaLogo } from "react-icons/rx";
import { motion } from "framer-motion";
import { useState } from "react";
import { Stack, styled, Typography } from "@mui/material";

const UNIT_DIMENSION_REMS = 3;
const SVG_DIMENSION_REMS = 1.5;

type SkillLogo = { name: string; logo: React.ComponentType<React.SVGProps<SVGSVGElement>> };
const SKILLS: SkillLogo[] = [
  { logo: SiDotnet, name: "ASP.NET & C#" },
  { logo: FaNodeJs, name: "Node.js" },
  { logo: BiLogoGoLang, name: "Golang" },
  { logo: RxFigmaLogo, name: "Figma" },
  { logo: IoLogoReact, name: "React" },
  { logo: TbBrandNextjs, name: "Next.js" },
  { logo: TbBrandTypescript, name: "TypeScript" },
  { logo: TbBrandRedux, name: "Redux" },
  { logo: IoLogoGithub, name: "GitHub" },
  { logo: VscAzureDevops, name: "DevOps" },
];

class CustomDefinition {
  x: string | number;
  constructor(def: CustomDefinition) {
    this.x = def.x;
  }
}

function SkillCarousel() {
  const [currentIcons, setCurrentIcons] = useState(SKILLS);
  const [isShifting, setIsShifting] = useState(true);
  const NextLogo = currentIcons[0].logo;

  return (
    <Stack alignItems="center">
      <AnimationBoundingBox>
        <motion.div
          key={isShifting ? "shift" : "stay"}
          style={{ display: "flex" }}
          animate={isShifting ? new CustomDefinition({ x: "-" + UNIT_DIMENSION_REMS + "rem" }) : new CustomDefinition({ x: 0 })}
          transition={isShifting ? { duration: 1 } : { duration: 0 }}
          onAnimationComplete={(definition: CustomDefinition) => {
            if (definition.x) {
              setIsShifting(false);
              setTimeout(() => setIsShifting(true), 1000);
              setCurrentIcons((icons) => [...icons.slice(1), icons[0]]);
            }
          }}
        >
          {currentIcons.map((skill) => (
            <AnimationUnit key={skill.name}>
              <skill.logo />
            </AnimationUnit>
          ))}
          {isShifting && <AnimationUnit><NextLogo /></AnimationUnit>}
        </motion.div>
      </AnimationBoundingBox>
      <Typography>{isShifting ? currentIcons[4].name : currentIcons[3].name}</Typography>
    </Stack>
  );
}

const OPACITY_WINDOW = 5;

const AnimationBoundingBox = styled("div")({
  overflow: "hidden",
  display: "flex",
  width: \`\${UNIT_DIMENSION_REMS * SKILLS.length}rem\`,
  maxWidth: \`\${UNIT_DIMENSION_REMS * 7}rem\`,
  maskImage: \`linear-gradient(to right, transparent, black \${(100 - OPACITY_WINDOW) / 2}%, black \${100 - (100 - OPACITY_WINDOW) / 2}%, transparent)\`,
  WebkitMaskImage: \`linear-gradient(to right, transparent, black \${(100 - OPACITY_WINDOW) / 2}%, black \${100 - (100 - OPACITY_WINDOW) / 2}%, transparent)\`,
});

const AnimationUnit = styled("div")(() => ({
  overflow: "hidden",
  display: "flex",
  width: \`\${UNIT_DIMENSION_REMS}rem\`,
  height: \`\${UNIT_DIMENSION_REMS}rem\`,
  minWidth: \`\${UNIT_DIMENSION_REMS}rem\`,
  minHeight: \`\${UNIT_DIMENSION_REMS}rem\`,
  maxWidth: \`\${UNIT_DIMENSION_REMS}rem\`,
  maxHeight: \`\${UNIT_DIMENSION_REMS}rem\`,
  justifyContent: "center",
  alignItems: "center",
  svg: {
    width: \`\${SVG_DIMENSION_REMS}rem\`,
    height: \`\${SVG_DIMENSION_REMS}rem\`,
  },
}));

export default SkillCarousel;
`;

export function SkillCarouselDemo() {
  return (
    <Stack sx={{ p: "1.5rem", gap: "1rem" }}>
      <Typography variant="h5">Skill Carousel Component</Typography>
      <Typography variant="body1">
        Seen below is a simple icon carousel built with <code>framer-motion</code> and{" "}
        <code>react-icons</code>.
      </Typography>

      <Box sx={{ m: "2rem 0 1rem 0", width: "min-content" }}>
        <SkillCarousel />
      </Box>

      <Stack>
        <Typography color="GrayText" variant="body1">
          Code Behind
        </Typography>
        <SBDCodeBlock code={code} />
      </Stack>
    </Stack>
  );
}
