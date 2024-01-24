import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="h-52 w-52 m-2">
      <img alt="movie img" src={IMG_CDN_URL + poster_path} className="h-full w-full" />
    </div>
  );
};
export default MovieCard;
