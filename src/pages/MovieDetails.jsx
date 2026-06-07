import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  fetchMovieDetails,
  fetchMovieVideos,
  backdropBaseUrl,
} from "../utils/tmdb";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      const movieData = await fetchMovieDetails(id);
      const videos = await fetchMovieVideos(id);

      const trailerVideo = videos.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

      setMovie(movieData);
      setTrailer(trailerVideo);
    };

    loadMovie();
  }, [id]);

  if (!movie) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  const addToMyList = () => {
    const existingList = JSON.parse(localStorage.getItem("myList")) || [];
    const alreadyAdded = existingList.some((item) => item.id === movie.id);

    if (!alreadyAdded) {
      localStorage.setItem("myList", JSON.stringify([...existingList, movie]));
      alert("Movie added to My List");
    } else {
      alert("Movie already in My List");
    }
  };

  return (
    <div className="min-h-screen bg-black pb-20 text-white md:pb-0">
      <div
        className="relative flex min-h-screen items-end bg-cover bg-center"
        style={{
          backgroundImage: `url(${backdropBaseUrl}${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div className="relative z-10 max-w-3xl p-5 pt-20 sm:p-8 md:p-14">
          <Link
            to="/"
            className="mb-6 inline-block rounded bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
          >
            ← Back
          </Link>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
            {movie.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-300">
            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
            <span>{movie.release_date}</span>
            <span>{movie.runtime} min</span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            {movie.overview}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="rounded-full bg-red-600/80 px-4 py-1 text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {trailer ? (
              <a
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                rel="noreferrer"
                className="rounded bg-white px-7 py-3 font-bold text-black hover:bg-gray-300"
              >
                ▶ Watch Trailer
              </a>
            ) : (
              <button className="rounded bg-gray-700 px-7 py-3 font-bold text-white">
                Trailer Not Available
              </button>
            )}

            <button
              onClick={addToMyList}
              className="rounded bg-red-600 px-7 py-3 font-bold text-white hover:bg-red-700"
            >
              + My List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;