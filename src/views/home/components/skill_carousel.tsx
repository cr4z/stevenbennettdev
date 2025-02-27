import { IoLogoReact } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import { IoLogoGithub } from "react-icons/io";
import { RxFigmaLogo } from "react-icons/rx";
import { BiLogoGoLang } from "react-icons/bi";
import { SiDotnet } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { Stack, styled, Typography } from "@mui/material";

/**
 * Defines the dimension of each unit, and the overall size of the bounding box.
 */
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

/**
 * A carousel that cycles through the given skills.
 */
function SkillCarousel() {
  const [currentIcons, setCurrentIcons] = useState(SKILLS);
  const [isShifting, setIsShifting] = useState(true);

  const NextLogo = currentIcons[0].logo;

  return (
    <Stack
      alignItems="center"
      // border={"1px solid green"}
    >
      <AnimationBoundingBox>
        <motion.div
          key={isShifting ? "shift" : "stay"} // This ensures a rerender with fresh state (AKA: prevents jitters) // NOTE: Might just need to subscribe to a different animation callback, will look into if deciding to modify
          style={{ display: "flex" }}
          animate={
            isShifting
              ? new CustomDefinition({ x: "-" + UNIT_DIMENSION_REMS + "rem" })
              : new CustomDefinition({ x: 0 })
          }
          transition={isShifting ? { duration: 1 } : { duration: 0 }}
          onAnimationComplete={(definition: CustomDefinition) => {
            if (definition.x) {
              setIsShifting(false);
              setTimeout(() => setIsShifting(true), 1000);
              setCurrentIcons((icons) => [...icons.slice(1), icons[0]]);
            }
          }}
        >
          {currentIcons.map((skill) => {
            return (
              <AnimationUnit key={skill.name}>
                <skill.logo />
              </AnimationUnit>
            );
          })}
          {isShifting && (
            <AnimationUnit>
              <NextLogo />
            </AnimationUnit>
          )}
        </motion.div>
      </AnimationBoundingBox>
      <Typography>{isShifting ? currentIcons[4].name : currentIcons[3].name}</Typography>
    </Stack>
  );
}

const OPACITY_WINDOW = 5; // Only the center 5% is opaque

const AnimationBoundingBox = styled("div")({
  overflow: "hidden",
  display: "flex",
  width: `${UNIT_DIMENSION_REMS * SKILLS.length}rem`,
  maxWidth: `${UNIT_DIMENSION_REMS * 7}rem`, // Note if intending to reuse logic: Will not support less than 7 items
  maskImage: `linear-gradient(
      to right, 
      transparent, 
      black ${(100 - OPACITY_WINDOW) / 2}%, 
      black ${100 - (100 - OPACITY_WINDOW) / 2}%, 
      transparent
    )`,
  WebkitMaskImage: `linear-gradient(
      to right, 
      transparent, 
      black ${(100 - OPACITY_WINDOW) / 2}%, 
      black ${100 - (100 - OPACITY_WINDOW) / 2}%, 
      transparent
    )`,
  // border: "1px solid red",
});

const AnimationUnit = styled("div")(() => ({
  overflow: "hidden",
  display: "flex",
  width: `${UNIT_DIMENSION_REMS}rem`,
  height: `${UNIT_DIMENSION_REMS}rem`,
  minWidth: `${UNIT_DIMENSION_REMS}rem`,
  minHeight: `${UNIT_DIMENSION_REMS}rem`,
  maxWidth: `${UNIT_DIMENSION_REMS}rem`,
  maxHeight: `${UNIT_DIMENSION_REMS}rem`,
  justifyContent: "center",
  alignItems: "center",
  svg: {
    width: `${SVG_DIMENSION_REMS}rem`,
    height: `${SVG_DIMENSION_REMS}rem`,
  },

  // border: "1px solid blue",
}));

export default SkillCarousel;
