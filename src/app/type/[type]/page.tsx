import { PokemonCardList } from "@/components/pokemon-card-list/pokemon-card-list";
import { filterByType } from "@/lib/filter-by-type";
import { getAllPokemon } from "@/services/pokeApi";
import { FC } from "react";

interface TypePageProps {
  params: { type: string };
}

const TypePage: FC<TypePageProps> = async ({ params: { type } }) => {
  const pokemon = await getAllPokemon();
  const filteredPokemon = filterByType(pokemon, type);

  return (
    <main className="min-h-screen p-24">
      <PokemonCardList pokemon={filteredPokemon} />
    </main>
  );
};

export default TypePage;
