import { useNavigate } from "react-router-dom";
import { imageBaseUrl } from "../utils/tmdb";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  if (!movie?.poster_path) return null;

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="group min-w-[150px] cursor-pointer overflow-hidden rounded-md bg-zinc-900 transition duration-300 hover:scale-105 sm:min-w-[180px] md:min-w-[220px]"
    >
      <img
        src={`${imageBaseUrl}${movie.poster_path}`}
        alt={movie.title}
        className="h-56 w-full object-cover sm:h-64"
      />

      <div className="p-3">
        <h3 className="line-clamp-1 text-sm font-bold sm:text-base">
          {movie.title}
        </h3>

        <p className="mt-1 text-sm text-yellow-400">
          ⭐ {movie.vote_average?.toFixed(1)}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;