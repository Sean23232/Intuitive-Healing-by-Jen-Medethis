import { Arrow, Label } from "./ui";

type Props = {
  onBook: () => void;
};

export default function Featured({ onBook }: Props) {
  return (
    <section className="relative min-h-[88vh] overflow-hidden grain flex items-center">
      <div className="absolute inset-0">
        <img
          src="/images/featured-interior.jpg"
          alt="A quiet sitting room in afternoon light"
          className="h-full w-full object-cover hero-kenburns"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/30 to-ink/30" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-10 py-28 text-center">
        <Label className="!text-gold-2">An Invitation</Label>
        <h2 className="display mt-7 text-4xl sm:text-5xl lg:text-[3.7rem] text-ivory">
          What If You Gave Yourself Permission to Explore What You Already Feel?
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-[1.08rem] leading-[1.8] text-ivory/75">
          Curiosity is enough. You do not need certainty, a crisis, or a fully
          formed question. Some people come for connection. Some for clarity.
          Some simply because something in them has been asking for a quieter
          kind of conversation.
        </p>
        <button type="button" onClick={onBook} className="btn-light mt-10">
          Begin Your Experience
          <Arrow />
        </button>
      </div>
    </section>
  );
}
