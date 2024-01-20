import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  // fetch trailer video
  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US",
      API_OPTIONS
    );
  };
  return <div></div>;
};
export default VideoBackground;
