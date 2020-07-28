import React, { useState, useContext } from "react";
import { MovieData } from "./App";

function AddMovie() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieData);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };
  const updateMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={updateMovie}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={updateName}
        placeholder="Name"
      />
      <input
        type="text"
        name="name"
        value={price}
        onChange={updatePrice}
        placeholder="Price"
      />
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddMovie;
