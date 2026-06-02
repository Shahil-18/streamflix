import MovieCard from "./MovieCard";

function MovieRow({ title, movies, onMovieClick }) {
  return (
    <section className="px-6 py-6 md:px-12">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onMovieClick={onMovieClick} />
        ))}
      </div>
    </section>
  );
}

export default MovieRow;