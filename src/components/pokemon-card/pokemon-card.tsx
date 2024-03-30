import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/services/pokeApi";
import { TypeIcon } from "@/components/ui/icons";
import { capitalize } from "@/lib/utils";

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const { name, id, types, spritesFront } = pokemon;
  const pokemonName = capitalize(name);

  return (
    <li
      key={id}
      className="rounded-sm border relative border-gray-200 bg-white shadow-sm"
    >
      <Link href={`/pokemon/${name}`} className="w-full h-full">
        <div className="flex flex-col items-center gap-2 p-2">
          <Image src={spritesFront} alt={name} width={140} height={140} />
          <h3>{pokemonName}</h3>
          <div className="absolute right-3 top-3 flex gap-2">
            {types.map((type, index) => {
              return <TypeIcon key={index} type={type} />;
            })}
          </div>
        </div>
      </Link>
    </li>
  );
}
