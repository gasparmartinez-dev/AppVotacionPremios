"use client";

import { useFormStatus } from "react-dom";
import { ArrowUpRight } from "lucide-react";

export default function BotonEntrar() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full items-center justify-between rounded-2xl bg-oro px-6 py-5 text-lg font-bold text-fondo disabled:opacity-60"
    >
      {pending ? "Entrando..." : "Entrar"}
      <ArrowUpRight size={22} />
    </button>
  );
}