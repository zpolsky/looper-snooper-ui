import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentUser {
  user: string | null;
  isConnected: boolean;
}

let initialState: CurrentUser = {
  user: localStorage.getItem("username"),
  isConnected: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.user = action.payload;
      localStorage.setItem("username", state.user);
    },
    logout(state) {
      state.user = null;
    },
    setIsConnected(state, action: PayloadAction<boolean>) {
      state.isConnected = action.payload;
    },
  },
});

export const { login, logout, setIsConnected } = userSlice.actions;

export default userSlice.reducer;
