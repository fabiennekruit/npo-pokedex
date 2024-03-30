import { getAllPokemon } from "@/services/pokeApi";

const Home = async () => {
  const pokemon = await getAllPokemon();

  console.log(pokemon);
  return <main className="">Pokedex</main>;
};

export default Home;
