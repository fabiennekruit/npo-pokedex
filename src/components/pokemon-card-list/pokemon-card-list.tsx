import { Pokemon } from "@/services/pokeApi";
import { PokemonCard } from "../pokemon-card/pokemon-card";

export const PokemonCardList = ({ pokemon }: { pokemon: Pokemon[] }) => {
  return (
    <ul className="grid gap-x-4 gap-y-10 grid-cols-2 md:grid-cols-3 ">
      {pokemon &&
        pokemon.map((mon) => <PokemonCard key={mon.id} pokemon={mon} />)}
    </ul>
  );
};
