import { Container, Typography } from "@mui/material";

function Page404() {
  return (
    <>
      <Container sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Typography className="noselect" sx={{ mt: "8rem", mb: "2rem", fontSize: "10rem" }} variant="h1">
          404
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Hm, I couldn't find this page. If you believe this to be an error, please reach out through the{" "}
          <strong>Contact</strong> tab!
        </Typography>
      </Container>
    </>
  );
}

export default Page404;
