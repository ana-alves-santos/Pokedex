import React from "react";
import PokemonCard from "./PokemonCard";
import "./PokemonList.css";

export default function PokemonList({ pokemons, termoBusca, onSelect }) {
  if (!pokemons.length) return <p>Carregando...</p>;

  const pokemonsFiltrados = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(termoBusca)
  );

  if (pokemonsFiltrados.length === 0)
    return <p>Nenhum Pokémon encontrado com esse nome.</p>;

  return (
    <div className="pokemon-list">
      {pokemonsFiltrados.map((pokemon) => (
        <div
          key={pokemon.id}
          onClick={() => onSelect(pokemon)}
          style={{ cursor: "pointer" }}
        >
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
}
