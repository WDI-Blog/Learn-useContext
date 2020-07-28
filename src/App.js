import React, { createContext, useState } from "react";
import Movie from "./Movie";
import AddMovie from "./AddMovie";
import data from "./data";

export const MovieData = createContext();

function App() {
  const [movies, setMovies] = useState(data);

  return (
    <MovieData.Provider value={[movies, setMovies]}>
      <div className="container">
        <AddMovie />
        <Movie />
      </div>
    </MovieData.Provider>
  );
}

export default App;
