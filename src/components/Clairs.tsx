import { clairs } from "../data";
import { DiamondRule, Label, Reveal } from "./ui";

export default function Clairs() {
  return (
    <section
      id="clairs"
      className="relative overflow-hidden bg-charcoal text-ivory grain py-24 sm:py-32 lg:py-40"
    >
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Label className="!text-gold-2">The Clairs</Label>
              <h2 className="display mt-6 text-4xl sm:text-5xl lg:text-[3.35rem] text-ivory max-w-[12ch]">
                I Don’t Experience Intuition in Just One Way.
              </h2>
              <p className="mt-8 max-w-md text-[1.05rem] leading-[1.8] text-ivory/70">
                People often want a single word for what Jen does. She doesn’t
                have one — because information doesn’t arrive in one way.
              </p>
              <p className="mt-5 max-w-md text-[1.02rem] leading-[1.8] text-ivory/55">
                The “Clairs” are not presented here as scientific facts. They are
                the language Jen uses to describe her own intuitive experiences
                and practice: seeing, hearing, feeling, smelling, tasting,
                knowing.
              </p>
              <div className="mt-10">
                <DiamondRule light />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul>
              {clairs.map((c, i) => (
                <li key={c.name}>
                  <Reveal delay={i * 60}>
                    <article className="clair-row group grid grid-cols-1 sm:grid-cols-[8.5rem_1fr] gap-2 sm:gap-8 border-t border-ivory/12 py-8 sm:py-10">
                      <p className="label !text-gold-2/80 pt-2">{c.sense}</p>
                      <div>
                        <h3 className="clair-name font-serif italic text-3xl sm:text-4xl text-ivory transition-colors duration-500">
                          {c.name}
                        </h3>
                        <p className="mt-3 max-w-lg text-[0.98rem] leading-[1.75] text-ivory/60">
                          {c.text}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
            <div className="border-t border-ivory/12" />
          </div>
        </div>
      </div>
    </section>
  );
}
