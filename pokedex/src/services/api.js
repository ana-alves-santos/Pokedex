export async function fetchPokemons(limit = 100) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await res.json();

  const detalhes = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return await res.json();
    })
  );

  return detalhes;
}
