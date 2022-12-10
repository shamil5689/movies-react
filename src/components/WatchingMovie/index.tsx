import React, { FC, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { RotatingTriangles } from "react-loader-spinner";
import s from "./Watching.module.scss";

const WatchingMovie: FC = () => {
  const { id } = useParams();
  const [active, setActive] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  console.log(iframeRef.current?.src);
  const objectStyle = {
    position: "absolute",
    display: "flex",
    margin: "auto",
    height: "100%",
    zIndex: "1",
  };

  return (
    <>
      <section className="section section-watching">
        <div className="container container-movies">
          <div className={s.watching}>
            <h2 className="heading">Просмотр фильма</h2>
            <div className={s.watchingWrapper}>
              {active === true ? (
                <RotatingTriangles
                  colors={["#51E5FF", "#7DE2D1", "#FF7E6B"]}
                  visible={true}
                  height="50%"
                  width="100%"
                  ariaLabel="rotating-triangels-loading"
                  wrapperStyle={objectStyle}
                  wrapperClass="rotating-triangels-wrapper"
                />
              ) : null}
              <iframe
                className={s.iframe}
                src={`https://11.annacdn.cc/cJhaBIzyVr2u?kp_id=${id}`}
                width="640"
                height="360"
                title="movie"
                allowFullScreen={true}
                frameBorder="0"
                ref={iframeRef}
                onLoad={(e) => {
                  console.log(e, "загрузилось");
                  setActive(false);
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WatchingMovie;
