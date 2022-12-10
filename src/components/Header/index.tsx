import { FC } from "react";
import s from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/store";
import { setCurrentPage } from "../../redux/slice/movieItemSlice";
import Search from "../Search";
import { setSearchValue } from "../../redux/slice/searchMovieSlice";

const Header: FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const onClickLInk = () => {
    setCurrentPage(1);
    dispatch(setSearchValue(""));
  };
  return (
    <header className={s.header}>
      <div className={`${s.headerContainer} ${"container"}`}>
        <Link className={s.logo} to={"/"} onClick={onClickLInk}>
          movie
        </Link>
        {location.pathname !== "/favorites" && (
          <Link className={s.favorites} to={"/favorites"}>
            Избранное
          </Link>
        )}
        {location.pathname === "/" && <Search />}
        {location.pathname === "/favorites" && (
          <Link className={s.link} to={"/"}>
            Назад
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
