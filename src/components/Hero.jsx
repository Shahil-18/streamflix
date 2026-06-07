import { backdropBaseUrl } from "../utils/tmdb";

function Hero({ movie }) {
  const heroImage = movie?.backdrop_path
    ? `${backdropBaseUrl}${movie.backdrop_path}`
    : "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1600";

  return (
    <section
      className="relative flex min-h-[85vh] items-center bg-cover bg-center pt-20"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30"></div>

      <div className="relative z-10 max-w-3xl px-5 pb-20 pt-16 sm:px-8 md:px-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[5px] text-red-500 sm:text-sm">
          StreamFlix Original
        </p>

        <h2 className="mb-4 text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
          {movie?.title || "StreamFlix"}
        </h2>

        <p className="mb-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
          {movie?.overview ||
            "Watch trending movies and shows with a premium streaming experience."}
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="rounded bg-white px-6 py-3 font-bold text-black hover:bg-gray-300">
            ▶ Play
          </button>

          <button className="rounded bg-gray-700/90 px-6 py-3 font-bold text-white hover:bg-gray-600">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;