import React, { FC } from "react";
import { useSnackbar } from "notistack";
import { Link, useLocation } from "react-router-dom";
import { MovieCartType } from "../../../@types/types";
import {
  addingToFavorites,
  removeToFavorites,
} from "../../../redux/slice/favoriteSlice";
import { useAppDispatch } from "../../../redux/store/store";
import s from "../MoviesSection.module.scss";

const MovieCart: FC<MovieCartType> = ({
  filmId,
  nameRu,
  posterUrl,
  rating,
  genres,
}) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { enqueueSnackbar } = useSnackbar();
  const clickLink = () => {
    window.scrollTo({ top: 0 });
  };

  const onChangeButton = () => {
    enqueueSnackbar("Добавлено в избранное");
    dispatch(
      addingToFavorites({
        filmId,
        nameRu,
        posterUrl,
        rating,
        genres,
      })
    );
  };
  const RemoveMovie = () => {
    dispatch(removeToFavorites(filmId));
  };
  const setRaiting = (rating: number) => {
    if (rating >= 7) {
      return "green";
    }
    if (rating <= 6) {
      return "red";
    }
    if (rating < 7) {
      return "orange";
    }
  };

  return (
    <li className={s.listItem} key={filmId}>
      <div className={s.listItemWrapper}>
        <Link
          to={`/movie/${filmId}`}
          onClick={() => clickLink()}
          className={s.listItemWrapper}
        >
          <img className={s.img} src={posterUrl} alt="img-movies" />
          <div className={s.cursor}></div>
        </Link>
      </div>
      <div className={s.listInfo}>
        <h4 className={s.listHeading}>{nameRu}</h4>
        {location.pathname === "/" && (
          <>
            <p className={s.listItemGenre}>
              {genres.map((i: { genre: string[] }) => ` ${i.genre}`)}
            </p>
            <div
              className={s.listItemRaiting + " " + setRaiting(Number(rating))}
            >
              {rating}
            </div>
          </>
        )}
        {location.pathname !== "/favorites" && (
          <button className={s.listItemFavorites}>
            <svg
              onClick={onChangeButton}
              className="movies-svg"
              data-tooltip="Добавить в избранное"
              width="35px"
              height="35px"
              viewBox="0 0 52 52"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M43.62,52a2,2,0,0,1-1.09-.33L26,40.83,9.47,51.67a2,2,0,0,1-2,.09,2,2,0,0,1-1-1.76V2a2,2,0,0,1,2-2H43.62a2,2,0,0,1,2,2V50a2,2,0,0,1-1,1.76A2,2,0,0,1,43.62,52ZM26,36.44a2.1,2.1,0,0,1,1.1.32L41.62,46.3V4H10.38V46.3L24.9,36.76A2.1,2.1,0,0,1,26,36.44Z" />
            </svg>
          </button>
        )}
        {location.pathname === "/favorites" && (
          <button className={"button"} onClick={() => RemoveMovie()}>
            x
          </button>
        )}
      </div>
    </li>
  );
};

export default MovieCart;
