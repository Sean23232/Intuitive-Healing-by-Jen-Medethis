import { instagram } from "../data";
import { Arrow, Label, Reveal } from "./ui";

export default function Instagram() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <Label>Instagram</Label>
              <h2 className="display mt-4 text-4xl sm:text-5xl text-ink">
                Follow Jen’s Journey
              </h2>
            </div>
            <a
              href="https://www.instagram.com/intuitive_designs_by_jen/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost self-start sm:self-auto"
            >
              Follow on Instagram
              <Arrow />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
          {instagram.map((img, i) => (
            <Reveal key={img.src} delay={i * 50}>
              <a
                href="https://www.instagram.com/intuitive_designs_by_jen/"
                target="_blank"
                rel="noreferrer"
                className="ig-tile group relative block aspect-square overflow-hidden bg-ivory-2"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 z-10 flex items-center justify-center bg-ink/35 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="text-[11px] tracking-[0.22em] uppercase text-ivory">
                    @intuitive_designs_by_jen
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
