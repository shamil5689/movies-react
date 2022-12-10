import React, { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useParams } from "react-router-dom";
import { moviesAPI } from "../../api";
import style from "./SimilarMovies.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MovieCart from "../MoviesSection/MoviesCart";

const SimilarMovies: FC = () => {
  const [data, setData] =
    useState<{ nameRu: string; posterUrl: string; filmId: number }[]>();
  const { id } = useParams();
  useEffect(() => {
    async function movieDetailsIdTrailer() {
      try {
        const movies = `${id}/similars`;
        const { data } = await moviesAPI.getMoviesId(movies);
        const { items } = data;
        setData(items);
      } catch (error) {
        console.log(error, "error");
      }
    }
    movieDetailsIdTrailer();
  }, [id]);
  return (
    <>
      {data?.length === 0 ? (
        false
      ) : (
        <section className="section section-similar">
          <div className="container">
            <h2 className="heading">Похожие фильмы</h2>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <ul className={style.listMovie}>
                {data?.map((movie) => (
                  <SwiperSlide key={movie.filmId}>
                    <MovieCart
                      filmId={movie.filmId}
                      nameRu={movie.nameRu}
                      posterUrl={movie.posterUrl}
                      rating={""}
                      genres={[]}
                    />
                  </SwiperSlide>
                ))}
              </ul>
            </Swiper>
          </div>
        </section>
      )}
    </>
  );
};

export default SimilarMovies;
