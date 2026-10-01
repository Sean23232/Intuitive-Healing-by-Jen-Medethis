import { steps } from "../data";
import { cn } from "../utils/cn";
import { Label, Reveal } from "./ui";

export default function HowItWorks() {
  return (
    <section id="how" className="bg-cream py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <Reveal>
          <div className="max-w-2xl">
            <Label>The Process</Label>
            <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-[3.3rem] text-ink">
              How It Works
            </h2>
            <p className="mt-6 text-[1.05rem] leading-[1.8] text-stone max-w-lg">
              Simple on purpose. The experience itself is where the depth lives —
              not in the booking.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-0 md:grid-cols-3 border-t border-ink/10">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 100}
              className={cn(
                i !== 0 && "border-t border-ink/10 md:border-t-0 md:border-l"
              )}
            >
              <article className="px-0 py-12 md:px-10">
                <p className="font-serif italic text-5xl text-gold/80">{s.n}</p>
                <h3 className="mt-6 font-serif text-2xl sm:text-[1.7rem] text-ink">
                  {s.title}
                </h3>
                <p className="mt-4 text-[1rem] leading-[1.75] text-stone max-w-sm">
                  {s.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
