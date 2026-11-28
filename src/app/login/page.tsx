import { ChevronDown } from "lucide-react";
import Cabecera from "@/components/header";
import { supabase } from "@/lib/supabase";
import { entrar } from "./actions";
import BotonEntrar from "./BotonEntrar";

export const dynamic = "force-dynamic";

export default async function Login() {
  const { data: usuarios, error } = await supabase
    .from("usuarios")
    .select("id, nombre")
    .order("nombre");

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col px-6 py-8">
      <Cabecera volverA="/" />

      <section className="mt-16 flex-1">
        <h1 className="font-titulo text-7xl uppercase leading-[0.95]">
          ¿Quién
          <br />
          eres?
        </h1>
        <p className="mt-6 text-lg leading-snug">
          Aquí nos conocemos todos.
          <br />
          Elige tu nombre y entra a la gala.
        </p>

        {error && <p className="mt-6 text-red-400">No se pudieron cargar los nombres.</p>}

        <form action={entrar} className="mt-12 space-y-6">
          <div>
            <label
              htmlFor="usuarioId"
              className="text-[11px] font-bold uppercase tracking-widest text-crema/70"
            >
              Tu nombre
            </label>
            <div className="relative mt-3">
              <select
                id="usuarioId"
                name="usuarioId"
                required
                defaultValue=""
                className="w-full appearance-none rounded-2xl border border-crema/20 bg-tarjeta px-5 py-4 text-lg font-bold"
              >
                <option value="" disabled className="bg-fondo">
                  Elige tu nombre
                </option>
                {usuarios?.map((u) => (
                  <option key={u.id} value={u.id} className="bg-fondo">
                    {u.nombre}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={20}
                className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          <BotonEntrar />
        </form>
      </section>

      <footer className="mt-8 border-t border-crema/15 pt-4 text-[11px] uppercase">
        Entre amigos, sin filtros.
      </footer>
    </main>
  );
}