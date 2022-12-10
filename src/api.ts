import axios from "axios";

const instanse = axios.create({
  baseURL: "https://kinopoiskapiunofficial.tech/api/",
  headers: {
    // c9f1adeb-cd82-42ba-bdd8-b745197f9045
    //ba6ad19b-8943-4a6f-9ca0-49e0f297a73a
    "X-API-KEY": "ba6ad19b-8943-4a6f-9ca0-49e0f297a73a",
    "Content-Type": "application/json",
  },
});

export const moviesAPI = {
  getMovies(search: string, page: string) {
    return instanse.get(`v2.1/films/${search}${page}`);
  },
  getMoviesId(id: string) {
    return instanse.get(`v2.2/films/${id}`);
  },
};
