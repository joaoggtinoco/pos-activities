import styles from './Movies.Module.css'

import { useMovies } from "../hooks/useMovies";
import { MovieItem } from '../components/MovieItem';

export function Movies() {
  const movies = useMovies();

  return (
    <section className={styles.moviesContainer}>
      <h1>Filmes populares</h1>
      <ul>
        {
          movies.map((movie) =>
            <MovieItem key={movie.id} movie={movie} />
          )
        }
      </ul>
    </section>
  );
}

