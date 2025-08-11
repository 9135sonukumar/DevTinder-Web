import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    saveFeed: (_, { payload }) => {
      return payload;
    },
  },
});

export const { saveFeed } = feedSlice.actions;

export default feedSlice.reducer;
