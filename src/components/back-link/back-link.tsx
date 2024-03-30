import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export const BackLink = () => {
  return (
    <Link href="/" className="group w-auto inline-flex gap-1 items-center mb-8">
      <ChevronLeft size={18} />
      <span className="group-hover:underline">Back to all Pokemon</span>
    </Link>
  );
};
