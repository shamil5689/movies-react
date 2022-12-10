import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteMovieType, MovieCartType } from "../../@types/types";
import { RootState } from "../store/store";

const initialState: FavoriteMovieType = {
  moviItem: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addingToFavorites(state, action: PayloadAction<MovieCartType>) {
      state.moviItem = state.moviItem.filter(
        (obj) => obj.filmId !== action.payload.filmId
      );
      state.moviItem.push({ ...action.payload });
    },
    removeToFavorites(state, action: PayloadAction<Number>) {
      state.moviItem = state.moviItem.filter(
        (obj) => obj.filmId !== action.payload
      );
    },
  },
});
export const favoriteSelect = (state: RootState) => state.favorite;
export const { addingToFavorites, removeToFavorites } = favoriteSlice.actions;

export default favoriteSlice.reducer;
