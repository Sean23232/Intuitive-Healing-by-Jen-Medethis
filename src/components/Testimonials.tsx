import { useEffect, useState } from "react";
import { testimonials } from "../data";
import { Arrow, Label, Reveal } from "./ui";
import { cn } from "../utils/cn";

type Props = {
  onBook: () => void;
};

export default function Testimonials({ onBook }: Props) {
  const [index, setIndex] = useState(0);
  const [touch, setTouch] = useState<number | null>(null);
  const current = testimonials[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-ivory-2 py-24 sm:py-32 lg:py-40"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        aria-hidden
      >
        <img
          src="/images/window-light.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-ivory-2/82" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1100px] px-5 sm:px-10">
        <Reveal>
          <div className="text-center">
            <Label>Client Experiences</Label>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] text-ink">
              The Experience Speaks for Itself.
            </h2>
          </div>
        </Reveal>

        <div
          className="mt-16 sm:mt-20"
          onTouchStart={(e) => setTouch(e.changedTouches[0].clientX)}
          onTouchEnd={(e) => {
            if (touch == null) return;
            const dx = e.changedTouches[0].clientX - touch;
            if (dx > 50) prev();
            if (dx < -50) next();
            setTouch(null);
          }}
        >
          <Reveal>
            <figure className="relative mx-auto max-w-3xl text-center">
              <span
                className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 font-serif text-8xl leading-none text-gold/25"
                aria-hidden
              >
                “
              </span>
              <blockquote
                key={current.name}
                className="font-serif text-[1.45rem] sm:text-[1.75rem] lg:text-[2rem] leading-[1.45] text-ink italic"
              >
                {current.quote}
              </blockquote>
              <figcaption className="mt-10">
                <p className="font-serif text-2xl text-ink">{current.name}</p>
                <p className="mt-1 label !text-mist">{current.place}</p>
              </figcaption>
            </figure>
          </Reveal>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13 8H3M7 4L3 8l4 4"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Show ${t.name}'s experience`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500",
                    i === index ? "w-8 bg-gold" : "w-1.5 bg-ink/20"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center border border-ink/15 text-ink transition-colors hover:border-gold hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <Reveal>
          <div className="mt-16 flex justify-center">
            <button type="button" onClick={onBook} className="btn-ghost">
              What Could Your Experience Be?
              <Arrow />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
