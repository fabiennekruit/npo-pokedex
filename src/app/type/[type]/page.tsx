import { BackLink } from "@/components/back-link/back-link";
import { PokemonCardList } from "@/components/pokemon-card-list/pokemon-card-list";
import { filterByType } from "@/lib/filter-by-type";
import { capitalize } from "@/lib/utils";
import { getAllPokemon } from "@/services/pokeApi";
import { FC } from "react";

interface TypePageProps {
  params: { type: string };
}

const TypePage: FC<TypePageProps> = async ({ params: { type } }) => {
  const pokemon = await getAllPokemon();
  const filteredPokemon = filterByType(pokemon, type);
  const typeName = capitalize(type);

  return (
    <main className="min-h-screen px-4 py-6 lg:px-24 lg:py-20">
      <BackLink />
      <h1 className="text-xl text-center font-bold pb-8">{typeName} Pokemon</h1>
      <PokemonCardList pokemon={filteredPokemon} />
    </main>
  );
};

export default TypePage;
