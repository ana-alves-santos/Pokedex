import React, { useState, useEffect } from "react";
import { fetchPokemons } from "./services/api";
import PokemonList from "./components/PokemonList";
import PokemonDetails from "./components/PokemonDetails";
import "./App.css";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [termoBusca, setTermoBusca] = useState("");
  const [pokemonSelecionado, setPokemonSelecionado] = useState(null);

  useEffect(() => {
    async function carregarPokemons() {
      const dados = await fetchPokemons(100);
      setPokemons(dados);
    }
    carregarPokemons();
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>Pokédex</h1>
        <input
          className="search-input"
          type="text"
          placeholder="Buscar Pokémon"
          value={termoBusca}
          onChange={(e) => setTermoBusca(e.target.value.toLowerCase())}
        />
      </header>
      <section className="pokedex-panel">
        <PokemonList
          pokemons={pokemons}
          termoBusca={termoBusca}
          onSelect={setPokemonSelecionado}
        />
      </section>

      {pokemonSelecionado && (
        <PokemonDetails
          pokemon={pokemonSelecionado}
          onClose={() => setPokemonSelecionado(null)}
        />
      )}
    </div>
  );
}
