import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getErrorMessage } from "./../../utils/utils";

type ErrorState = {
  token?: string | null;
  isError?: boolean;
  anyErrorMessage?: string;
}

const initialState: ErrorState = {
  isError: false,
  anyErrorMessage: "",
  token: "",
};

export const erororSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setErrorMessage: (state, action: PayloadAction<any>) => {
      state.anyErrorMessage = getErrorMessage(action.payload);
    },
    setToken: (state, action: PayloadAction<{ token: string | null }>) => {
      state.token = action.payload.token;
    },
  },
});

export default erororSlice.reducer;

export const { setErrorMessage, setToken } =
erororSlice.actions;
