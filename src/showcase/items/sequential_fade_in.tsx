import { Box, Container, Typography, useTheme } from "@mui/material";
import Input from "../../design_system/input";
import { useEffect, useMemo, useState } from "react";
import Button from "../../design_system/button";
import FadeIn from "../../fortitude/components-dev/FadeIn";
import { ModalDialog } from "../../components/modal_dialog";

function Showcase_SequentialFadeIn() {
  // States
  const [amountCards, setAmountCards] = useState<number>(0);
  const [resetSwitch, setResetSwitch] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const [keyPrefix, setKeyPrefix] = useState<string>("");
  useEffect(() => {
    setKeyPrefix(Date.now().toString());
  }, [resetSwitch]);

  // Memoized Cards
  const Cards = useMemo(() => {
    const c: JSX.Element[] = [];
    for (let i = 0; i < amountCards; i++) {
      c.push(<Card key={`${keyPrefix}-${i}`} i={i} />);
    }

    return c;
  }, [resetSwitch]);

  return (
    <>
      {/* Modals */}
      <ModalDialog
        open={errorText !== ""}
        onClose={() => setErrorText("")}
        title="Hm, that doesn't seem right"
      >
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography>{errorText}</Typography>
        </Box>
      </ModalDialog>
      {/* DOM Hierarchy */}
      <Container>
        <Box my="2rem">
          <Typography>Want to play around with the effect? Set the amount of cards here:</Typography>
          <br />
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Input
              onChange={(e) => setAmountCards(+e.target.value)}
              placeholder="Amount of cards..."
              sx={{ width: "20rem" }}
            />
            <Button
              onClick={() => {
                if (amountCards < 90 && amountCards > 0) {
                  setResetSwitch(!resetSwitch);
                } else {
                  setErrorText("Value is either too great or invalid, please re-enter");
                }
              }}
            >
              Reset Cards
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>{Cards}</Box>
      </Container>
    </>
  );
}

function Card(props: { i: number }) {
  const { palette } = useTheme();

  return (
    <FadeIn i={props.i}>
      <Box
        sx={{
          padding: "1rem",
          boxShadow: "3",
          bgcolor: palette.grey[600],
          width: "12rem",
          borderRadius: "6px",
        }}
      >
        <Typography>Item</Typography>
      </Box>
    </FadeIn>
  );
}

export default Showcase_SequentialFadeIn;
