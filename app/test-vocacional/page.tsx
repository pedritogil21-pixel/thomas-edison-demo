import type { Metadata } from "next";
import Link from "next/link";
import { Wizard } from "@/components/Vocacional/Wizard";
import { ACADEMIA_SHORT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Test vocacional UNAM Moquegua · gratis",
  description:
    "Test vocacional gratuito de 8 preguntas. Descubre qué área (Biomédicas, Ingenierías o Sociales) y qué carreras de UNAM Moquegua te calzan mejor.",
  alternates: {
    canonical: "/test-vocacional",
  },
  openGraph: {
    title: "Test vocacional gratuito · UNAM Moquegua",
    description:
      "8 preguntas. 2 minutos. Sin registro. Descubre tu área vocacional y las carreras UNAM Moquegua que mejor te calzan.",
    url: "/test-vocacional",
    type: "website",
  },
};

export default function TestVocacionalPage() {
  return (
    <main className="bg-paper min-h-screen">
      {/* Mini nav */}
      <header className="border-b border-ink/10 bg-paper/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-[1120px] mx-auto px-5 py-3.5 flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-ink text-base hover:text-yellow-dark">
            ← {ACADEMIA_SHORT}
          </Link>
          <span className="font-display text-xs tracking-[0.12em] uppercase text-muted">
            Test vocacional
          </span>
        </div>
      </header>

      <Wizard />
    </main>
  );
}
