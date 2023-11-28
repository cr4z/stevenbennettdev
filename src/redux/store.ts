import { configureStore } from "@reduxjs/toolkit";
import detailsModalReducer from "./slices/custom_details_modal";

export const store = configureStore({
  reducer: {
    detailsModalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
