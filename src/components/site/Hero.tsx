import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-premium.jpg";
import { whatsappLink } from "@/lib/site-data";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageLayerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const hero = heroRef.current;
      const image = imageLayerRef.current;
      const content = contentRef.current;
      if (!hero || !image || !content) return;
      const progress = Math.min(Math.max(window.scrollY / hero.offsetHeight, 0), 1);
      image.style.transform = `translate3d(0, ${progress * 9}%, 0)`;
      content.style.transform = `translate3d(0, ${progress * 100}px, 0)`;
      content.style.opacity = String(Math.max(1 - progress * 1.4, 0));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative isolate flex min-h-[760px] overflow-hidden bg-primary text-primary-foreground lg:min-h-screen"
    >
      <div ref={imageLayerRef} className="absolute -inset-[10%] z-0 will-change-transform">
        <img
          src={heroImg}
          alt="Consultório odontológico contemporâneo com arquitetura sofisticada"
          width={1672}
          height={941}
          fetchPriority="high"
          className="hero-ken-burns h-full w-full object-cover object-[62%_center] sm:object-center"
        />
      </div>

      <div
        className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(20,18,14,.96)_0%,rgba(20,18,14,.83)_32%,rgba(20,18,14,.31)_64%,rgba(20,18,14,.16)_100%)] max-sm:bg-[linear-gradient(180deg,rgba(20,18,14,.9)_0%,rgba(20,18,14,.72)_55%,rgba(20,18,14,.88)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-[2] bg-[linear-gradient(180deg,rgba(0,0,0,.28),transparent_32%,transparent_66%,rgba(0,0,0,.72))]"
        aria-hidden="true"
      />
      <div className="grain pointer-events-none absolute inset-0 z-[3] opacity-[.055]" />
      <div className="hero-light-sweep pointer-events-none absolute inset-y-0 left-[34%] z-[3] w-[28%] rotate-[12deg] bg-gradient-to-r from-transparent via-gold/10 to-transparent blur-2xl" />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-[100rem] items-end px-5 pt-32 pb-24 will-change-[transform,opacity] sm:px-8 sm:pb-28 lg:px-12 lg:pt-40 lg:pb-24 xl:px-20"
      >
        <div className="w-full">
          <div className="max-w-5xl">
            <p className="hero-fade-up flex items-center gap-4 text-[.6rem] font-bold tracking-[.24em] text-gold uppercase sm:text-[.68rem]">
              <span className="h-px w-10 bg-current" />
              Odontologia contemporânea · São Paulo
            </p>

            <h1 className="mt-7 max-w-[11ch] text-[3.8rem] leading-[.82] sm:text-[5.8rem] lg:max-w-none lg:text-[7.5rem] xl:text-[8rem]">
              <span className="hero-line block">
                <span>O extraordinário</span>
              </span>
              <span className="hero-line mt-2 block">
                <em className="block font-normal text-gold">começa no detalhe.</em>
              </span>
            </h1>

            <div className="hero-fade-up hero-fade-up-delay mt-8 grid max-w-3xl gap-7 border-t border-primary-foreground/20 pt-7 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-lg text-sm leading-7 text-primary-foreground/68 sm:text-base">
                Tecnologia, arquitetura e excelência clínica reunidas em uma experiência desenhada
                para mudar sua relação com a odontologia.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-13 items-center gap-3 rounded-full bg-gold px-6 text-[.65rem] font-bold tracking-[.1em] text-gold-foreground uppercase transition-all duration-500 hover:-translate-y-1 hover:bg-primary-foreground"
                >
                  Agendar avaliação
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
                <a
                  href="#experiencia"
                  aria-label="Conhecer a experiência Odonto Aurora"
                  className="group grid h-13 w-13 place-items-center rounded-full border border-primary-foreground/35 text-primary-foreground transition-all duration-500 hover:scale-105 hover:border-gold hover:bg-gold hover:text-gold-foreground"
                >
                  <Play className="h-4 w-4 fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-fade-right absolute right-8 bottom-8 z-10 hidden items-center gap-5 lg:flex xl:right-14">
        <div className="text-right">
          <p className="text-[.55rem] font-bold tracking-[.2em] text-gold uppercase">
            Método Aurora
          </p>
          <p className="mt-1 text-[.62rem] tracking-[.08em] text-primary-foreground/55 uppercase">
            Diagnóstico · Planejamento · Cuidado
          </p>
        </div>
        <div className="hero-orbit relative grid h-20 w-20 place-items-center rounded-full border border-primary-foreground/25">
          <span className="absolute inset-2 rounded-full border border-gold/35" />
          <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_18px_5px_rgb(190_153_104/.45)]" />
        </div>
      </div>

      <a
        href="#clinica"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[.5rem] font-bold tracking-[.2em] text-primary-foreground/50 uppercase md:flex"
      >
        Explore
        <ArrowDown className="hero-scroll-arrow h-3.5 w-3.5" />
      </a>
    </section>
  );
}
