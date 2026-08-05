import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Plus, MessageCircle } from "lucide-react";
import d1 from "@/assets/dentist-1.jpg";
import d2 from "@/assets/dentist-2.jpg";
import d3 from "@/assets/dentist-3.jpg";
import d4 from "@/assets/dentist-4.jpg";
import { DEPOIMENTOS, EQUIPE, FAQ, whatsappLink } from "@/lib/site-data";
import { Reveal, SectionHeading, WhatsButton } from "./primitives";
import { cn } from "@/lib/utils";

const FOTOS = [d1, d2, d3, d4];

export function Depoimentos() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % DEPOIMENTOS.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem já passou pela Odonto Aurora"
          lead="Avaliações reais de pacientes no Google."
        />

        <div
          className="mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-card p-8 shadow-soft sm:p-12">
              <span
                className="pointer-events-none absolute -top-6 right-6 font-display text-[8rem] leading-none text-accent/8"
                aria-hidden="true"
              >
                &rdquo;
              </span>
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
                <span className="sr-only">5 de 5 estrelas</span>
              </div>
              <blockquote className="mt-6 font-display text-xl leading-relaxed text-primary sm:text-2xl">
                &ldquo;{DEPOIMENTOS[index]!.text}&rdquo;
              </blockquote>
              <figcaption className="mt-7 text-sm">
                <span className="font-semibold text-primary">{DEPOIMENTOS[index]!.name}</span>
                <span className="text-muted-foreground"> · {DEPOIMENTOS[index]!.role}</span>
              </figcaption>

              <div className="mt-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                <div className="flex min-w-0 gap-2">
                  {DEPOIMENTOS.map((d, i) => (
                    <button
                      key={d.name}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Ver depoimento de ${d.name}`}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === index ? "w-10 bg-gold" : "w-4 bg-border hover:bg-accent/50",
                      )}
                    />
                  ))}
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setIndex((i) => (i - 1 + DEPOIMENTOS.length) % DEPOIMENTOS.length)
                    }
                    aria-label="Depoimento anterior"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIndex((i) => (i + 1) % DEPOIMENTOS.length)}
                    aria-label="Próximo depoimento"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-primary transition-colors hover:border-accent hover:text-accent"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Equipe() {
  return (
    <section id="equipe" className="scroll-mt-28 bg-muted/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Equipe"
          title="Especialistas dedicados a cada detalhe"
          lead="Profissionais qualificados, dedicados a cada especialidade da odontologia."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EQUIPE.map((pro, i) => (
            <Reveal as="li" key={pro.name} delay={i * 90}>
              <article className="lift h-full overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
                <div className="overflow-hidden">
                  <img
                    src={FOTOS[i]}
                    alt={`Especialista em ${pro.name} da Odonto Aurora`}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-64 w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-primary">{pro.name}</h3>
                  <p className="mt-1 text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                    {pro.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pro.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Dúvidas frequentes"
              title="Tudo o que você precisa saber antes de agendar"
              lead="Se a sua dúvida não estiver aqui, nossa equipe responde pelo WhatsApp em poucos minutos."
            />
            <Reveal delay={100} className="mt-8">
              <WhatsButton href={whatsappLink}>
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Tirar dúvidas agora
              </WhatsButton>
            </Reveal>
          </div>

          <ul className="space-y-3">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal as="li" key={item.q} delay={i * 60}>
                  <div
                    className={cn(
                      "rounded-3xl border bg-card px-6 shadow-soft transition-colors duration-300",
                      isOpen ? "border-accent/40" : "border-border",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-5 text-left"
                    >
                      <span className="min-w-0 font-semibold text-primary">{item.q}</span>
                      <Plus
                        className={cn(
                          "h-4 w-4 shrink-0 text-accent transition-transform duration-300",
                          isOpen && "rotate-45",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className={cn(
                        "grid overflow-hidden transition-all duration-500",
                        isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <p className="min-h-0 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
