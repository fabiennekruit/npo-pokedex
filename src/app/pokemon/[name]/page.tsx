import PokemonDetail from "@/components/pokemon-detail/pokemon-detail";
import { getPokemon } from "@/services/pokeApi";
import { FC } from "react";

interface DetailPageProps {
  params: { name: string };
}

const DetailPage: FC<DetailPageProps> = async ({ params: { name } }) => {
  const pokemon = await getPokemon(name);

  return (
    <div className="max-w-screen-lg mx-auto">
      <PokemonDetail pokemon={pokemon} />
    </div>
  );
};

export default DetailPage;
