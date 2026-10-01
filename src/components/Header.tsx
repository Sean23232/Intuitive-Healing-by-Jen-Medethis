import { useEffect, useState } from "react";
import { nav } from "../data";
import { cn } from "../utils/cn";

type Props = {
  onBook: () => void;
};

export default function Header({ onBook }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled || open
            ? "bg-ivory/90 backdrop-blur-md border-b border-ink/10"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#home" className="group relative z-50" onClick={() => setOpen(false)}>
            <span className="font-serif text-[1.55rem] leading-none tracking-[0.28em] text-ink">
              JEN
            </span>
            <span className="mt-1 block text-[9px] tracking-[0.38em] text-taupe uppercase">
              Intuitive Healing
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] tracking-[0.22em] uppercase text-stone/80 transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBook}
              className="hidden sm:inline-flex btn-primary !py-3 !px-5"
            >
              Book an Experience
            </button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex w-6 flex-col gap-[6px]">
                <span
                  className={cn(
                    "block h-px w-full bg-ink transition-transform duration-300",
                    open && "translate-y-[3.5px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "block h-px w-full bg-ink transition-transform duration-300",
                    open && "-translate-y-[3.5px] -rotate-45"
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-ivory transition-all duration-500 lg:hidden",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="flex h-full flex-col justify-between px-8 pb-10 pt-28">
          <nav className="flex flex-col gap-1">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl text-ink transition-colors hover:text-gold"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div>
            <p className="label mb-5">Begin</p>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onBook();
              }}
              className="btn-primary w-full"
            >
              Book an Experience
            </button>
            <a
              href="https://www.instagram.com/intuitive_designs_by_jen/"
              target="_blank"
              rel="noreferrer"
              className="mt-6 block text-center text-[11px] tracking-[0.22em] uppercase text-taupe"
            >
              @intuitive_designs_by_jen
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
