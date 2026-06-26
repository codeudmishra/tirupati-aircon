import { SectionHeading } from "@/components/Section";
import { site, stats } from "@/lib/site";

export const metadata = { title: "About — Tirupati Aircon" };

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading
            eyebrow="About us"
            title={`${site.name} — your comfort partner since ${site.yearFounded}`}
            subtitle="A team of HVAC engineers and technicians dedicated to building cooling systems that are efficient, reliable, and made to last."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-5 leading-relaxed text-gray-600">
            <p>
              Founded in {site.yearFounded}, {site.name} began with a simple belief: great air conditioning
              isn't just about the equipment — it's about engineering, installation quality, and the
              service that comes after.
            </p>
            <p>
              Over the years we've grown from residential installations to large commercial and industrial
              projects, earning the trust of clients who depend on us to keep their spaces comfortable and
              their systems running.
            </p>
            <p>
              Today, our team handles everything from precision load calculations and clean installations to
              proactive maintenance and energy-efficiency retrofits — all with the same hands-on care we
              started with.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-brand-50 p-6 text-center">
                <p className="text-3xl font-extrabold text-brand-600">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-gray-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-50">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading center eyebrow="Our values" title="What drives every project" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Quality first", "We never cut corners on components, design, or workmanship."],
              ["Customer obsession", "Your comfort and trust come before everything else."],
              ["Sustainable cooling", "Efficient systems that save energy and reduce costs."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="text-lg font-bold text-ink-900">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
