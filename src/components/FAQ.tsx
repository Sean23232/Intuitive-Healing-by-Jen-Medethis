import { useState } from "react";
import { faqs } from "../data";
import { Label, Reveal } from "./ui";
import { cn } from "../utils/cn";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <Label>Questions</Label>
              <h2 className="display mt-5 text-4xl sm:text-5xl text-ink max-w-[10ch]">
                Before We Sit Together
              </h2>
              <p className="mt-6 text-[1.02rem] leading-[1.8] text-stone max-w-sm">
                First visits often come with the same quiet concerns. Here is
                what Jen would want you to know.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <ul className="border-t border-ink/10">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <li key={f.q} className="border-b border-ink/10">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-start justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-xl sm:text-2xl text-ink leading-snug pr-4">
                        {f.q}
                      </span>
                      <span
                        className={cn(
                          "mt-2 flex h-7 w-7 shrink-0 items-center justify-center text-gold transition-transform duration-500",
                          isOpen && "rotate-45"
                        )}
                        aria-hidden
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8 2v12M2 8h12"
                            stroke="currentColor"
                            strokeWidth="1.3"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={cn(
                        "grid transition-[grid-template-rows] duration-500 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-7 max-w-2xl text-[1.02rem] leading-[1.8] text-stone">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
