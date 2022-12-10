import React, { FC, useEffect, useState } from "react";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { moviesAPI } from "../../api";
import s from "./Facts.module.scss";
import { IFacts } from "../../@types/types";

const Facts: FC = () => {
  const [fact, setFact] = useState<IFacts[]>();
  const { id } = useParams();
  useEffect(() => {
    async function getMoviesFacts() {
      try {
        const facts = `${id}/facts`;
        const { data } = await moviesAPI.getMoviesId(facts);
        const { items } = data;
        return setFact(items);
      } catch (error) {
        console.log(error);
      }
    }
    getMoviesFacts();
  }, [id]);

  return (
    <>
      {fact?.length === 0 ? (
        false
      ) : (
        <section className="section section-fact">
          <div className="container">
            <h2 className="heading">а знаете ли вы, что...</h2>
            <ul className={s.root}>
              {fact?.map((key, i) => (
                <li key={i}>{parse(key.text.replaceAll(/<a.*?>/g, ""))}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Facts;
