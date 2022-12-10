import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchInitialType } from "../../@types/types";
import { RootState } from "../store/store";

const initialState: SearchInitialType = {
  searchValue: "",
};

export const searchMovieSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const selectSearchValue = (state: RootState) => state.search;

export const { setSearchValue } = searchMovieSlice.actions;

export default searchMovieSlice.reducer;
