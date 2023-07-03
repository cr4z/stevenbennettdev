import { BiLogoReact, BiLogoTypescript, BiLogoRedux, BiLogoGithub } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFigma } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { Box } from "@mui/material";

export const ICONS = {
  React: BiLogoReact,
  Typescript: BiLogoTypescript,
  Redux: BiLogoRedux,
  Github: BiLogoGithub,
  Nextjs: TbBrandNextjs,
  Figma: SiFigma,
  DevOps: VscAzureDevops,
};

interface IconRendererProps {
  color?: string;
  widthHeight: string;
  i: JSX.Element;
  left?: boolean;
  right?: boolean;
  up?: boolean;
  down?: boolean;
  strokeWidth?: string;
}
export function IconRenderer(props: IconRendererProps) {
  const size = props.widthHeight;
  const dir = props.down ? 90 : props.left ? 180 : props.up ? 270 : 0;

  return (
    <Box
      sx={{
        display: "flex" + "!important",
        justifyContent: "center" + "!important",
        alignItems: "center" + "!important",
        minWidth: size + "!important",
        minHeight: size + "!important",
        transform: `rotate(${dir}deg)` + "!important",
        svg: {
          strokeWidth: props.strokeWidth,
          width: size + "!important",
          height: size + "!important",
          color: props.color,
        },
        maxWidth: size + "!important",
        maxHeight: size + "!important",
      }}
    >
      {props.i}
    </Box>
  );
}
