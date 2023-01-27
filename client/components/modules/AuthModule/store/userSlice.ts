import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  _id?: string | null;
  fullName?: string | null;
  email?: string | null;
  avatarUrl?: string | null;
  description?: string | null;
};

const initialState: UserState = {
  fullName: null,
  email: null,
  _id: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<UserState>) => {
      state._id = action.payload._id;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      state.avatarUrl = action.payload.avatarUrl;
      state.description = action.payload.description;
    },
  },
});

export default authSlice.reducer;

export const { logout, setUser } = authSlice.actions;
