import { backdropBaseUrl } from "../utils/tmdb";

function Hero({ movie }) {
  const heroImage = movie?.backdrop_path
    ? `${backdropBaseUrl}${movie.backdrop_path}`
    : "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600";

  return (
    <section
      className="relative flex h-[80vh] items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>

      <div className="relative z-10 max-w-2xl px-6 pt-24 md:px-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-red-500">
          StreamFlix Original
        </p>

        <h2 className="mb-4 text-3xl font-black leading-tight sm:text-5xl md:text-7xl">
          {movie?.title || "StreamFlix"}
        </h2>

        <p className="mb-6 max-w-xl text-base leading-relaxed text-gray-200 md:text-lg">
          {movie?.overview ||
            "Watch trending movies and shows with a premium streaming experience."}
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="rounded bg-white px-7 py-3 font-bold text-black transition hover:bg-gray-300">
            ▶ Play
          </button>

          <button className="rounded bg-gray-700/80 px-7 py-3 font-bold text-white transition hover:bg-gray-600">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;