import { Arrow, Label, Reveal } from "./ui";

export default function AboutJen() {
  return (
    <section id="about" className="bg-ivory py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-6 lg:pr-8">
            <Reveal>
              <div className="aspect-[4/5] overflow-hidden bg-ivory-2">
                <img
                  src="/images/jen-lifestyle.jpg"
                  alt="Jen standing by a window"
                  className="h-full w-full object-cover object-[50%_30%]"
                />
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="relative mx-auto -mt-16 w-[58%] overflow-hidden border-[10px] border-ivory shadow-[0_20px_50px_-24px_rgba(22,19,16,0.4)] sm:absolute sm:bottom-10 sm:right-[-8%] sm:mx-0 sm:mt-0 sm:w-[42%] sm:border-8">
                <img
                  src="/images/jen-close.jpg"
                  alt="Close portrait of Jen"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pt-8">
            <Reveal>
              <Label>About Jen</Label>
              <h2 className="display mt-5 text-4xl sm:text-5xl lg:text-[3.35rem] text-ink max-w-[14ch]">
                Meet the Person Behind the Experience.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 font-serif italic text-xl leading-relaxed text-stone">
                Jen has spent most of her life in rooms where people tell the
                truth.
              </p>
              <div className="mt-6 space-y-5 text-[1.02rem] leading-[1.8] text-stone max-w-xl">
                <p>
                  For years that room was a salon chair on Long Island — a
                  surprisingly intimate place, if you’ve ever sat in one. People
                  talk. They confess. They ask questions they wouldn’t ask
                  anywhere else. Jen listened. And alongside the listening, there
                  was always something else: information arriving in ways she
                  didn’t have tidy language for.
                </p>
                <p>
                  Images. Knowing. A feeling in the body. Sometimes a scent that
                  didn’t belong to the room. Sometimes a presence that did.
                </p>
                <p>
                  She didn’t set out to become a professional intuitive. She set
                  out to honor what was already happening. Intuitive Healing by
                  Jen grew from that decision — to stop shrinking the work into a
                  single label, and to offer it as what it actually is: a personal
                  experience.
                </p>
                <p>
                  Some sessions lean toward guidance. Some toward mediumship.
                  Some toward energetic awareness. Many hold more than one of
                  these at once, because people are not categories, and neither
                  is Jen.
                </p>
                <p>
                  She works with clients in person on Long Island and remotely,
                  with the same attention either way. She will tell you plainly
                  that she cannot promise what will come through. She can promise
                  that she will be present, honest, and with you.
                </p>
              </div>
              <a href="#contact" className="btn-ghost mt-10">
                Learn More About Jen
                <Arrow />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
