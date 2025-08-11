import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import authReducer from "../features/Auth/authSlice";
import feedReducer from "../features/Feed/feedSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    feed: feedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
