import { PokemonCardList } from "@/components/pokemon-card-list/pokemon-card-list";
import { getAllPokemon } from "@/services/pokeApi";

const Home = async () => {
  const pokemon = await getAllPokemon();

  return (
    <main className="min-h-screen p-24">
      <PokemonCardList pokemon={pokemon} />
    </main>
  );
};

export default Home;
