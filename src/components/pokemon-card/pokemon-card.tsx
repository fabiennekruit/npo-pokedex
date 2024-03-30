import Link from "next/link";
import Image from "next/image";
import { Pokemon } from "@/services/pokeApi";

export function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const { name, id, types, spritesFront } = pokemon;

  return (
    <li
      key={id}
      className="rounded-sm border border-gray-200 bg-white shadow-sm"
    >
      <Link href={`/pokemon/${name}`} className="w-full h-full">
        <div className="flex flex-col items-center gap-2 p-2">
          <Image src={spritesFront} alt={name} width={140} height={140} />
          <h3>{name}</h3>
          {types.map((type, index) => {
            return <span key={index}>{type}</span>;
          })}
        </div>
      </Link>
    </li>
  );
}
