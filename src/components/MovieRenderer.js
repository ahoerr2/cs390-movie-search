export default function MovieRenderer({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <div class="grid" key={movie.id}>
          <article key={movie.id}>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.overview}</p>
          </article>
        </div>
      ))}
    </div>
  );
}
