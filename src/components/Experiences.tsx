import { experiences } from "../data";
import { Arrow, Label, Reveal } from "./ui";

export default function Experiences() {
  return (
    <section id="experiences" className="bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <Label>The Work</Label>
              <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] text-ink max-w-[16ch]">
                What Makes the Experience Different
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={80}>
              <p className="text-[1.05rem] leading-[1.8] text-stone max-w-md lg:ml-auto">
                Jen does not offer a generic psychic reading. Her work is a
                personal encounter — shaped by the person in front of her, and by
                the many ways intuition can arrive.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {experiences.map((item, i) => (
            <Reveal key={item.n} delay={i * 70}>
              <article className="card-experience group h-full border border-ink/10 bg-cream p-8 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="font-serif italic text-gold text-xl">{item.n}</span>
                  <span className="h-px w-10 bg-gold/40 transition-all duration-500 group-hover:w-16" />
                </div>
                <h3 className="mt-8 font-serif text-[1.7rem] leading-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-[1.75] text-stone">
                  {item.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex justify-center">
            <a href="#how" className="btn-ghost">
              Explore the Experiences
              <Arrow />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
