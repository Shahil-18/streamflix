function SkeletonRow({ title }) {
  return (
    <section className="px-6 py-6 md:px-12">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>

      <div className="flex gap-4 overflow-hidden">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="min-w-[180px] animate-pulse rounded-md bg-zinc-800 md:min-w-[220px]"
          >
            <div className="h-64 rounded-t-md bg-zinc-700"></div>
            <div className="space-y-3 p-3">
              <div className="h-4 w-3/4 rounded bg-zinc-700"></div>
              <div className="h-3 w-1/2 rounded bg-zinc-700"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkeletonRow;
