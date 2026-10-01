import { cn } from "../utils/cn";

type Props = {
  visible: boolean;
  onBook: () => void;
};

export default function MobileCTA({ visible, onBook }: Props) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 p-3 sm:hidden transition-transform duration-500",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <button
        type="button"
        onClick={onBook}
        className="btn-primary w-full shadow-[0_12px_40px_-12px_rgba(22,19,16,0.55)] pb-[max(0.95rem,env(safe-area-inset-bottom))]"
      >
        Book an Experience
      </button>
    </div>
  );
}
