import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import MoviesSection from "../components/MoviesSection";
import { fetchMovie, selectMovie } from "../redux/slice/movieItemSlice";
import { selectSearchValue } from "../redux/slice/searchMovieSlice";
import { useAppDispatch } from "../redux/store/store";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const { currentPage } = useSelector(selectMovie);
  const { searchValue } = useSelector(selectSearchValue);
  const page = currentPage ? `top?page=${currentPage}` : "";
  const search = searchValue ? `search-by-keyword?keyword=${searchValue}&` : "";

  useEffect(() => {
    async function fetchMovies() {
      dispatch(fetchMovie({ page, search }));
    }
    fetchMovies();
  }, [dispatch, page, search]);

  return (
    <>
      <main className="main">
        <MoviesSection />
      </main>
    </>
  );
};

export default Home;
