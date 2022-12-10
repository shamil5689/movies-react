import { MovieIS, myData } from "./../../@types/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { moviesAPI } from "../../api";
import { RootState } from "../store/store";

const initialState: MovieIS = {
  movie: [],
  pagesCount: 1,
  currentPage: 1,
  searchFilmsCountResult: 0,
  status: "pending",
  films: undefined,
};

export const fetchMovie = createAsyncThunk(
  "movie/fetchMovie",
  async (params: myData) => {
    const { page, search } = params;
    const { data } = await moviesAPI.getMovies(search, page);
    return data;
  }
);

export const movieItemSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.movie = [];
        state.status = "pending";
      })
      .addCase(
        fetchMovie.fulfilled,
        (state, action: PayloadAction<MovieIS>) => {
          state.movie = action.payload.films;
          state.pagesCount = action.payload.pagesCount;
          state.status = "fulfilled";
          console.log("загрузилось");
        }
      )
      .addCase(fetchMovie.rejected, (state) => {
        state.movie = [];
        state.status = "rejected";
      });
  },
});

export const selectMovie = (state: RootState) => state.movie;

export const { setCurrentPage } = movieItemSlice.actions;

export default movieItemSlice.reducer;
