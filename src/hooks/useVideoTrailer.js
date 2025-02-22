import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addVideoTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useVideoTrailer = (movieId) => {
  const dispatch = useDispatch();

  //* Ftech trailer video
  const getMoviesVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results;
    dispatch(addVideoTrailer(trailer));
  };

  useEffect(() => {
    getMoviesVideos();
  }, []);
};

export default useVideoTrailer;
