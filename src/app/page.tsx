import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Landing(){
    return (
        <main className="mx-auto flex min-h-screen max-w-md flex-col px-6 py-8">
            <header className="flex items-center justify-between border-b border-crema/15 pb-4 text-xs font-bold uppercase tracking-widest text-oro">
                <span>Te entiendo y te respeto awards</span>
                <span>Gala 2027</span>
            </header>

            <section className="mt-12 flex-1">
                <span className="inline-block rounded-full bg-oro px-4 py-2 text-sm font-bold text-fondo">
                    Gala 2027
                </span> 

                <h1 className="mt-8 font-titulo text-6xl uppercase leading-[0.95]">
                    Te entiendo
                    <br />y te respeto
                </h1>
                <p className="mt-2 font-titulo text-[5.5rem] uppercase leading-none text-oro">
                    Awards
                </p>

                <p className="mt-8 text-lg leading-snug">
                    Premios del año 2027
                </p>
            </section>

            <Link href="/login" className="flex items-center justify-between rounded-2xl bg-oro px-6 py-5 text-lg font-bold text-fondo">
                Entrar
                <ArrowUpRight size={22} />
            </Link>

            <footer className="mt-8 flex justify-between border-t border-crema/15 pt-4 text-[11px] uppercase">
                <span>Te entiendo y te respeto</span>
                <span>2027</span>
            </footer>


        </main>
    )
}