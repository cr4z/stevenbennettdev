import { ButtonBase, useTheme, SxProps } from "@mui/material";
import React from "react";
import { shadeColor } from "../utils/shadeColor";

function Button(props: {
  variant?: "unselected" | "selected" | "contained" | "cta";
  onClick?: () => void;
  children?: React.ReactNode;
  sx?: SxProps;
  larger?: boolean;
  href?: string;
}) {
  const { palette } = useTheme();
  const variant = props.variant ?? "contained";

  const button = (
    <ButtonBase
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
      sx={{
        minWidth: "81px",
        paddingX: "1rem",
        height: props.larger ? "45px" : "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: "12px",
        color: "white",

        // Handle variations
        ...(variant === "selected" && {
          bgcolor: palette.primary.dark,
          color: palette.primary.light,
        }),

        ...(variant === "cta" && {
          bgcolor: palette.primary.main,
          ":hover": { bgcolor: shadeColor(palette.primary.main, 8) },
        }),

        ...(variant === "contained" && {
          bgcolor: palette.grey[500],
          ":hover": { bgcolor: palette.grey[400] },
        }),

        // Add SX overrides
        ...props.sx,
      }}
    >
      {props.children}
    </ButtonBase>
  );

  return props.href ? (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", borderRadius: 999 }}
    >
      {button}
    </a>
  ) : (
    button
  );
}

export default Button;
