import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Valores } from "@/components/Valores";
import { Ciclos } from "@/components/Ciclos";
import { PorqueEdison } from "@/components/PorqueEdison";
import { Docentes } from "@/components/Docentes";
import { FormInscripcion } from "@/components/FormInscripcion";
import { FooterMapa } from "@/components/FooterMapa";
import { Reveal } from "@/components/Reveal";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Reveal as="section"><Valores /></Reveal>
      <Reveal as="section"><Ciclos /></Reveal>
      <Reveal as="section"><PorqueEdison /></Reveal>
      <Reveal as="section"><Docentes /></Reveal>
      <Reveal as="section"><FormInscripcion /></Reveal>
      <FooterMapa />
    </>
  );
}
