import { Box, SxProps } from "@mui/material";
import { BiLogoTypescript, BiLogoRedux, BiLogoGithub } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFigma } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlinePhone,
  AiFillTag,
  AiFillHtml5,
} from "react-icons/ai";
import { FaCaretRight } from "react-icons/fa";
import { RiInformationLine } from "react-icons/ri";
import CaretUp from "../svgs/caret.svg";

export const ICONS = {
  React: FaReact,
  Typescript: BiLogoTypescript,
  Redux: BiLogoRedux,
  GitHub: BiLogoGithub,
  Nextjs: TbBrandNextjs,
  Figma: SiFigma,
  DevOps: VscAzureDevops,
  Phone: AiOutlinePhone,
  Email: AiOutlineMail,
  LinkedIn: AiOutlineLinkedin,
  PriceTag: AiFillTag,
  HTML: AiFillHtml5,
  Caret: FaCaretRight,
  Info: RiInformationLine,
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
  sx?: SxProps;
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
        ...props.sx,
      }}
    >
      {props.i}
    </Box>
  );
}

export function SBDCaret(props: { point: "up" | "right" | "down" | "left" }) {
  const point = props.point ?? "up";
  const deg = getDeg();

  return (
    <Box
      sx={{ transform: `rotate(${deg})`, width: "1rem" }}
      component="img"
      src={CaretUp}
    />
  );

  function getDeg() {
    switch (point) {
      case "up":
        return "0deg";
      case "right":
        return "90deg";
      case "down":
        return "180deg";
      case "left":
        return "270deg";
    }
  }
}
