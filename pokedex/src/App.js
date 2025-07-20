import React, { useState, useEffect } from "react";
import { fetchPokemons } from "./services/api";
import PokemonList from "./components/PokemonList";
import "./App.css";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function load() {
      const dados = await fetchPokemons(20);
      setPokemons(dados);
    }
    load();
  }, []);

  return (
    <div className="app">
      <h1>Pokédex</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
