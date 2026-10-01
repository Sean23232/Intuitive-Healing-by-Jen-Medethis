import { Label } from "./ui";

type Props = {
  onBook: () => void;
  onContact: () => void;
};

export default function FinalCTA({ onBook, onContact }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink grain py-28 sm:py-36 lg:py-44">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
      >
        <img
          src="/images/window-light.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 to-ink/90" />
      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <Label className="!text-gold-2">Begin</Label>
        <h2 className="display mt-6 text-4xl sm:text-5xl lg:text-[3.6rem] text-ivory">
          Your Experience Begins With a Conversation.
        </h2>
        <p className="mx-auto mt-8 max-w-lg text-[1.08rem] leading-[1.8] text-ivory/70">
          If you’ve been curious about Jen’s work, this is your invitation to
          explore it.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button type="button" onClick={onBook} className="btn-light w-full sm:w-auto">
            Book Your Experience
          </button>
          <button
            type="button"
            onClick={onContact}
            className="btn-outline-light w-full sm:w-auto"
          >
            Contact Jen
          </button>
        </div>
      </div>
    </section>
  );
}
