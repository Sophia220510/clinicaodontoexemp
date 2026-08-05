import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import caso1a from "@/assets/caso1-antes.jpg";
import caso1d from "@/assets/caso1-depois.jpg";
import caso2a from "@/assets/caso2-antes.jpg";
import caso2d from "@/assets/caso2-depois.jpg";
import caso3a from "@/assets/caso3-antes.jpg";
import caso3d from "@/assets/caso3-depois.jpg";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import clinic3 from "@/assets/clinic-3.jpg";
import { ETAPAS, TECNOLOGIA } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

const CASOS = [
  {
    title: "Clareamento e alinhamento estético",
    time: "Resultado em 6 meses",
    before: caso1a,
    after: caso1d,
  },
  {
    title: "Fechamento de diastema com facetas",
    time: "Resultado em 3 semanas",
    before: caso2a,
    after: caso2d,
  },
  {
    title: "Implante unitário com coroa de porcelana",
    time: "Resultado em 4 meses",
    before: caso3a,
    after: caso3d,
  },
];

export function AntesDepois() {
  const [index, setIndex] = useState(0);
  const caso = CASOS[index]!;

  const go = useCallback((dir: number) => {
    setIndex((i) => (i + dir + CASOS.length) % CASOS.length);
  }, []);

  return (
    <section id="resultados" className="scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Antes e Depois"
          title="Resultados que falam por si"
          lead="Imagens ilustrativas de casos clínicos. Cada tratamento é planejado individualmente."
        />

        <Reveal delay={80} className="mt-14">
          <div className="rounded-[2.25rem] border border-border bg-card p-5 shadow-soft sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {(["Antes", "Depois"] as const).map((label) => (
                <figure key={label} className="relative overflow-hidden rounded-3xl">
                  <img
                    key={label + index}
                    src={label === "Antes" ? caso.before : caso.after}
                    alt={`${label} — ${caso.title}`}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-all duration-700 sm:h-80"
                  />
                  <figcaption
                    className={cn(
                      "absolute top-4 left-4 rounded-full px-3.5 py-1.5 text-xs font-semibold",
                      label === "Antes"
                        ? "bg-background/90 text-primary"
                        : "bg-accent text-accent-foreground",
                    )}
                  >
                    {label}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <div className="min-w-0">
                <h3 className="truncate text-lg text-primary">{caso.title}</h3>
                <p className="text-sm text-muted-foreground">{caso.time}</p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Caso anterior"
                  className="grid h-11 w-11 place-items-center rounded-full border border-border text-primary transition-colors hover:border-accent hover:text-accent"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Próximo caso"
                  className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-accent"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-2">
              {CASOS.map((c, i) => (
                <button
                  key={c.title}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ver caso ${i + 1}`}
                  aria-current={i === index}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === index ? "w-10 bg-gold" : "w-4 bg-border hover:bg-accent/50",
                  )}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Tecnologia() {
  return (
    <section id="tecnologia" className="relative scroll-mt-28 overflow-hidden bg-primary py-24 lg:py-32">
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Tecnologia"
          title="Equipamentos de última geração, do diagnóstico à entrega"
          lead="Tecnologia existe para dar previsibilidade ao resultado e conforto ao paciente."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECNOLOGIA.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 90}>
              <div className="lift h-full rounded-3xl border border-primary-foreground/12 bg-primary-foreground/6 p-7 backdrop-blur-sm hover:border-gold/50">
                <span className="font-display text-sm text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg text-primary-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {[
            { src: clinic2, alt: "Consultório com scanner intraoral e monitor digital" },
            { src: clinic3, alt: "Planejamento digital do sorriso e impressora 3D" },
            { src: clinic1, alt: "Sala de espera moderna da clínica" },
          ].map((img, i) => (
            <Reveal key={img.alt} delay={i * 90}>
              <div className="overflow-hidden rounded-3xl border border-primary-foreground/12">
                <img
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-52 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComoFunciona() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Como funciona"
          title="Cinco etapas simples até o seu novo sorriso"
        />

        <ol className="relative mt-16 grid gap-8 lg:grid-cols-5">
          <span
            className="absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
            aria-hidden="true"
          />
          {ETAPAS.map((etapa, i) => (
            <Reveal as="li" key={etapa.step} delay={i * 110} className="relative">
              <span className="relative z-10 grid h-12 w-12 place-items-center rounded-2xl bg-primary font-display text-sm font-semibold text-primary-foreground shadow-soft">
                {etapa.step}
              </span>
              <h3 className="mt-5 text-lg text-primary">{etapa.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{etapa.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Galeria() {
  const imgs = [clinic1, clinic2, clinic3];
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.02);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-muted/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Nossa estrutura"
          title="Um ambiente pensado para o seu conforto"
          lead="Imagens ilustrativas da estrutura, dos consultórios e dos espaços de convivência."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {imgs.map((src, i) => (
            <Reveal key={i} delay={i * 90}>
              <div className="group overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={src}
                  alt="Ambiente da clínica Odonto Aurora"
                  width={1200}
                  height={900}
                  loading="lazy"
                  style={{ transform: `translateY(${(i % 2 === 0 ? -1 : 1) * offset}px)` }}
                  className="h-60 w-full scale-110 object-cover transition-transform duration-700 group-hover:scale-[1.16]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
