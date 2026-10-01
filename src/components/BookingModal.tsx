import { useEffect, useState, type FormEvent } from "react";
import { experienceOptions } from "../data";
import { cn } from "../utils/cn";

type Props = {
  open: boolean;
  mode: "book" | "contact";
  onClose: () => void;
};

const empty = {
  name: "",
  email: "",
  phone: "",
  experience: experienceOptions[0],
  format: "",
  message: "",
};

export default function BookingModal({ open, mode, onClose }: Props) {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setSent(false);
        setForm(empty);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const title =
    mode === "book" ? "Book an Experience" : "Write to Jen";
  const lede =
    mode === "book"
      ? "Share a little about yourself. Jen will be in touch to confirm a time that works for both of you."
      : "Questions, curiosity, or something you aren’t sure how to name — this is a good place to begin.";

  return (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-6 transition-all duration-500",
        open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
      )}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-ink/55 backdrop-blur-[2px]"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className={cn(
          "relative z-10 w-full max-w-xl max-h-[92vh] overflow-y-auto bg-cream shadow-2xl transition-transform duration-500",
          open ? "translate-y-0" : "translate-y-8"
        )}
      >
        <div className="flex items-start justify-between px-6 sm:px-10 pt-8 pb-2">
          <div>
            <p className="label">Intuitive Healing by Jen</p>
            <h3 id="booking-title" className="display mt-3 text-3xl sm:text-4xl text-ink">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="mt-1 flex h-10 w-10 items-center justify-center text-stone hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </button>
        </div>

        {sent ? (
          <div className="px-6 sm:px-10 py-12">
            <p className="font-serif italic text-2xl text-ink">Thank you.</p>
            <p className="mt-4 text-stone leading-relaxed max-w-md">
              Your note is received. Jen will be in touch shortly to continue the
              conversation. Until then, take good care.
            </p>
            <button type="button" onClick={onClose} className="btn-primary mt-8">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="px-6 sm:px-10 pb-10 pt-4">
            <p className="text-stone leading-relaxed mb-8">{lede}</p>
            <div className="space-y-6">
              <label className="block">
                <span className="label">Name</span>
                <input
                  required
                  className="input mt-1"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label className="block">
                <span className="label">Email</span>
                <input
                  required
                  type="email"
                  className="input mt-1"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
              <label className="block">
                <span className="label">Phone</span>
                <input
                  className="input mt-1"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </label>
              {mode === "book" && (
                <>
                  <label className="block">
                    <span className="label">Experience</span>
                    <select
                      className="input select mt-1"
                      value={form.experience}
                      onChange={(e) =>
                        setForm({ ...form, experience: e.target.value })
                      }
                    >
                      {experienceOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </label>
                  <fieldset>
                    <legend className="label">Format</legend>
                    <div className="mt-3 flex gap-3">
                      {["In person", "Remote"].map((f) => (
                        <button
                          key={f}
                          type="button"
                          onClick={() => setForm({ ...form, format: f })}
                          className={cn(
                            "flex-1 border py-3 text-[11px] tracking-[0.18em] uppercase transition-colors",
                            form.format === f
                              ? "border-ink bg-ink text-ivory"
                              : "border-ink/15 text-stone hover:border-gold"
                          )}
                        >
                          {f}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                </>
              )}
              <label className="block">
                <span className="label">
                  {mode === "book" ? "Anything Jen should know" : "Your message"}
                </span>
                <textarea
                  rows={4}
                  className="input mt-1 resize-none"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </label>
            </div>
            <button type="submit" className="btn-primary mt-10 w-full">
              {mode === "book" ? "Request a Session" : "Send Message"}
            </button>
            <p className="mt-4 text-center text-[0.78rem] text-mist leading-relaxed">
              Sessions are offered for personal insight and spiritual exploration.
              They are not medical, legal, or financial advice.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
