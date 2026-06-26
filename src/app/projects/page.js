import { SectionHeading } from "@/components/Section";
import { projects } from "@/lib/site";

export const metadata = { title: "Projects — Tirupati Aircon" };

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading
            eyebrow="Our work"
            title="Projects we're proud of"
            subtitle="A snapshot of the residential, commercial, and industrial installations we've delivered."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid h-44 place-items-center bg-gradient-to-br from-brand-400 to-brand-700 text-5xl">
                ❄️
              </div>
              <div className="p-6">
                <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
                  {p.category}
                </span>
                <h3 className="mt-3 text-lg font-bold text-ink-900">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
