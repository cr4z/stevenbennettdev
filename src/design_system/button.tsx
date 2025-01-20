import { ButtonBase, useTheme, SxProps, Box } from "@mui/material";
import React from "react";

function SBDButton(props: {
  variant?: "unselected" | "selected" | "contained" | "cta";
  onClick?: () => void;
  children?: React.ReactNode;
  sx?: SxProps;
  larger?: boolean;
  href?: string;
  useIcon?: React.ReactNode;
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
        height: props.larger ? "45px" : "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
        fontFamily: "Inter",
        fontWeight: "400",
        fontSize: "12px",
        color: "white",

        // Handle variations
        ...(variant === "selected" && {
          bgcolor: palette.primary.dark,
          color: palette.primary.light,
        }),

        ...(variant === "cta" && {
          bgcolor: palette.primary.main,
          ":hover": { bgcolor: palette.primary.main + "E0" },
        }),

        ...(variant === "contained" && {
          bgcolor: palette.grey[800],
          ":hover": { bgcolor: palette.grey[700] },
        }),

        // Add SX overrides
        ...props.sx,
      }}
    >
      {props.useIcon && (
        <Box
          sx={{
            ml: "-3px",
            mr: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            svg: { minWidth: "1.3rem", minHeight: "1.3rem" },
          }}
        >
          {props.useIcon}
        </Box>
      )}
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

export default SBDButton;
