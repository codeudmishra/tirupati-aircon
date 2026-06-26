import Link from "next/link";
import { SectionHeading } from "@/components/Section";
import { site, services, stats } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:py-32">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700">
              ❄️ HVAC experts since {site.yearFounded}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              {site.description} Trusted by homes, offices, and industries for reliable cooling
              that performs — and keeps performing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-brand-600 px-7 py-3 font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700 hover:shadow-brand-600/30"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-gray-300 px-7 py-3 font-semibold text-ink-900 transition hover:border-brand-600 hover:text-brand-600"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-brand-500 to-brand-700 p-1 shadow-2xl">
              <div className="grid h-full w-full place-items-center rounded-[22px] bg-ink-900 text-center">
                <div className="p-8">
                  <div className="text-7xl">🌬️</div>
                  <p className="mt-4 text-xl font-semibold text-white">Perfect Climate, Every Day</p>
                  <p className="mt-2 text-sm text-brand-200">Installation · Maintenance · Air Quality · Efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-extrabold text-brand-600">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <SectionHeading
          center
          eyebrow="What we do"
          title="End-to-end HVAC solutions"
          subtitle="From the first load calculation to lifelong maintenance, we handle every part of your cooling needs."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
            >
              <div className="text-4xl">{s.icon}</div>
              <h3 className="mt-5 text-lg font-bold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{s.summary}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className="font-semibold text-brand-600 hover:text-brand-700">
            View all services →
          </Link>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-brand-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why Tirupati Aircon"
              title="Engineering you can rely on"
              subtitle="We don't just sell air conditioners — we design comfort systems that are efficient, durable, and built around how you actually use your space."
            />
          </div>
          <ul className="space-y-5">
            {[
              ["Certified engineers", "Trained, experienced technicians on every job."],
              ["On-time delivery", "Projects planned and commissioned to schedule."],
              ["Genuine parts only", "No compromises on components or refrigerants."],
              ["Transparent pricing", "Clear quotes, no surprise costs."],
            ].map(([t, d]) => (
              <li key={t} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">✓</span>
                <div>
                  <p className="font-semibold text-ink-900">{t}</p>
                  <p className="text-sm text-gray-600">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-brand-700 to-brand-500 px-8 py-16 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready for better cooling?</h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-50">
            Tell us about your space and we'll design the right HVAC solution — with a free, no-obligation quote.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-brand-700 shadow-lg transition hover:bg-brand-50"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
