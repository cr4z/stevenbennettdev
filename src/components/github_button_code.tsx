import Button from "../design_system/button";
import { ICONS, IconRenderer } from "../design_system/icons";

export function ViewCodeOnGithubButton(props: { link: string }) {
  return (
    <Button
      sx={{
        paddingLeft: ".5rem",
        paddingRight: "1rem",
        gap: ".5rem",
        minWidth: "12rem",
        maxWidth: "12rem",
      }}
      larger
      variant="cta"
      href={props.link}
    >
      <IconRenderer widthHeight="2rem" i={<ICONS.GitHub />} />
      View Code on GitHub
    </Button>
  );
}
