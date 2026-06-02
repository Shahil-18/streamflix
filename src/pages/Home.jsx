import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import { fetchMovies, searchMovies } from "../utils/tmdb";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      setTrendingMovies(await fetchMovies("/trending/movie/week"));
      setActionMovies(await fetchMovies("/discover/movie?with_genres=28"));
      setPopularMovies(await fetchMovies("/movie/popular"));
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

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Hero movie={trendingMovies[0]} />

      <main className="-mt-10 relative z-20">
        {searchTerm ? (
          <MovieRow title={`Search Results for "${searchTerm}"`} movies={searchResults} />
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