import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialSellerStateType,
  SellerCategoryType,
} from "../../shared/types/slices";

const initialSellerState: InitialSellerStateType = {
  sellerCategories: [],
  sellerLoading: false,
  sellerError: null,
  sellerMessage: "",
};
export const sellerSlice = createSlice({
  name: "sellerSlice",
  initialState: initialSellerState,
  reducers: {
    updateCategories: (state, action: PayloadAction<SellerCategoryType[]>) => {
      state.sellerCategories = action.payload;
    },
    removeCategory: (state, action: PayloadAction<number>) => {
      state.sellerCategories?.splice(action.payload, 1);
    },
  },
});

export const { updateCategories, removeCategory } = sellerSlice.actions;
export default sellerSlice.reducer;
