import React, { FC } from "react";
import { PaginationType } from "../../@types/types";
import s from "./Pagination.module.scss";

const Pagination: FC<PaginationType> = ({
  currentPage,
  pagesCount,
  setCurrentPage,
}) => {
  const onClickCurrentPage = (event: number) => {
    setCurrentPage(event);
    window.scrollTo({ top: 250 });
  };
  let page = [];
  for (let i = 1; i <= pagesCount; i++) {
    page.push(i);
  }

  return (
    <ul className={s.listPagination}>
      {page.map((i) => (
        <li
          className={currentPage === i ? s.active : undefined}
          key={i}
          onClick={() => onClickCurrentPage(i)}
        >
          {i}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
