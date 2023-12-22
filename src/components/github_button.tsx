import SBDButton from "../design_system/button";
import { ICONS, IconRenderer } from "../design_system/icons";

export function ViewCodeOnGithubButton(props: { grey?: boolean, href?: string }) {
  return (
    <SBDButton
      sx={{
        paddingLeft: ".5rem",
        paddingRight: "1rem",
        gap: ".5rem",
        minWidth: "12rem",
        maxWidth: "12rem",
      }}
      larger
      variant={props.grey ? "contained" : "cta"}
      href={props.href ?? "https://github.com/cr4z"}
    >
      <IconRenderer widthHeight="2rem" i={<ICONS.GitHub />} />
      View Code on GitHub
    </SBDButton>
  );
}
