import React from "react";
import Header from "./Header";
import useNowPlayMovies from "../hooks/useNowPlayMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

  useNowPlayMovies();

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
