export type GenresType = {
  genre: string[];
};

export type MovieCartType = {
  filmId: number;
  nameRu: string;
  posterUrl: string;
  rating: string;
  genres: GenresType[];
};

export interface MovieIS {
  films: any;
  movie: MovieCartType[];
  pagesCount: number;
  currentPage: number;
  searchFilmsCountResult: number;
  status: "pending" | "fulfilled" | "rejected";
}

export type PaginationType = {
  currentPage: number;
  pagesCount: number;
  setCurrentPage: (i: number) => void;
};

export type myData = {
  page: string;
  search: string;
};

export type IVideos = {
  url: string;
  name: string;
  site: string;
};
export type IFacts = {
  title: string;
  text: string;
  spoiler: boolean;
};
export type IMovieDetails = {
  country: string[];
};
export type FavoriteMovieType = {
  moviItem: MovieCartType[];
};
export type SearchInitialType = {
  searchValue: string;
};
