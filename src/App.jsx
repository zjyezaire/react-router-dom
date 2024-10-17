// src/App.jsx
import { useState } from "react";
import PokemonList from "./components/PokemonList";
import Navbar from "./components/NavBar";
import PokemonDetails from "./components/PokemonDetails";
import PokemonForm from "./components/PokemonForm";
import { Route, Routes } from "react-router-dom";

const initialState = [
  { _id: 1, name: "bulbasaur", weight: 69, height: 7 },
  { _id: 2, name: "ivysaur", weight: 130, height: 10 },
  { _id: 3, name: "venusaur", weight: 1000, height: 20 },
  { _id: 4, name: "charmander", weight: 85, height: 6 },
  { _id: 5, name: "charmeleon", weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);

  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1;
    setPokemon([...pokemon, newPokemonData]);
  };
  return (
    <>
      <h1>Pokemon!</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route path="/pokemon/new" element={<PokemonForm addPokemon={addPokemon} />} />23
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
        <Route path="/pokemon/new" element={<PokemonForm />} />
      </Routes>
    </>
  );
};

export default App;
