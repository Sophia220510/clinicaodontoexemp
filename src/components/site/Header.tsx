import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, whatsappLink } from "@/lib/site-data";
import { Logo } from "./primitives";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 40);
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(distance > 0 ? Math.min(window.scrollY / distance, 1) : 0);
      const marker = window.innerHeight * 0.38;
      const current = NAV.map(({ id }) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section))
        .filter((section) => section.getBoundingClientRect().top <= marker)
        .at(-1);
      setActive(current?.id ?? "");
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

  const close = () => setOpen(false);
  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
          scrolled || open
            ? "border-border/70 bg-background/92 py-3 shadow-soft backdrop-blur-xl"
            : "border-primary-foreground/10 bg-transparent py-5",
        )}
      >
        <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
          <a href="#top" aria-label="Odonto Aurora — início" onClick={close}>
            <Logo tone={scrolled || open ? "light" : "dark"} />
          </a>
          <nav className="hidden items-center gap-7 xl:flex" aria-label="Navegação principal">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "relative py-2 text-[.68rem] font-bold tracking-[.08em] uppercase transition-colors",
                  scrolled
                    ? "text-muted-foreground hover:text-primary"
                    : "text-primary-foreground/65 hover:text-primary-foreground",
                  active === item.id && (scrolled ? "text-primary" : "text-primary-foreground"),
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-0 -bottom-1 h-px origin-left bg-gold transition-transform duration-500",
                    active === item.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden min-h-11 items-center rounded-full px-5 text-[.66rem] font-bold tracking-[.1em] uppercase transition-all sm:inline-flex",
                scrolled
                  ? "bg-primary text-primary-foreground hover:bg-accent"
                  : "bg-primary-foreground text-primary hover:bg-gold",
              )}
            >
              Agendar avaliação
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className={cn(
                "grid h-11 w-11 place-items-center rounded-full border xl:hidden",
                scrolled || open
                  ? "border-primary/15 text-primary"
                  : "border-primary-foreground/25 text-primary-foreground",
              )}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <span
          className="absolute inset-x-0 -bottom-px h-px origin-left bg-gold"
          style={{ transform: `scaleX(${progress})` }}
          aria-hidden="true"
        />
      </header>

      <div
        className={cn(
          "fixed inset-x-0 top-[65px] z-40 border-b border-border bg-background/98 px-5 py-6 shadow-lift backdrop-blur-xl transition-all duration-500 xl:hidden",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav className="mx-auto grid max-w-2xl" aria-label="Navegação mobile">
          {NAV.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={close}
              className="flex items-center justify-between border-b border-border/70 py-3.5 font-display text-2xl text-primary"
            >
              {item.label}
              <span className="font-sans text-[.6rem] text-muted-foreground">0{index + 1}</span>
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex min-h-12 items-center justify-center rounded-full bg-primary text-xs font-bold tracking-[.1em] text-primary-foreground uppercase"
          >
            Agendar avaliação
          </a>
        </nav>
      </div>
    </>
  );
}
