import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function MyList() {
  const savedMovies = JSON.parse(localStorage.getItem("myList")) || [];

  return (
    <div className="min-h-screen bg-black px-5 py-10 pb-24 text-white sm:px-8 md:px-12 md:pb-10">
      <div className="mb-8 flex items-center justify-between gap-4">
        <h1 className="text-3xl font-black text-red-600 sm:text-4xl">My List</h1>

        <Link
          to="/"
          className="rounded bg-white px-5 py-2 font-bold text-black hover:bg-gray-300"
        >
          Home
        </Link>
      </div>

      {savedMovies.length === 0 ? (
        <p className="text-gray-400">No movies added yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {savedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyList;