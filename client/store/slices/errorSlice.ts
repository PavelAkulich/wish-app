import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { getErrorMessage } from "./../../utils/utils";

type ErrorState = {
  token?: string | null;
  isError?: boolean;
  anyErrorMessage?: string;
};

const initialState: ErrorState = {
  isError: false,
  anyErrorMessage: "",
  token: "",
};

export const erororSlice = createSlice({
  initialState,
  name: "error",
  reducers: {
    setErrorMessage: (state, action: PayloadAction<any>) => {
      state.anyErrorMessage = getErrorMessage(action.payload);
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log(action);
      return {
        ...state,
        token: action.payload.errorSlice.token,
      };
    },
  },
});

export default erororSlice.reducer;

export const { setErrorMessage, setToken } = erororSlice.actions;
