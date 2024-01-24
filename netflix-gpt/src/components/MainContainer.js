import { useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => {
    return store.movies?.nowPlayingMovies;
  });

  //   //   this is known as early return.
  if (!movies) {
    return;
  }

  const mainMovie = movies?.results[0];
  
  const { original_title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle original_title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;
