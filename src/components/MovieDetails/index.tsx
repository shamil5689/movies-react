import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { moviesAPI } from "../../api";
import Facts from "../Facts";
import s from "./MovieDetails.module.scss";
import Trailer from "../Trailer";
import SimilarMovies from "../SimilarMovies";
import { RotatingTriangles } from "react-loader-spinner";
import WatchingMovie from "../WatchingMovie";
import { IMovieDetails } from "../../@types/types";

const MovieDetails: FC = () => {
  const [data, setData] = useState<{
    kinopoiskId: number; // id
    nameRu: string; //название фильма
    description: string; // описание
    filmLength: number; //длина фильма
    logoUrl: string; // img
    posterUrl: string; // постер фильма
    raitingFilmCritics: number; //рейтинг фильма
    ratingKinopoisk: number; //рейтинг кинопоиска
    ratingImdb: number; //рейтинг imdb
    year: number; // год выпуска
    type: string; // тип фильм или сериал
    countries: IMovieDetails[]; // страна
    slogan: string; //слоган
  }>();
  const { id } = useParams();
  useEffect(() => {
    async function MovieDetailsId() {
      try {
        const { data } = await moviesAPI.getMoviesId(id as string);
        return setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    MovieDetailsId();
  }, [id]);
  const objectStyle = {
    margin: "0 auto",
    height: "50vh",
    width: "100%",
  };

  const checkForUndefined = data?.type !== undefined ? data.type : "";

  const getType = (type: string) => {
    if (type === "FILM") {
      return "Фильм";
    } else {
      return "Сериал";
    }
  };

  if (!data) {
    return (
      <RotatingTriangles
        colors={["#51E5FF", "#7DE2D1", "#FF7E6B"]}
        visible={true}
        height="100"
        width="100"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={objectStyle}
        wrapperClass="rotating-triangels-wrapper"
      />
    );
  }

  return (
    <>
      <section className={"section"}>
        <div className="container">
          <h2 className="heading">
            {getType(checkForUndefined)} {data?.nameRu} ({data?.year})
          </h2>
          <div className={s.wrapper}>
            <div className={s.moviesLeft}>
              <img src={data?.posterUrl} alt="poster" />
            </div>
            <div className={s.moviesWrapper}>
              <ul className={s.moviesList}>
                <li className={s.moviesItem}>
                  <span className={s.label}>слоган:</span>
                  <p className={s.description}>{data?.slogan}</p>
                </li>
                <li className={s.moviesItem}>
                  <div className={s.label}>Длительность:</div>
                  <p className={s.description}>{data?.filmLength} м.</p>
                </li>
                <li className={s.moviesItem}>
                  <span className={s.label}>Страна:</span>
                  <p className={s.description}>
                    {data?.countries.map((i) => i.country + " ")}
                  </p>
                </li>
                <li className={s.moviesItem}>
                  <span className={s.label}>рейтинг:</span>
                  <div className={s.description}>
                    <div className="raiting">
                      <div className="r r-kp" data-label="KP">
                        <span>{data.ratingKinopoisk}</span>
                      </div>
                      <div className="r r-imdb" data-label="IMDB">
                        <span>{data.ratingImdb}</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div className={s.descriptionWrapper}>
                <h3 className={s.heading}>Описание</h3>
                <p className={s.description}>{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Trailer />
      <WatchingMovie />
      <Facts />
      <SimilarMovies />
      <ins
        className="604c7625"
        data-key="47959b1c28094532b37e5577cf33cde9"
        data-cp-host="cJhaBIzyVr2u|2|https://movies-react-5a526.web.app"
      ></ins>
      <script async src="https://aj1907.online/63c0d7d8.js"></script>
    </>
  );
};
export default MovieDetails;
