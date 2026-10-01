import { Arrow } from "./ui";

type Props = {
  onBook: () => void;
};

export default function Hero({ onBook }: Props) {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] bg-ivory grain overflow-hidden"
    >
      <div className="relative z-10 grid min-h-[100svh] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="flex flex-col justify-end lg:justify-center px-5 sm:px-10 lg:px-16 xl:px-24 pt-28 pb-12 lg:py-24">
          <p
            className="label mb-7 reveal"
            style={{ animationDelay: "120ms" }}
          >
            Intuitive Healing by Jen
          </p>
          <h1
            className="display text-[3.15rem] sm:text-6xl md:text-7xl xl:text-[5.4rem] text-ink max-w-[11ch] reveal"
            style={{ animationDelay: "220ms" }}
          >
            An Experience Beyond the Ordinary.
          </h1>
          <p
            className="mt-8 text-[12px] sm:text-[13px] tracking-[0.18em] uppercase text-taupe reveal"
            style={{ animationDelay: "340ms" }}
          >
            Intuitive Guidance <span className="mx-2 text-gold">•</span> Energetic
            Alignment <span className="mx-2 text-gold">•</span> Deeper Clarity
          </p>
          <p
            className="mt-8 max-w-md text-[1.02rem] leading-[1.75] text-stone reveal"
            style={{ animationDelay: "440ms" }}
          >
            Every person arrives with a different story. Jen’s work creates space
            to explore the intuitive, energetic, and deeply personal experiences
            that can help you find clarity, understanding, and connection.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row gap-3 reveal"
            style={{ animationDelay: "540ms" }}
          >
            <button type="button" onClick={onBook} className="btn-primary">
              Book an Experience
              <Arrow />
            </button>
            <a href="#experiences" className="btn-ghost">
              Discover Jen’s Work
            </a>
          </div>
        </div>

        <div className="relative min-h-[52vh] lg:min-h-[100svh] order-first lg:order-none">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/jen-hero.jpg"
              alt="Jen, founder of Intuitive Healing"
              className="h-full w-full object-cover object-[50%_18%] hero-kenburns"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/20 to-transparent lg:bg-gradient-to-r lg:from-ivory lg:via-ivory/10 lg:to-transparent" />
          </div>
        </div>
      </div>

      <a
        href="#introduction"
        className="absolute bottom-7 left-5 sm:left-10 lg:left-16 xl:left-24 z-20 hidden sm:flex items-center gap-4 text-[10px] tracking-[0.32em] uppercase text-taupe"
      >
        <span className="relative h-12 w-px bg-ink/20">
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold scroll-dot" />
        </span>
        Scroll
      </a>
    </section>
  );
}
