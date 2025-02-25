import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRateMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMoviesApi = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addTopRateMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMoviesApi();
  }, []);
};

export default useTopRatedMovies;
