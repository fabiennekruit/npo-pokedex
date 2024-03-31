import { BackLink } from "@/components/back-link/back-link";
import PokemonDetail from "@/components/pokemon-detail/pokemon-detail";
import { getPokemon } from "@/services/pokeApi";
import { FC } from "react";

interface DetailPageProps {
  params: { name: string };
}

const DetailPage: FC<DetailPageProps> = async ({ params: { name } }) => {
  const pokemon = await getPokemon(name);

  return (
    <div className="relative  px-4 py-6 lg:px-24 lg:py-20">
      <BackLink />
      <PokemonDetail pokemon={pokemon} />
    </div>
  );
};

export default DetailPage;
