import { projects } from "@/lib/site";

export const metadata = { title: "Projects — Tirupati Aircon" };

const categoryColors = {
  Commercial: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  Industrial: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  Residential: "bg-green-500/10 text-green-300 border-green-500/20",
  Healthcare: "bg-red-500/10 text-red-300 border-red-500/20",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06] py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-900/20 to-transparent" />
        <div className="pointer-events-none absolute top-0 left-1/3 h-72 w-72 rounded-full bg-brand-600/10 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-brand-400">Our work</p>
          <h1 className="animate-fade-up delay-100 mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">
            Projects we're <br /><span className="text-shimmer">proud of.</span>
          </h1>
          <p className="animate-fade-up delay-200 mx-auto mt-6 max-w-xl text-lg text-white/50">
            A snapshot of residential, commercial, and industrial installations across Gurugram & NCR.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`animate-fade-up delay-${i * 100 + 100} glass glass-hover group rounded-3xl overflow-hidden`}
            >
              {/* Visual */}
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-brand-900/80 to-ink-900">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-brand-600/20 to-brand-800/20" />
                <span className="text-6xl transition-transform duration-500 group-hover:scale-110">❄️</span>
              </div>
              {/* Content */}
              <div className="p-7">
                <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${categoryColors[p.category] ?? "bg-brand-500/10 text-brand-300 border-brand-500/20"}`}>
                  {p.category}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{p.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
