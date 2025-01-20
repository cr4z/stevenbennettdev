import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isContactDialogOpen: false,
};

const contactDialogSlice = createSlice({
  name: "contactDialog",
  initialState,
  reducers: {
    setContactDialog: (state, action: PayloadAction<boolean>) => {
      state.isContactDialogOpen = action.payload;
    },
  },
});

export const { setContactDialog } = contactDialogSlice.actions;
export default contactDialogSlice.reducer;
