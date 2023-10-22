import { Box } from "@mui/material";

export function FancyDivider(props: { bgcolor: any }) {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          width: "100%",
          top: "-1rem"
        }}
      >
        <Box
          sx={{
            zIndex: -1,
            bgcolor: props.bgcolor,
            width: "100%",
            height: "30px",
          }}
        />
        <Box
          sx={{
            zIndex: -2,
            borderRadius: "100%",
            boxShadow: "rgb(0, 0, 0, .4) 0px 20px 15px 5px",
            height: "5px",
            width: "95%",
            mt: "-6%",
          }}
        />
      </Box>
    </Box>
  );
}
