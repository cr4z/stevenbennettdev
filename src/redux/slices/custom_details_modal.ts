import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IntroductoryModalState {
  open: boolean;
}

export const initialState: IntroductoryModalState = {
  open: false,
};

const introductoryModalSlice = createSlice({
  name: "introductoryModal",
  initialState,
  reducers: {
    setIntroductoryModelOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setIntroductoryModelOpen } = introductoryModalSlice.actions;
export const selectIntroductoryModalOpen = (state: RootState) => state.detailsModalReducer.open;

export default introductoryModalSlice.reducer;
