import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Cabecera({ volverA }: { volverA: string }) {
  return (
    <header className="flex items-center gap-5 border-b border-crema/15 pb-5">
      <Link href={volverA} aria-label="Volver">
        <ArrowLeft size={26} />
      </Link>
      <div className="text-xs font-bold uppercase leading-snug">
        Te entiendo y
        <br />
        te respeto Awards
        <p className="mt-1 text-[11px] text-oro">Gala 2027</p>
      </div>
    </header>
  );
}