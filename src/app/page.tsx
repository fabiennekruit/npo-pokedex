import { PokemonCardList } from "@/components/pokemon-card-list/pokemon-card-list";
import { getAllPokemon } from "@/services/pokeApi";

const Home = async () => {
  const pokemon = await getAllPokemon();

  return (
    <main className="min-h-screen px-4 py-6 lg:px-24 lg:py-20">
      <PokemonCardList pokemon={pokemon} />
    </main>
  );
};

export default Home;
