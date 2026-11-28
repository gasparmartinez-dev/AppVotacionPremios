import { redirect } from "next/navigation";
import { getUsuarioActual } from "@/lib/sesion";

export default async function Inicio() {
  const usuario = await getUsuarioActual();
  if (!usuario) redirect("/login");

  return (
    <main className="mx-auto max-w-md px-6 py-8">
      <p className="text-lg">Bienvenido,</p>
      <h1 className="font-titulo text-6xl uppercase">{usuario.nombre}.</h1>
    </main>
  );
}