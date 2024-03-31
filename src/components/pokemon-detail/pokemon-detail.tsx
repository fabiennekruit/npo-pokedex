import { Pokemon } from "@/services/pokeApi";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { capitalize } from "@/lib/utils";

interface PokemonDetail extends Pokemon {
  abilities: string[];
  spritesBack: string;
}

const PokemonDetail = ({ pokemon }: { pokemon: PokemonDetail | null }) => {
  if (pokemon) {
    const { name, id, spritesFront, spritesBack, types, abilities } = pokemon;
    const pokemonName = capitalize(name);

    return (
      <div>
        <div className="flex flex-col items-center">
          <h2 className="pt-12 pb-8 font-mabry-pro uppercase font-bold text-xl">
            {id}. {pokemonName}
          </h2>

          <Carousel
            className="max-w-[360px] mx-auto bg-white "
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem className="flex justify-center">
                <Image
                  className="pixelate"
                  width="200"
                  height="200"
                  src={spritesFront}
                  alt={name}
                />
              </CarouselItem>
              <CarouselItem className="flex justify-center">
                <Image
                  className="pixelate"
                  width="200"
                  height="200"
                  src={spritesBack}
                  alt={name}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="pt-8">
            <span>Abilities: {""}</span>
            {abilities.map((ability, index) => {
              return (
                <span key={index}>
                  {ability}
                  {index < abilities.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </div>
          <div className="py-12 flex gap-4">
            {types.map((type) => {
              return (
                <Link
                  href={`/type/${type}`}
                  key={type}
                  className={buttonVariants({ variant: "default" })}
                >
                  {type}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center ">
        <Image
          src="/who_that_pokemon.jpg"
          height="300"
          width="400"
          alt="who's that pokemon?"
        />
        <p className="pt-8 font-bold">Pokemon not found! </p>
      </div>
    );
  }
};

export default PokemonDetail;
