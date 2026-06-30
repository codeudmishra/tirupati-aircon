import Link from "next/link";
import { services } from "@/lib/site";

export const metadata = { title: "Services — Tirupati Aircon" };

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06] py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-900/30 to-transparent" />
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-brand-500/15 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-brand-400">Services</p>
          <h1 className="animate-fade-up delay-100 mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">
            Complete HVAC, <br /><span className="text-shimmer">under one roof.</span>
          </h1>
          <p className="animate-fade-up delay-200 mx-auto mt-6 max-w-xl text-lg text-white/50">
            From the first load calculation to lifelong maintenance — we handle every part of your cooling needs.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`animate-fade-up delay-${i * 100 + 100} glass glass-hover rounded-3xl p-10`}
            >
              <div className="flex items-start gap-6">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-500/15 text-3xl">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/50">{s.summary}</p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-white/40">
                        <span className="h-px w-4 bg-brand-500 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 glass rounded-3xl px-10 py-16 text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Not sure what you need?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Our engineers will assess your space and recommend the right solution for your budget.
          </p>
          <Link
            href="/contact"
            className="btn-glow mt-8 inline-block rounded-full px-8 py-4 font-semibold text-white"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
