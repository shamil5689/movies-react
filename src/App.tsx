import Home from "./pages/Home";
import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";
import Layouts from "./Layouts";
import React, { Suspense } from "react";
const MovieDetails = React.lazy(() => import("./components/MovieDetails"));
const Favorites = React.lazy(() => import("./pages/Favorites"));
const NotFound = React.lazy(() => import("./components/NotFound"));
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="" element={<Home />} />
        <Route
          path="movie/:id"
          element={
            <Suspense>
              <MovieDetails />
            </Suspense>
          }
        />
        <Route
          path="favorites"
          element={
            <Suspense>
              <Favorites />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
