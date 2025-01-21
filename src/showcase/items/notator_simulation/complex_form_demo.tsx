import { Box, ThemeProvider, Typography, useTheme } from "@mui/material";
import { useFormTools } from "./tools/use_form_tools";
import { FormToolsProvider } from "./tools/modules";
import { showcaseWhiteTheme } from "../../../design_system/themes/showcase_white_theme";
import { LeftWidget } from "./widgets/left/left";
import { HeaderWidget } from "./widgets/header";
import { useBreakpointHelper } from "../../../design_system/hooks/useBreakpointHelper";
import { ComplexFormModal } from "./modals/modal";
import { RightWidget } from "./widgets/right";
import { useAppDispatch } from "../../../redux/hooks";
import { setIntroductoryModelOpen } from "../../../redux/slices/custom_details_modal";
import { useEffect, useState } from "react";
import SBDButton from "../../../design_system/button";

export default function ComplexFormDemonstrationContextWrapper() {
  return (
    <ThemeProvider theme={showcaseWhiteTheme}>
      <FormToolsProvider>
        <ComplexFormDemonstration />
      </FormToolsProvider>
    </ThemeProvider>
  );
}

function ComplexFormDemonstration() {
  const { palette } = useTheme();
  const { draftReport } = useFormTools();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIntroductoryModelOpen(true));
  }, []);

  return (
    <>
      {draftReport && (
        <Box
          className="complex-form-selection-colors"
          sx={{
            bgcolor: palette.background.default,
            width: "100%",
            height: "100%",
            padding: "16px",
            position: "relative",

            maxWidth: "100%",
            overflowX: "auto",
            overflowY: "hidden",
          }}
        >
          <Box
            sx={{
              minWidth: "72rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <MobileModal />

            <HeaderWidget />
            <Box
              sx={{
                height: "calc(100vh - 24rem)",
                display: "flex",
                gap: "1rem",
              }}
            >
              <LeftWidget />
              <RightWidget />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

function MobileModal() {
  const bph = useBreakpointHelper();
  const [show, setShow] = useState<boolean>(!bph.isGreaterThanEqualTo(800));

  return (
    <ComplexFormModal
      open={show}
      onClose={() => {
        setShow(false);
      }}
      minWidth="md"
      sx={{ p: "1rem", display: "flex", flexDirection: "column", gap: ".5rem" }}
    >
      <Typography variant="h5" sx={{ color: "#000D" }}>
        Notice
      </Typography>
      <Typography sx={{ color: "#000D" }}>
        This project was built specifically for desktop. While it's accessible on mobile, please note the user
        experience won't be as optimal.
      </Typography>
      <SBDButton
        onClick={() => {
          setShow(false);
        }}
        sx={{ mt: "1rem" }}
        variant="cta"
      >
        Got it!
      </SBDButton>
    </ComplexFormModal>
  );
}
