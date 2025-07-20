import React from "react";
import "./PokemonDetails.css";

export default function PokemonDetails({ pokemon, onClose }) {
  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Fechar detalhes">
          &times;
        </button>
        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>
          <strong>Altura:</strong> {pokemon.height / 10} m
        </p>
        <p>
          <strong>Peso:</strong> {pokemon.weight / 10} kg
        </p>
        <p>
          <strong>Habilidades:</strong> {pokemon.abilities.map((a) => a.ability.name).join(", ")}
        </p>
      </div>
    </div>
  );
}

