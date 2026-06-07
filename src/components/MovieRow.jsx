import MovieCard from "./MovieCard";

function MovieRow({ title, movies }) {
  return (
    <section className="px-5 py-6 sm:px-8 md:px-12">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>

      {movies.length === 0 ? (
        <p className="text-gray-400">No movies found.</p>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}

export default MovieRow;