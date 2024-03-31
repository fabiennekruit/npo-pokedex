import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PokemonCard } from "./pokemon-card";

const mockPokemon = {
  name: "charmander",
  id: 4,
  types: ["fire"],
  spritesFront:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
};

describe("PokemonCard", () => {
  it("should render the PokemonCard component correctly", () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    const pokemonName = screen.getByTestId("pokemon-name");
    expect(pokemonName).toBeInTheDocument();

    const pokemonImage = screen.getByTestId("front-image");
    expect(pokemonImage.getAttribute("src")).toContain(
      encodeURIComponent(mockPokemon.spritesFront)
    );

    const pokemonType = screen.getByTestId("type-icon");
    expect(pokemonType).toBeInTheDocument();
  });

  it("should render the PokemonCard component with correct link", () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    const linkElement = screen.getByRole("link", { name: /charmander/i });
    expect(linkElement).toHaveAttribute("href", "/pokemon/charmander");
  });
});
