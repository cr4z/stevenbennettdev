import { ButtonBase } from "@mui/material";

export function Chip(props: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  const textAndIconColor = "#000B";

  return (
    <>
      <ButtonBase
        onClick={props.onClick}
        sx={{
          path: { fill: textAndIconColor },
          borderRadius: 99,
          padding: "2px 6px",
          display: "flex",
          alignItems: "center",
          gap: ".4rem",
          ":hover": {
            bgcolor: "#0001",
          },
          color: textAndIconColor,
        }}
      >
        {props.children}
      </ButtonBase>
    </>
  );
}
