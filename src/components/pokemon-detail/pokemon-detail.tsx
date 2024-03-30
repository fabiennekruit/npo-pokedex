import { Pokemon } from "@/services/pokeApi";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { Button } from "../ui/button";
import Link from "next/link";

const PokemonDetail = ({ pokemon }: { pokemon: Pokemon }) => {
  const { name, id, spritesFront, spritesBack, types } = pokemon;

  return (
    <div>
      {pokemon ? (
        <div>
          <h2 className="font-mabry-pro uppercase">
            {id}. {name}
          </h2>

          <Carousel
            className="max-w-screen-sm mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem>
                <Image
                  className="pixelate"
                  width="200"
                  height="200"
                  src={spritesFront}
                  alt={name}
                />
              </CarouselItem>
              <CarouselItem>
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

          {types.map((type) => {
            return (
              <Link href={`/type/${type}`} key={type}>
                <Button>{type}</Button>
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default PokemonDetail;
