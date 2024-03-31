import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PokemonDetail from "./pokemon-detail";

const mockPokemonDetail = {
  name: "charmander",
  id: 4,
  spritesFront:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  spritesBack:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
  abilities: ["blaze", "solar-power"],
  types: ["fire"],
};

describe("PokemonDetail", () => {
  // todo: fix test
  it.skip("should render the PokemonDetail component correctly", () => {
    render(<PokemonDetail pokemon={mockPokemonDetail} />);
    const pokemonName = screen.getByTestId("pokemon-name");
    expect(pokemonName).toBeInTheDocument();

    const carouselImages = screen.getAllByAltText("bulbasaur");
    expect(carouselImages).toHaveLength(2);

    const abilityElements = screen.getAllByText("overgrow");
    expect(abilityElements).toBeInTheDocument;

    const typeButtons = screen.getAllByRole("button");
    expect(typeButtons).toHaveLength(2);
  });

  it("should render the Pokemon not found message when pokemon is null", () => {
    render(<PokemonDetail pokemon={null} />);

    const notFoundImage = screen.getByAltText("who's that pokemon?");
    expect(notFoundImage).toBeInTheDocument();

    const notFoundMessage = screen.getByText("Pokemon not found!");
    expect(notFoundMessage).toBeInTheDocument();
  });
});
