import { Label, Reveal } from "./ui";

type Props = {
  onBook: () => void;
};

export default function Contact({ onBook }: Props) {
  return (
    <section id="contact" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-12 border-t border-ink/10 pt-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Label>Contact</Label>
              <h2 className="display mt-5 text-4xl sm:text-5xl text-ink max-w-[12ch]">
                A Quiet Way In
              </h2>
              <p className="mt-6 text-[1.02rem] leading-[1.8] text-stone max-w-md">
                Whether you are ready to book, or simply want to ask a question
                first, Jen would rather you write than wonder.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-10">
            <Reveal delay={80}>
              <div>
                <p className="label">Practice</p>
                <p className="mt-3 font-serif text-2xl text-ink">
                  In person, Long Island
                </p>
                <p className="mt-2 text-stone">Massapequa, New York</p>
                <p className="mt-1 text-stone">Remote sessions worldwide</p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div>
                <p className="label">Connect</p>
                <a
                  href="https://www.instagram.com/intuitive_designs_by_jen/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block font-serif text-2xl text-ink hover:text-gold transition-colors"
                >
                  @intuitive_designs_by_jen
                </a>
                <button
                  type="button"
                  onClick={onBook}
                  className="mt-4 text-left text-[0.95rem] text-stone underline decoration-gold/50 underline-offset-4 hover:text-ink"
                >
                  Write to Jen
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
