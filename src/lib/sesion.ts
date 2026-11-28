import { cookies } from "next/headers";
import { supabase } from "./supabase";

export const COOKIE_USUARIO = "usuario_id";

export async function getUsuarioActual() {
  const valor = (await cookies()).get(COOKIE_USUARIO)?.value;
  const id = Number(valor);
  if (!valor || !Number.isInteger(id)) return null;

  const { data } = await supabase
    .from("usuarios")
    .select("id, nombre")
    .eq("id", id)
    .maybeSingle();

  return data;
}