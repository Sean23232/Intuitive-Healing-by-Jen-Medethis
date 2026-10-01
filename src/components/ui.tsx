import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

export function useInView<T extends HTMLElement>(once = true) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setShown(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return { ref, shown };
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, shown } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("h-full", className)}
      style={shown ? undefined : { opacity: 0, transform: "translateY(28px)" }}
    >
      <div
        className={cn(shown && "reveal", "h-full")}
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}

export function Label({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("label", className)}>{children}</p>;
}

export function DiamondRule({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-4" aria-hidden>
      <span
        className={cn("h-px w-10 sm:w-16", light ? "bg-ivory/25" : "bg-ink/15")}
      />
      <span
        className={cn(
          "h-1.5 w-1.5 rotate-45",
          light ? "bg-gold-2" : "bg-gold"
        )}
      />
      <span
        className={cn("h-px w-10 sm:w-16", light ? "bg-ivory/25" : "bg-ink/15")}
      />
    </div>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-3.5 w-3.5", className)}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
