import React, { FC } from "react";
import { useSelector } from "react-redux";
import MovieCart from "../components/MoviesSection/MoviesCart";
import { favoriteSelect } from "../redux/slice/favoriteSlice";
import NotFound from "../components/NotFound";

const Favorites: FC = () => {
  const { moviItem } = useSelector(favoriteSelect);
  return (
    <>
      {moviItem.length === 0 ? (
        <NotFound />
      ) : (
        <div className="container">
          <div className="list">
            {moviItem.map((i) => (
              <MovieCart
                key={i.filmId}
                filmId={i.filmId}
                nameRu={i.nameRu}
                posterUrl={i.posterUrl}
                rating={i.rating}
                genres={i.genres}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Favorites;
