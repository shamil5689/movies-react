import React, { FC, useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/slice/searchMovieSlice";
import { useAppDispatch } from "../../redux/store/store";
import s from "../Header/Header.module.scss";
import { useSearchParams } from "react-router-dom";

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
    searchHandler(event);
  };
  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let search: any;
    if (event.target.value) {
      search = {
        keyword: event.target.value,
      };
    } else {
      search = undefined;
    }

    setSearchParams(search, { replace: true });
  };
  const onButtonClick = () => {
    setValue("");
    dispatch(setSearchValue(""));
    inputRef.current?.focus();
    setSearchParams("");
  };
  const updateSearchValue = useCallback(
    debounce((event: string) => {
      dispatch(setSearchValue(event));
    }, 1000),
    [setSearchValue]
  );

  return (
    <div className={s.root}>
      <input
        onChange={(event) => onChangeInput(event)}
        ref={inputRef}
        value={value}
        type="text"
        placeholder="Поиск..."
        className={s.input}
      />
      {value && (
        <svg
          onClick={onButtonClick}
          className={s.close}
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
