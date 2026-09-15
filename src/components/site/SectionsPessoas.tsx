import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Quote } from "lucide-react";
import d1 from "@/assets/dentist-1.jpg";
import d2 from "@/assets/dentist-2.jpg";
import d3 from "@/assets/dentist-3.jpg";
import d4 from "@/assets/dentist-4.jpg";
import { DEPOIMENTOS, EQUIPE, FAQ, whatsappLink } from "@/lib/site-data";
import { Reveal, SectionHeading, WhatsButton } from "./primitives";
import { cn } from "@/lib/utils";

const photos = [d1, d2, d3, d4];

export function Equipe() {
  return (
    <section id="especialistas" className="scroll-mt-24 py-24 sm:py-32 lg:py-44">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <SectionHeading
            eyebrow="Especialistas"
            title={
              <>
                Múltiplos olhares.
                <br />
                <em className="font-normal text-accent">Um só plano de cuidado.</em>
              </>
            }
            lead="Nossa atuação multidisciplinar conecta diferentes especialidades em torno do mesmo objetivo: decisões consistentes e uma experiência tranquila para você."
          />
          <Reveal className="lg:justify-self-end">
            <WhatsButton href={whatsappLink} variant="outline">
              Conhecer a equipe
            </WhatsButton>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {EQUIPE.map((member, index) => (
            <Reveal key={member.name} delay={index * 80}>
              <article className={cn("group", index % 2 === 1 && "lg:mt-16")}>
                <div className="overflow-hidden rounded-[1.4rem] bg-muted">
                  <img
                    src={photos[index]}
                    alt={`Profissional da área de ${member.name}`}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="image-zoom aspect-[4/5] w-full object-cover object-top grayscale-[15%]"
                  />
                </div>
                <div className="border-b border-border py-5">
                  <p className="text-[.57rem] font-bold tracking-[.18em] text-gold uppercase">
                    {member.role}
                  </p>
                  <h3 className="mt-2 text-2xl text-primary sm:text-3xl">{member.name}</h3>
                  <p className="mt-2 hidden text-sm leading-6 text-muted-foreground sm:block">
                    {member.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Depoimentos() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(
      () => setCurrent((value) => (value + 1) % DEPOIMENTOS.length),
      7000,
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  const move = (direction: number) =>
    setCurrent((value) => (value + direction + DEPOIMENTOS.length) % DEPOIMENTOS.length);
  const item = DEPOIMENTOS[current]!;
  return (
    <section className="bg-secondary py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr] lg:gap-24">
          <SectionHeading
            eyebrow="Histórias reais"
            title={
              <>
                Confiança se constrói <em className="font-normal text-accent">na experiência.</em>
              </>
            }
          />
          <Reveal>
            <div
              className="relative border-t border-primary/20 pt-10"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <Quote className="absolute top-8 right-0 h-12 w-12 text-gold/35" strokeWidth={1} />
              <blockquote
                key={current}
                className="max-w-4xl font-display text-3xl leading-[1.15] text-primary sm:text-4xl lg:text-5xl"
              >
                “{item.text}”
              </blockquote>
              <div className="mt-9 flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="text-sm font-bold text-primary">{item.name}</p>
                  <p className="mt-1 text-[.6rem] font-bold tracking-[.14em] text-muted-foreground uppercase">
                    {item.role}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => move(-1)}
                    aria-label="Depoimento anterior"
                    className="grid h-11 w-11 place-items-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => move(1)}
                    aria-label="Próximo depoimento"
                    className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-accent"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="mt-8 flex gap-2">
                {DEPOIMENTOS.map((review, index) => (
                  <button
                    key={review.name}
                    type="button"
                    aria-label={`Ver depoimento ${index + 1}`}
                    onClick={() => setCurrent(index)}
                    className={cn(
                      "h-1 rounded-full transition-all",
                      index === current ? "w-12 bg-gold" : "w-5 bg-primary/15",
                    )}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="scroll-mt-24 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-24 lg:px-12">
        <div>
          <SectionHeading
            eyebrow="Antes de agendar"
            title={
              <>
                Respostas claras para uma escolha{" "}
                <em className="font-normal text-accent">tranquila.</em>
              </>
            }
            lead="Se sua pergunta não estiver aqui, nossa recepção pode orientar você pelo WhatsApp."
          />
          <Reveal className="mt-8">
            <WhatsButton href={whatsappLink} variant="outline">
              Falar com a recepção
            </WhatsButton>
          </Reveal>
        </div>
        <ul className="border-t border-border">
          {FAQ.map((item, index) => {
            const expanded = open === index;
            return (
              <Reveal as="li" key={item.q}>
                <div className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpen(expanded ? -1 : index)}
                    aria-expanded={expanded}
                    className="grid w-full grid-cols-[1fr_auto] items-center gap-5 py-7 text-left"
                  >
                    <span className="font-display text-2xl text-primary sm:text-3xl">{item.q}</span>
                    <Plus
                      className={cn(
                        "h-5 w-5 text-gold transition-transform duration-500",
                        expanded && "rotate-45",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-500",
                      expanded ? "grid-rows-[1fr] pb-7 opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="min-h-0 max-w-2xl overflow-hidden text-sm leading-7 text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
