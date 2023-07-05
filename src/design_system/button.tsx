import { ButtonBase, useTheme, SxProps } from "@mui/material";
import React from "react";

function Button(props: {
  variant?: "unselected" | "selected" | "contained" | "call to action";
  onClick?: () => void;
  children?: React.ReactNode;
  sx?: SxProps;
}) {
  const { palette } = useTheme();
  const variant = props.variant ?? "contained";

  return (
    <ButtonBase
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
      className="noselect"
      sx={{
        minWidth: "81px",
        paddingX: "1rem",
        height: "35px",
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
}

export default Button;
