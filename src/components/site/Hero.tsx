import { CheckCircle2, ScanLine, Sparkles, Boxes, Activity } from "lucide-react";
import heroImg from "@/assets/hero-dentist.jpg";
import { TRUST_BAR, whatsappLink } from "@/lib/site-data";
import { Reveal, WhatsButton } from "./primitives";

const SELOS = [
  "Atendimento Humanizado",
  "Tecnologia Odontológica",
  "Mais de 5.000 avaliações no Google",
];

const FLOATING = [
  { icon: ScanLine, label: "Escaneamento digital", pos: "left-[-4%] top-[18%]", delay: "0s" },
  { icon: Sparkles, label: "Sorriso planejado", pos: "right-[-6%] top-[8%]", delay: "1.2s" },
  { icon: Activity, label: "Raio-X digital", pos: "right-[-4%] bottom-[26%]", delay: "2.1s" },
  { icon: Boxes, label: "Escaneamento 3D", pos: "left-[-2%] bottom-[10%]", delay: "0.6s" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 -right-32 h-[36rem] w-[36rem] rounded-full bg-accent/12 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-primary/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/8 px-4 py-1.5 text-[0.7rem] font-semibold tracking-[0.18em] text-gold-foreground uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Odontologia moderna · Jardim Aurora, São Paulo
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl leading-[1.05] text-primary sm:text-5xl lg:text-[3.85rem]">
                Seu sorriso merece{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-accent">
                    tecnologia, cuidado e confiança.
                  </span>
                  <span
                    className="absolute inset-x-0 bottom-1 z-0 h-3 rounded-full bg-gold/25"
                    aria-hidden="true"
                  />
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Oferecemos tratamentos odontológicos modernos com atendimento humanizado,
                profissionais qualificados e tecnologia para cuidar da saúde e da estética
                do seu sorriso.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <WhatsButton href={whatsappLink}>Agendar Consulta</WhatsButton>
                <WhatsButton href={whatsappLink} variant="outline">
                  Falar no WhatsApp
                </WhatsButton>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-10 grid gap-3 sm:grid-cols-3">
                {SELOS.map((selo) => (
                  <li
                    key={selo}
                    className="flex items-start gap-2 rounded-2xl border border-border bg-card/70 p-3.5 text-sm font-medium text-primary shadow-soft"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="min-w-0">{selo}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                className="absolute -inset-3 rounded-[2.75rem] border border-gold/30"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[2.25rem] shadow-lift">
                <img
                  src={heroImg}
                  alt="Dentista atendendo uma paciente em consultório odontológico moderno e iluminado"
                  width={1280}
                  height={1600}
                  className="h-[26rem] w-full object-cover object-top sm:h-[32rem] lg:h-[38rem]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              {FLOATING.map(({ icon: Icon, label, pos, delay }) => (
                <div
                  key={label}
                  style={{ animationDelay: delay }}
                  className={`float-soft glass-card absolute hidden items-center gap-2 rounded-2xl px-3.5 py-2.5 shadow-soft sm:flex ${pos}`}
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold text-primary">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-7xl px-5 lg:mt-20 lg:px-8">
        <Reveal className="rounded-3xl border border-border bg-muted/70 px-6 py-5">
          <ul className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-5">
            {TRUST_BAR.map((item) => (
              <li
                key={item}
                className="text-xs font-semibold tracking-[0.12em] text-primary/80 uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
