import { Box, Container, Typography, useTheme } from "@mui/material";
import Input from "../../design_system/input";
import { useEffect, useMemo, useState } from "react";
import SBDButton from "../../design_system/button";
import { ModalDialog } from "../../components/modal_dialog";
import SBDFadeIn from "../../sbd_development_kit/components/fade_in";

function Showcase_SequentialFadeIn() {
  // -- States --
  const [amountCards, setAmountCards] = useState<number>(0);
  const [resetSwitch, setResetSwitch] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const [keyPrefix, setKeyPrefix] = useState<string>("");

  // -- UseEffects --
  // Unique Key Generator (in order to make a full refresh)
  useEffect(() => {
    setKeyPrefix(Date.now().toString());
  }, [resetSwitch]);
  // Initial values
  useEffect(() => {
    setAmountCards(15);
    setResetSwitch(true);
  }, []);

  // -- Generate Cards every reset --
  const Cards = useMemo(() => {
    const c: JSX.Element[] = [];
    for (let i = 0; i < amountCards; i++) {
      c.push(<Card key={`${keyPrefix}-${i}`} i={i} />);
    }
    return c;
  }, [resetSwitch]);

  // Regenerate Button Click Handler
  function handleRegenerateClick() {
    if (amountCards < 50 && amountCards > 0) {
      setResetSwitch(!resetSwitch);
    } else {
      setErrorText("Value must be between 1-49");
    }
  }

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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRegenerateClick();
            }}
          >
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Input
                value={amountCards}
                onChange={(e) => {
                  const input = +e.target.value;
                  setAmountCards(Number.isNaN(input) ? 0 : input);
                }}
                placeholder="Amount of cards..."
                sx={{ width: "20rem" }}
              />
              <SBDButton onClick={handleRegenerateClick}>Regenerate!</SBDButton>
            </Box>
          </form>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>{Cards}</Box>
      </Container>
    </>
  );
}

function Card(props: { i: number }) {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        width: "12rem",
      }}
    >
      <SBDFadeIn i={props.i} useScale={{ from: 0.9 }}>
        <Box
          sx={{
            padding: "1rem",
            boxShadow: "3",
            bgcolor: palette.grey[600],
            borderRadius: "6px",
          }}
        >
          <Typography>Item</Typography>
        </Box>
      </SBDFadeIn>
    </Box>
  );
}

export default Showcase_SequentialFadeIn;
