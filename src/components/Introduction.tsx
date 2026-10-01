import { Arrow, DiamondRule, Label, Reveal } from "./ui";

export default function Introduction() {
  return (
    <section id="introduction" className="bg-cream py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <Reveal>
          <DiamondRule />
        </Reveal>
        <div className="mt-16 grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Reveal>
              <Label>Meet Jen</Label>
              <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-[3.6rem] text-ink max-w-[12ch]">
                This Is More Than a Reading.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 text-lg sm:text-xl font-serif italic leading-relaxed text-stone max-w-xl">
                Some experiences are difficult to explain until you’ve experienced
                them yourself.
              </p>
              <p className="mt-6 max-w-xl text-[1.02rem] leading-[1.8] text-stone">
                Jen’s work can be difficult to put into one simple category,
                because her experiences and abilities extend across different
                forms of intuitive work. What she offers is not a formula and not
                a performance. It is a deeply personal setting in which intuitive
                guidance, mediumship, energetic awareness, and spiritual
                exploration can meet — according to the person who arrives.
              </p>
              <p className="mt-5 max-w-xl text-[1.02rem] leading-[1.8] text-stone">
                Clients often say the same thing afterward: they expected a
                reading. What they received was an experience.
              </p>
              <a href="#about" className="btn-ghost mt-10">
                Meet Jen
                <Arrow />
              </a>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={180}>
              <figure className="relative">
                <div className="aspect-[4/5] overflow-hidden bg-ivory-2">
                  <img
                    src="/images/jen-about.jpg"
                    alt="Portrait of Jen"
                    className="h-full w-full object-cover object-[50%_20%]"
                  />
                </div>
                <figcaption className="mt-5 flex items-end justify-between gap-6">
                  <span className="font-serif italic text-xl text-stone">
                    Long Island, New York
                  </span>
                  <span className="label !text-[10px] text-mist">Intuitive Designs by Jen</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
