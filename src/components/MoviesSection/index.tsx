import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectMovie, setCurrentPage } from "../../redux/slice/movieItemSlice";
import { selectSearchValue } from "../../redux/slice/searchMovieSlice";
import { useAppDispatch } from "../../redux/store/store";
import NotFound from "../NotFound";
import Pagination from "../Pagination";
import MovieCart from "./MoviesCart";
import Skeleton from "./Skeleton";
// import { MagnifyingGlass } from "react-loader-spinner";

const MoviesSection: FC = () => {
  const { movie, status, currentPage, pagesCount } = useSelector(selectMovie);
  const { searchValue } = useSelector(selectSearchValue);
  const dispatch = useAppDispatch();

  if (searchValue) {
    if (movie.length === 0) {
      return <NotFound />;
    }
  }

  return (
    <section className="section">
      <div className="container">
        {searchValue ? (
          <h2 className="heading">результаты поиска</h2>
        ) : (
          <h2 className="heading">топ лучших фильмов</h2>
        )}

        <ul className={"list"}>
          {status === "pending"
            ? [...new Array(20)].map((_, i) => <Skeleton key={i} />)
            : movie.map((obj) => <MovieCart key={obj.filmId} {...obj} />)}
        </ul>
        <Pagination
          setCurrentPage={(value) => dispatch(setCurrentPage(value))}
          pagesCount={pagesCount}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
};

export default MoviesSection;
