import MovieCard from "./MovieCard";

const Movielist = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies?.results.map((movie) => (
            <MovieCard poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Movielist;
