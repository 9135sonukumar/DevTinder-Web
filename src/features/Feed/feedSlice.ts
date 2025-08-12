/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    saveFeed: (_, { payload }) => {
      return payload;
    },
    removeUserFromFeed: (state: any, { payload }) => {
      const newFeed = state?.filter((feed: any) => feed._id !== payload);
      return newFeed;
    },
  },
});

export const { saveFeed, removeUserFromFeed } = feedSlice.actions;

export default feedSlice.reducer;
