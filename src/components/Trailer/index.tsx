import getVideoId from "get-video-id";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Slider from "react-slick";
import { IVideos } from "../../@types/types";
import { moviesAPI } from "../../api";
import s from "./Trailer.module.scss";

const Trailer: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {},
      },
      {
        breakpoint: 480,
        settings: {},
      },
    ],
  };

  const { id } = useParams();
  const [videos, setVideos] = useState<IVideos[]>();
  useEffect(() => {
    async function movieDetailsIdTrailer() {
      try {
        const videos = `${id}/videos`;
        const { data } = await moviesAPI.getMoviesId(videos);
        const { items } = data;
        setVideos(items);
      } catch (error) {
        console.log(error, "error");
      }
    }
    movieDetailsIdTrailer();
  }, [id]);
  return (
    <>
      {videos?.length === 0 ? (
        false
      ) : (
        <section className="section section-trailer">
          <div className="container container-movies">
            <div className={s.youtube}>
              <h2 className="heading">Трейлеры</h2>
              <div className={s.youtubeWrapper}>
                <Slider {...settings}>
                  {videos?.slice(0, 6).map((value, index = 1) =>
                    value.site === "YOUTUBE" ? (
                      <div key={index}>
                        <YouTube
                          key={index}
                          videoId={String(getVideoId(value.url).id)}
                          className={s.youtubeComponents}
                        />
                      </div>
                    ) : (
                      // </div>
                      <div key={index} className={s.linkWrapper}>
                        <a
                          className={s.link}
                          title={`Перейти к трейлеру ${index + 1}`}
                          href={value.url}
                        >
                          Перейти к трейлеру на кинопоиске
                        </a>
                      </div>
                    )
                  )}
                </Slider>
              </div>
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Trailer;
