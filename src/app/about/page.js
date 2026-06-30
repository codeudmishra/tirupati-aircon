import { site, stats } from "@/lib/site";

export const metadata = { title: "About — Tirupati Aircon" };

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06] py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-900/20 to-transparent" />
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-600/10 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-brand-400">About</p>
          <h1 className="animate-fade-up delay-100 mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">
            Your comfort partner <br /><span className="text-shimmer">since {site.yearFounded}.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-6 text-lg leading-relaxed text-white/50">
            <p>
              Founded in {site.yearFounded}, <strong className="text-white">{site.name}</strong> was built on a simple belief:
              great air conditioning isn't just about the equipment — it's about engineering, installation quality,
              and the service that follows.
            </p>
            <p>
              Based in Gurugram, we serve homes, offices, hospitals, and industrial facilities across the NCR region.
              Every project starts with listening — understanding your space, your budget, and your expectations.
            </p>
            <p>
              We've delivered 100+ projects and built relationships that last well beyond the handover.
              Our clients call us back — and refer us — because we do what we say.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`animate-fade-up delay-${i * 100 + 100} glass rounded-2xl p-8 text-center`}
              >
                <p className="stat-glow text-4xl font-black text-brand-300">{s.value}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-widest text-white/40">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider mx-auto max-w-5xl" />

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">Our values</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            What drives every project.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["🎯", "Quality first", "We never cut corners on components, design, or workmanship. Ever."],
            ["🤝", "Client trust", "Transparent communication and honest pricing — always."],
            ["🌱", "Sustainable cooling", "Efficient systems that reduce energy consumption and operating costs."],
          ].map(([icon, title, desc], i) => (
            <div
              key={title}
              className={`animate-fade-up delay-${i * 100 + 100} glass glass-hover rounded-2xl p-8`}
            >
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
