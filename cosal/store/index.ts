import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import sellerReducer from "./slices/seller";

const rootReducer = {
  seller: sellerReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;