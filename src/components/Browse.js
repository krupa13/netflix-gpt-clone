import React from "react";
import Header from "./Header";
import useNowPlayMovies from "../hooks/useNowPlayMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {

  useNowPlayMovies();
  useTopRatedMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
        MainContainer
          - Video Background
          - Video Title
        SecondaryContainer
          - MovieList * n
            - Cards * n
      */}
    </div>
  );
};

export default Browse;
