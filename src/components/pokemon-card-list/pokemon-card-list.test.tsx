import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PokemonCardList } from "./pokemon-card-list";
import { capitalize } from "@/lib/utils";

const mockPokemonList = [
  {
    name: "charizard",
    id: 6,
    spritesFront:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    types: ["fire", "flying"],
  },
  {
    name: "squirtle",
    id: 7,
    spritesFront:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    types: ["water"],
  },
  {
    name: "wartortle",
    id: 8,
    spritesFront:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    types: ["water"],
  },
];

describe("PokemonCardList", () => {
  it("should render the PokemonCardList component correctly", () => {
    render(<PokemonCardList pokemon={mockPokemonList} />);
    const pokemonCards = screen.getAllByRole("listitem");
    expect(pokemonCards).toHaveLength(3);

    mockPokemonList.forEach((pokemon) => {
      const pokemonCard = screen.getByText(capitalize(pokemon.name));
      expect(pokemonCard).toBeInTheDocument();
    });
  });
});
