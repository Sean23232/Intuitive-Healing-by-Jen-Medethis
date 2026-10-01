import { nav } from "../data";

type Props = {
  onBook: () => void;
};

export default function Footer({ onBook }: Props) {
  return (
    <footer className="bg-charcoal text-ivory pt-16 pb-10">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12 pb-14 border-b border-ivory/10">
          <div className="lg:col-span-5">
            <p className="font-serif text-3xl tracking-[0.28em]">JEN</p>
            <p className="mt-2 text-[11px] tracking-[0.32em] uppercase text-gold-2">
              Intuitive Healing by Jen
            </p>
            <p className="mt-6 max-w-sm text-ivory/55 leading-relaxed">
              A personal experience of intuitive guidance, mediumship, energetic
              awareness, and spiritual insight — offered with honesty, presence,
              and care.
            </p>
          </div>
          <div className="lg:col-span-3">
            <p className="label !text-gold-2 mb-5">Navigate</p>
            <ul className="space-y-2">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-ivory/70 hover:text-ivory transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <p className="label !text-gold-2 mb-5">Visit</p>
            <p className="text-ivory/70">Massapequa, New York</p>
            <p className="text-ivory/70">In person & remote</p>
            <a
              href="https://www.instagram.com/intuitive_designs_by_jen/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 block text-ivory/70 hover:text-gold-2 transition-colors"
            >
              Instagram — @intuitive_designs_by_jen
            </a>
            <button
              type="button"
              onClick={onBook}
              className="btn-light mt-8 !py-3"
            >
              Book an Experience
            </button>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-[0.78rem] leading-relaxed text-ivory/40">
          Jen’s sessions are offered as personal, spiritual, and intuitive
          experiences for insight, reflection, and connection. They are not a
          substitute for medical, psychological, legal, or financial advice, and
          no particular outcome is promised. Please use your own judgment and
          consult licensed professionals for those needs.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[11px] tracking-[0.18em] uppercase text-ivory/35">
          <p>© {new Date().getFullYear()} Intuitive Healing by Jen</p>
          <p>Intuitive Designs by Jen</p>
        </div>
      </div>
    </footer>
  );
}
