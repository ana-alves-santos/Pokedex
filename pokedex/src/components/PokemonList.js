import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemons }) {
  return (
    <div className="pokedex">
      {pokemons.map((poke) => (
        <PokemonCard key={poke.id} pokemon={poke} />
      ))}
    </div>
  );
}
