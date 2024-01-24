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
        <Movielist title={"Top Rated"} movies={movies.topRated} />
        <Movielist title={"Popular"} movies={movies.popularMovie} />
        <Movielist title={"Upcoming Movie"} movies={movies.upcomingMovie} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
