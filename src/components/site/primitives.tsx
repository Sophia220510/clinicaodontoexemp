import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Scroll-reveal wrapper: fade + slide, re-animating on scroll up and down. */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [dir, setDir] = useState<"up" | "down">("up");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const rect = entry.boundingClientRect;
          // Enters from below the fold -> slides up; from above -> slides down.
          setDir(rect.top > window.innerHeight * 0.5 ? "up" : "down");
          setVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Component = Tag as any;
  return (
    <Component
      ref={ref as any}
      data-visible={visible}
      data-dir={dir}
      style={{ transitionDelay: `${visible ? delay : 0}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Component>
  );
}


/** Section heading block with eyebrow + title + optional lead. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.22em] uppercase",
          tone === "dark" ? "text-gold" : "text-accent",
        )}
      >
        <span className="h-px w-6 bg-current" />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-primary-foreground/75" : "text-muted-foreground",
          )}
        >
          {lead}
        </p>
      ) : null}
    </Reveal>
  );
}

/** Count-up number, animates when scrolled into view. */
export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const duration = 1500;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(value * eased));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

/** Wordmark logo — abstract "V" vertex + tooth silhouette. */
export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className={cn("h-9 w-9", tone === "dark" ? "text-gold" : "text-accent")}
      >
        <path
          d="M20 3.5c5.6 0 9.5 3.4 9.5 8.6 0 4-1.4 6.7-2.3 11.6-.8 4.4-1.2 12.3-4.3 12.3-2.1 0-2-5.6-2.9-5.6s-.8 5.6-2.9 5.6c-3.1 0-3.5-7.9-4.3-12.3-.9-4.9-2.3-7.6-2.3-11.6 0-5.2 3.9-8.6 9.5-8.6Z"
          fill="currentColor"
          opacity="0.16"
        />
        <path
          d="M20 4.5c5.2 0 8.8 3.1 8.8 7.8 0 3.8-1.4 6.5-2.3 11.3-.8 4.3-1.1 11.5-3.7 11.5-1.7 0-1.7-5.3-2.8-5.3s-1.1 5.3-2.8 5.3c-2.6 0-2.9-7.2-3.7-11.5-.9-4.8-2.3-7.5-2.3-11.3 0-4.7 3.6-7.8 8.8-7.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M13 12.5 20 24l7-11.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-[1.15rem] font-semibold tracking-tight",
            tone === "dark" ? "text-primary-foreground" : "text-primary",
          )}
        >
          Odonto
        </span>
        <span
          className={cn(
            "block text-[0.6rem] font-semibold tracking-[0.3em] uppercase",
            tone === "dark" ? "text-primary-foreground/60" : "text-muted-foreground",
          )}
        >
          Aurora
        </span>
      </span>
    </span>
  );
}

export function WhatsButton({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "gold";
  className?: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300",
        variant === "solid" &&
          "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:bg-accent hover:shadow-lift",
        variant === "outline" &&
          "border border-primary/20 bg-background text-primary hover:-translate-y-0.5 hover:border-accent hover:text-accent",
        variant === "gold" &&
          "bg-gold text-gold-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </a>
  );
}
