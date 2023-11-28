import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CustomDetailsModalState {
  open: boolean;
}

export const initialState: CustomDetailsModalState = {
  open: false,
};

const customDetailsModalSlice = createSlice({
  name: "customDetailsModal",
  initialState,
  reducers: {
    setCustomDetailsModelOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

export const { setCustomDetailsModelOpen } = customDetailsModalSlice.actions;
export const selectCustomDetailsOpen = (state: RootState) =>
  state.detailsModalReducer.open;

export default customDetailsModalSlice.reducer;
