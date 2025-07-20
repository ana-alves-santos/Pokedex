import React from "react";
import "./PokemonCard.css";

export default function PokemonCard({ pokemon }) {
  return (
    <div className="card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <p>Tipo: {pokemon.types[0].type.name}</p>
    </div>
  );
}
