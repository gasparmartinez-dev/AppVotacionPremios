"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { COOKIE_USUARIO } from "@/lib/sesion";

export async function entrar(formData: FormData) {
  const id = Number(formData.get("usuarioId"));

  const { data } = await supabase
    .from("usuarios")
    .select("id")
    .eq("id", id)
    .maybeSingle();

  if (!data) redirect("/login");

  (await cookies()).set(COOKIE_USUARIO, String(data.id), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 días
  });

  redirect("/inicio");
}