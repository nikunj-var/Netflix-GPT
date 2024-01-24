import { useSelector } from "react-redux";
import Movielist from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
    <div className="-mt-52 pl-12 relative z-20 ">
      {/* 
    movielist - popular
    movielist - now playing 
    movielist - trending
     */}
        <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <Movielist title={"Trending"} movies={movies.nowPlayingMovies} />
        <Movielist title={"Popular"} movies={movies.nowPlayingMovies} />
        <Movielist title={"Upcoming Movie"} movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
