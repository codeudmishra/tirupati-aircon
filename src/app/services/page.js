import Link from "next/link";
import { SectionHeading } from "@/components/Section";
import { services } from "@/lib/site";

export const metadata = { title: "Services — Tirupati Aircon" };

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading
            eyebrow="Our services"
            title="Complete HVAC solutions, under one roof"
            subtitle="Whether it's a single room or an entire industrial facility, we design, install, and maintain cooling that works."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-lg">
              <div className="text-4xl">{s.icon}</div>
              <h3 className="mt-4 text-2xl font-bold text-ink-900">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{s.summary}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-100 text-xs text-brand-700">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-ink-900 px-8 py-14 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Not sure what you need?</h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Our engineers will assess your space and recommend the most efficient solution for your budget.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full bg-brand-600 px-7 py-3 font-semibold text-white transition hover:bg-brand-700"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
