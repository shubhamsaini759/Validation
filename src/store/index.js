import { configureStore } from "@reduxjs/toolkit";
import { RegisterSlice } from "./RegisterSlice";

export const registerSliceActions = RegisterSlice.actions;

const Store = configureStore({
  reducer: {
    RegisterSliceReducer: RegisterSlice.reducer,
  },
});

export default Store;
