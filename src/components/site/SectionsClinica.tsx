import { useMemo, useState } from "react";
import {
  ShieldCheck,
  HeartHandshake,
  Microscope,
  Sparkles,
  Search,
  X,
  Anchor,
  Layers,
  Grid3x3,
  Smile,
  AlignCenter,
  Sun,
  Brush,
  Stethoscope,
  Siren,
  Syringe,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import teamImg from "@/assets/team.jpg";
import clinic1 from "@/assets/clinic-1.jpg";
import clinic2 from "@/assets/clinic-2.jpg";
import {
  DIFERENCIAIS,
  PROCEDIMENTOS,
  SELOS,
  STATS,
  whatsappLink,
  whatsappLinkFor,
} from "@/lib/site-data";
import { Counter, Reveal, SectionHeading, WhatsButton } from "./primitives";

const PROCEDIMENTO_ICONS: Record<string, LucideIcon> = {
  "implante-dentario": Anchor,
  "facetas-dentarias": Sparkles,
  invisalign: Smile,
  "aparelho-ortodontico": AlignCenter,
  "clareamento-dental": Sun,
  "limpeza-dental": Brush,
  "tratamento-de-canal": Syringe,
  "protese-dentaria": Layers,
  "protese-protocolo": Grid3x3,
  "consulta-geral": Stethoscope,
  "emergencia-odontologica": Siren,
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

const PILARES = [
  { icon: HeartHandshake, title: "Atendimento humanizado", text: "Tempo de escuta, linguagem clara e respeito ao seu ritmo." },
  { icon: ShieldCheck, title: "Biossegurança rigorosa", text: "Esterilização rastreada e protocolos revisados a cada atendimento." },
  { icon: Microscope, title: "Tecnologia aplicada", text: "Diagnóstico digital que aumenta a precisão de cada tratamento." },
  { icon: Sparkles, title: "Compromisso com resultado", text: "Planejamento previsível e acompanhamento de longo prazo." },
];

export function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-28 bg-muted/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[2.25rem] shadow-lift">
              <img
                src={teamImg}
                alt="Equipe de dentistas da Odonto Aurora na recepção da clínica"
                width={1600}
                height={1104}
                loading="lazy"
                className="h-[22rem] w-full object-cover sm:h-[28rem]"
              />
            </div>
            <div className="absolute -bottom-10 -right-4 hidden w-56 overflow-hidden rounded-3xl border-4 border-background shadow-lift sm:block">
              <img
                src={clinic1}
                alt="Recepção moderna e acolhedora da clínica"
                width={1200}
                height={900}
                loading="lazy"
                className="h-40 w-full object-cover"
              />
            </div>
            <div className="absolute -top-8 -left-4 hidden w-44 overflow-hidden rounded-3xl border-4 border-background shadow-lift lg:block">
              <img
                src={clinic2}
                alt="Consultório odontológico equipado com scanner intraoral"
                width={1200}
                height={900}
                loading="lazy"
                className="h-32 w-full object-cover"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow="A Clínica"
              title={
                <>
                  Uma clínica construída sobre <em className="text-accent">confiança</em> e
                  cuidado.
                </>
              }
              lead="A Odonto Aurora nasceu no coração do Jardim Aurora, em São Paulo, com o propósito de oferecer odontologia moderna, acessível e humanizada."
            />

            <Reveal delay={100}>
              <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                Nossa equipe reúne profissionais qualificados, estrutura moderna e tecnologia
                para proporcionar tratamentos completos com segurança, conforto e excelência.
                Cada atendimento é pensado de forma personalizada, para que você tenha uma
                experiência acolhedora e resultados de alta qualidade.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {PILARES.map(({ icon: Icon, title, text }, i) => (
                <Reveal as="li" key={title} delay={i * 90}>
                  <div className="lift h-full rounded-3xl border border-border bg-card p-5 shadow-soft">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-base text-primary">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {SELOS.map((selo) => (
                  <li
                    key={selo}
                    className="rounded-full border border-gold/40 bg-gold/8 px-3.5 py-1.5 text-xs font-semibold text-gold-foreground"
                  >
                    {selo}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="rounded-3xl border border-border bg-card p-7 text-center shadow-soft">
                <p className="font-display text-4xl font-semibold text-primary">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Diferenciais() {
  return (
    <section id="diferenciais" className="scroll-mt-28 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que os pacientes escolhem a Odonto Aurora"
          lead="Detalhes que mudam a experiência: do primeiro contato pelo WhatsApp à última consulta de manutenção."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIAIS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 4) * 90}>
              <div className="lift group h-full rounded-3xl border border-border bg-card p-6 shadow-soft hover:border-accent/40">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/6 text-2xl transition-colors group-hover:bg-accent/12">
                  🦷
                </span>
                <h3 className="mt-5 text-lg text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Tratamentos() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return PROCEDIMENTOS;
    return PROCEDIMENTOS.filter(
      (p) => normalize(p.title).includes(q) || normalize(p.description).includes(q),
    );
  }, [query]);

  return (
    <section id="tratamentos" className="scroll-mt-28 bg-muted/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Tratamentos"
          title="Todas as especialidades em um só lugar"
          lead="Digite o procedimento que você procura ou explore os cards abaixo — da prevenção à reabilitação completa."
        />

        <Reveal delay={60} className="mx-auto mt-10 max-w-xl">
          <div className="relative">
            <Search
              className="pointer-events-none absolute top-1/2 left-5 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar um procedimento — ex: implante, clareamento..."
              aria-label="Buscar procedimento odontológico"
              className="w-full rounded-full border border-border bg-card py-3.5 pr-12 pl-12 text-sm text-primary shadow-soft outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Limpar busca"
                className="absolute top-1/2 right-4 grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            ) : null}
          </div>
        </Reveal>

        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((proc, i) => {
              const Icon = PROCEDIMENTO_ICONS[proc.slug] ?? Sparkles;
              return (
                <Reveal key={proc.slug} delay={(i % 3) * 90}>
                  <article className="lift group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft hover:border-accent/40">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg text-primary">{proc.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {proc.description}
                    </p>
                    <a
                      href={whatsappLinkFor(proc.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/30 px-4 py-2 text-xs font-semibold text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      Saiba mais
                    </a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        ) : (
          <Reveal className="mt-10 rounded-3xl border border-dashed border-border bg-card/60 p-10 text-center">
            <p className="text-sm text-muted-foreground">
              Nenhum procedimento encontrado para &ldquo;{query}&rdquo;. Fale com a gente pelo
              WhatsApp e te ajudamos a encontrar o tratamento ideal.
            </p>
          </Reveal>
        )}

        <Reveal delay={120} className="mt-12 text-center">
          <WhatsButton href={whatsappLink}>
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Falar com um especialista pelo WhatsApp
          </WhatsButton>
        </Reveal>
      </div>
    </section>
  );
}
