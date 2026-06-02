import { backdropBaseUrl, imageBaseUrl } from "../utils/tmdb";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const image = movie.backdrop_path
    ? `${backdropBaseUrl}${movie.backdrop_path}`
    : `${imageBaseUrl}${movie.poster_path}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4">
      <div className="relative max-w-3xl overflow-hidden rounded-xl bg-zinc-900">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-black/70 px-3 py-1 text-xl font-bold hover:bg-red-600"
        >
          ×
        </button>

        <img src={image} alt={movie.title} className="h-[350px] w-full object-cover" />

        <div className="p-6">
          <h2 className="mb-2 text-3xl font-black">{movie.title}</h2>
          <p className="mb-2 text-yellow-400">⭐ {movie.vote_average?.toFixed(1)}</p>
          <p className="mb-5 text-gray-300">{movie.overview}</p>

          <button className="rounded bg-white px-6 py-3 font-bold text-black hover:bg-gray-300">
            ▶ Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;