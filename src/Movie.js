import React, { useContext } from "react";
import { MovieData } from "./App";

function Movie() {
  const [movies, setMovies] = useContext(MovieData);

  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.name} - {movie.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
