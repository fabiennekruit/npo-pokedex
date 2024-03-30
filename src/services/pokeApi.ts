import { POKEAPI_ENDPOINT } from "../lib/fetch-pokemons";

const GET_ALL_POKEMON_QUERY = `query getAllPokemon {
  pokemon_v2_pokemon(limit: 150)  {
    name
    id
    pokemon_v2_pokemonsprites {
      sprites(path: "front_default")
    }
    pokemon_v2_pokemonabilities {
      pokemon_v2_ability {
        name
      }
    }
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
}
`;

interface getAllPokemonResponse {
  data: {
    pokemon_v2_pokemon: {
      name: string;
      id: number;
      pokemon_species_id: number;
      pokemon_v2_pokemonsprites: { sprites: string }[];
      pokemon_v2_pokemonabilities: { pokemon_v2_ability: { name: string } }[];
      pokemon_v2_pokemoncries: { cries: string }[];
      pokemon_v2_pokemontypes: { pokemon_v2_type: { name: string } }[];
    }[];
  };
}

export interface Pokemon {
  name: string;
  id: number;
  sprites: string[];
  abilities: string[];
  types: string[];
}

export const getAllPokemon = async () => {
  const response = await fetch(POKEAPI_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Method-Used": "graphiql",
    },
    body: JSON.stringify({ query: GET_ALL_POKEMON_QUERY, variables: {} }),
  });

  const {
    data: { pokemon_v2_pokemon },
  }: getAllPokemonResponse = await response.json();

  const normalizedData = pokemon_v2_pokemon.map((pokemon) => {
    return {
      name: pokemon.name,
      id: pokemon.id,
      sprites: pokemon.pokemon_v2_pokemonsprites.map(({ sprites }) => sprites),
      abilities: pokemon.pokemon_v2_pokemonabilities.map(
        ({ pokemon_v2_ability }) => pokemon_v2_ability.name
      ),
      types: pokemon.pokemon_v2_pokemontypes.map(
        ({ pokemon_v2_type }) => pokemon_v2_type.name
      ),
    };
  });

  return normalizedData;
};
