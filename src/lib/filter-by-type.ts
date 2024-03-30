import { Pokemon } from "@/services/pokeApi";

export const filterByType = (pokemonData: Pokemon[], typeName: string) => {
  return pokemonData.filter((pokemon) =>
    pokemon.types.some((type) => type === typeName)
  );
};
