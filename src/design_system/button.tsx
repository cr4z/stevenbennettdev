import { ButtonBase, useTheme } from "@mui/material";

function Button(props: {
  label: string;
  variant?: "unselected" | "selected" | "contained";
  onClick?: () => void;
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
        width: "81px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 999,
        fontFamily: "Inter",
        fontWeight: "bold",
        fontSize: "12px",
        color: "white",

        ...(variant === "selected" && {
          bgcolor: palette.primary.dark,
          color: palette.primary.light,
        }),

        ...(variant === "contained" && {
          bgcolor: palette.primary.main,
        }),
      }}
    >
      {props.label}
    </ButtonBase>
  );
}

export default Button;
