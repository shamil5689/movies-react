import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layouts: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layouts;
