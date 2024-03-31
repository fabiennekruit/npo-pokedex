import { POKEAPI_ENDPOINT } from "../lib/fetch-pokemons";

export interface Pokemon {
  name: string;
  id: number;
  spritesFront: string;
  spritesBack: string;
  types: string[];
}

// get all pokemon

const GET_ALL_POKEMON_QUERY = `query getAllPokemon {
  pokemon_v2_pokemon(limit: 150)  {
    name
    id
    spritesFront: pokemon_v2_pokemonsprites {
      frontDefault: sprites(path: "front_default")
    }
    spritesBack: pokemon_v2_pokemonsprites {
      backDefault: sprites(path: "back_default")
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
      spritesFront: {
        frontDefault: string;
      }[];
      spritesBack: {
        backDefault: string;
      }[];
      pokemon_v2_pokemontypes: { pokemon_v2_type: { name: string } }[];
    }[];
  };
}
export const getAllPokemon = async () => {
  try {
    const response = await fetch(POKEAPI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Method-Used": "graphiql",
      },
      body: JSON.stringify({ query: GET_ALL_POKEMON_QUERY, variables: {} }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const {
      data: { pokemon_v2_pokemon },
    }: getAllPokemonResponse = await response.json();

    const normalizedData = pokemon_v2_pokemon.map((pokemon) => {
      return {
        name: pokemon.name,
        id: pokemon.id,
        spritesFront: pokemon.spritesFront[0].frontDefault,
        spritesBack: pokemon.spritesBack[0].backDefault,
        types: pokemon.pokemon_v2_pokemontypes.map(
          ({ pokemon_v2_type }) => pokemon_v2_type.name
        ),
      };
    });

    return normalizedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

// get single pokemon

const GET_POKEMON_QUERY = (name: string) => `query getPokemon {
  pokemon_v2_pokemon(where: {name: {_eq: "${name}"}})  {
    name
    id
    spritesFront: pokemon_v2_pokemonsprites {
      frontDefault: sprites(path: "front_default")
    }
    spritesBack: pokemon_v2_pokemonsprites {
      backDefault: sprites(path: "back_default")
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

interface getPokemonResponse {
  data: {
    pokemon_v2_pokemon: {
      name: string;
      id: number;
      spritesFront: {
        frontDefault: string;
      }[];
      spritesBack: {
        backDefault: string;
      }[];
      pokemon_v2_pokemonabilities: { pokemon_v2_ability: { name: string } }[];
      pokemon_v2_pokemontypes: { pokemon_v2_type: { name: string } }[];
    }[];
  };
}
export const getPokemon = async (name: string) => {
  try {
    const response = await fetch(POKEAPI_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Method-Used": "graphiql",
      },
      body: JSON.stringify({
        query: GET_POKEMON_QUERY(name),
        variables: {},
      }),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data for ${name}. Status: ${response.status}`
      );
    }

    const {
      data: { pokemon_v2_pokemon },
    }: getPokemonResponse = await response.json();

    if (!pokemon_v2_pokemon || pokemon_v2_pokemon.length === 0) {
      throw new Error(`No data found for ${name}.`);
    }

    const normalizedData = {
      name: pokemon_v2_pokemon[0].name,
      id: pokemon_v2_pokemon[0].id,
      spritesFront: pokemon_v2_pokemon[0].spritesFront[0].frontDefault,
      spritesBack: pokemon_v2_pokemon[0].spritesBack[0].backDefault,
      abilities: pokemon_v2_pokemon[0].pokemon_v2_pokemonabilities.map(
        ({ pokemon_v2_ability }) => pokemon_v2_ability.name
      ),
      types: pokemon_v2_pokemon[0].pokemon_v2_pokemontypes.map(
        ({ pokemon_v2_type }) => pokemon_v2_type.name
      ),
    };

    return normalizedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
