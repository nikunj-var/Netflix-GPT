import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  //   const [trailerId, setTrailerId] = useState(null);
  // fetch trailer video
  const getMovieTrailer = async (movieId) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/955916/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    

    // setTrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};
export default useMovieTrailer;
