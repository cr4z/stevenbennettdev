import { ButtonBase, useTheme, SxProps } from "@mui/material";
import React from "react";

function Button(props: {
  variant?: "unselected" | "selected" | "contained" | "call to action";
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

        ...(variant === "call to action" && {
          bgcolor: palette.primary.main,
        }),

        ...(variant === "contained" && {
          bgcolor: palette.grey[500],
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
