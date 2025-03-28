export function MovieItem({ movie }) {
  return (
    <>
      <h3>{movie.title}</h3>
      {movie.poster_path && (
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="movieImage" />
      )}
    </>
  );
}