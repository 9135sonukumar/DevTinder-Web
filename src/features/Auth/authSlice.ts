import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  _id: string;
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  photoUrl: string;
  skills: string[];
  about: string;
}

const initialState: AuthState = {
  _id: "",
  firstName: "",
  lastName: "",
  emailId: "",
  password: "",
  photoUrl: "",
  skills: [],
  about: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (_, { payload }) => {
      return payload;
    },
    resetUser: () => {
      return initialState;
    },
  },
});

export const { saveUser, resetUser } = authSlice.actions;

export default authSlice.reducer;
