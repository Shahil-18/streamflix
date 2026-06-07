import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import SkeletonRow from "../components/SkeletonRow";
import { fetchMovies, searchMovies, fetchMoviesByGenre } from "../utils/tmdb";

const genres = [
  { id: 28, name: "Action" },
  { id: 35, name: "Comedy" },
  { id: 27, name: "Horror" },
  { id: 878, name: "Sci-Fi" },
  { id: 12, name: "Adventure" },
];

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);

  const [loading, setLoading] = useState(true);
  const [genreLoading, setGenreLoading] = useState(false);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      setTrendingMovies(await fetchMovies("/trending/movie/week"));
      setActionMovies(await fetchMovies("/discover/movie?with_genres=28"));
      setPopularMovies(await fetchMovies("/movie/popular"));
      setLoading(false);
    };

    loadMovies();
  }, []);

  useEffect(() => {
    const searchTimer = setTimeout(async () => {
      if (searchTerm.trim()) {
        const results = await searchMovies(searchTerm);
        setSearchResults(results);
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(searchTimer);
  }, [searchTerm]);

  const handleGenreClick = async (genre) => {
    setSelectedGenre(genre);
    setSearchTerm("");
    setGenreLoading(true);
    setGenreMovies(await fetchMoviesByGenre(genre.id));
    setGenreLoading(false);
  };

  return (
    <div className="min-h-screen bg-black pb-20 text-white md:pb-0">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Hero movie={trendingMovies[0]} />

      <main className="relative z-20 -mt-10">
        <div className="px-5 py-5 sm:px-8 md:px-12">
          <h2 className="mb-4 text-2xl font-bold">Browse by Genre</h2>

          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => handleGenreClick(genre)}
                className={`rounded-full px-5 py-2 font-semibold transition ${
                  selectedGenre?.id === genre.id
                    ? "bg-red-600 text-white"
                    : "bg-zinc-800 text-gray-200 hover:bg-zinc-700"
                }`}
              >
                {genre.name}
              </button>
            ))}

            {selectedGenre && (
              <button
                onClick={() => {
                  setSelectedGenre(null);
                  setGenreMovies([]);
                }}
                className="rounded-full bg-white px-5 py-2 font-semibold text-black hover:bg-gray-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {searchTerm ? (
          <MovieRow
            title={`Search Results for "${searchTerm}"`}
            movies={searchResults}
          />
        ) : selectedGenre ? (
          genreLoading ? (
            <SkeletonRow title={`Loading ${selectedGenre.name} Movies`} />
          ) : (
            <MovieRow title={`${selectedGenre.name} Movies`} movies={genreMovies} />
          )
        ) : loading ? (
          <>
            <SkeletonRow title="Trending Now" />
            <SkeletonRow title="Action Movies" />
            <SkeletonRow title="Popular Movies" />
          </>
        ) : (
          <>
            <MovieRow title="Trending Now" movies={trendingMovies} />
            <MovieRow title="Action Movies" movies={actionMovies} />
            <MovieRow title="Popular Movies" movies={popularMovies} />
          </>
        )}
      </main>
    </div>
  );
}

export default Home;