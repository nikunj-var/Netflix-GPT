import { useSelector } from "react-redux";
import { YOUTUBE_LINK } from "../utils/constants";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useMovieTrailer(movieId);
  return (
    <div className=" w-screen">
      <iframe
        className="w-screen aspect-video"
        src={YOUTUBE_LINK + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="Lift | New Year's Final Trailer | Netflix"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
       
      ></iframe>
    </div>
  );
};
export default VideoBackground;
