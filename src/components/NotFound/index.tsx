import React, { FC } from "react";
import s from "./NotFound.module.scss";

const NotFound: FC = () => {
  return (
    <section className={s.root}>
      <div className="container">
        <span className={s.description}>К сожалению, ничего не найдено 😞</span>
      </div>
    </section>
  );
};

export default NotFound;
