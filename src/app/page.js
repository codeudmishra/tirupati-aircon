import Link from "next/link";
import { site, services, stats } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-animated opacity-80" />

        {/* Glow orbs */}
        <div className="pointer-events-none absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-brand-500/20 blur-[120px] animate-float-a" />
        <div className="pointer-events-none absolute bottom-1/4 -right-32 h-[400px] w-[400px] rounded-full bg-brand-700/25 blur-[100px] animate-float-b" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-600/10 blur-[140px]" />

        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          {/* Eyebrow pill */}
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-5 py-2 text-sm font-medium text-brand-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-400" />
            </span>
            HVAC experts since {site.yearFounded} · Gurugram
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-up delay-100 mt-8 text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="block text-white">Engineering</span>
            <span className="block text-shimmer mt-2">Perfect Climate.</span>
          </h1>

          <p className="animate-fade-up delay-200 mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
            Tirupati Aircon delivers precision HVAC systems for homes, offices, and
            industrial facilities — designed to perform flawlessly, for decades.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-glow rounded-full px-8 py-4 text-base font-semibold text-white"
            >
              Get a Free Quote →
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/10 hover:border-white/30"
            >
              Explore Services
            </Link>
          </div>

          {/* Scroll cue */}
          <div className="animate-fade-up delay-500 mt-20 flex flex-col items-center gap-2 text-white/30">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-brand-400/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="relative border-y border-white/[0.06] bg-ink-950/60 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`animate-fade-up delay-${i * 100 + 100} flex flex-col items-center justify-center px-8 py-12 text-center`}
            >
              <p className="stat-glow text-5xl font-black text-brand-300 sm:text-6xl">{s.value}</p>
              <p className="mt-3 text-sm font-medium uppercase tracking-widest text-white/40">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-brand-400">What we do</p>
          <h2 className="animate-fade-up delay-100 mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Every HVAC need. <br />
            <span className="text-shimmer">One team.</span>
          </h2>
          <p className="animate-fade-up delay-200 mt-5 text-lg text-white/50">
            From design to installation to lifetime maintenance — we own the full picture.
          </p>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`animate-fade-up delay-${i * 100 + 100} glass glass-hover rounded-2xl p-8`}
            >
              <div className="text-5xl">{s.icon}</div>
              <h3 className="mt-6 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/50">{s.summary}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2.5 text-xs text-white/40">
                    <span className="h-px w-3 bg-brand-500 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/services" className="text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors">
            View all services →
          </Link>
        </div>
      </section>

      <hr className="section-divider mx-auto max-w-5xl" />

      {/* ─── WHY US ─── */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div>
            <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-brand-400">Why Tirupati Aircon</p>
            <h2 className="animate-fade-up delay-100 mt-4 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
              Built on trust. <br />Driven by precision.
            </h2>
            <p className="animate-fade-up delay-200 mt-6 text-lg leading-relaxed text-white/50">
              We don't just install systems — we engineer long-term comfort solutions that save energy, last longer, and support you after the job is done.
            </p>
          </div>

          <div className="space-y-4">
            {[
              ["❄️", "Certified engineers", "Trained HVAC professionals on every single project."],
              ["⚡", "Energy-first design", "Systems sized for efficiency, not upselling."],
              ["🔧", "Genuine parts, always", "No substitutes — only manufacturer-approved components."],
              ["📞", "Support after handover", "We pick up the phone long after the invoice is paid."],
            ].map(([icon, title, desc], i) => (
              <div
                key={title}
                className={`animate-fade-up delay-${i * 100 + 100} glass glass-hover flex items-start gap-5 rounded-2xl p-6`}
              >
                <span className="text-2xl mt-0.5">{icon}</span>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-white/50">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider mx-auto max-w-5xl" />

      {/* ─── INDUSTRIES ─── */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-brand-400">Who we serve</p>
          <h2 className="animate-fade-up delay-100 mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Built for <span className="text-shimmer">every space.</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["🏠", "Residential", "Homes & apartments"],
            ["🏢", "Commercial", "Offices & retail"],
            ["🏭", "Industrial", "Factories & warehouses"],
            ["🏥", "Healthcare", "Hospitals & clinics"],
          ].map(([icon, title, sub], i) => (
            <div
              key={title}
              className={`animate-fade-up delay-${i * 100 + 100} glass glass-hover rounded-2xl p-8 text-center`}
            >
              <div className="text-4xl">{icon}</div>
              <p className="mt-4 font-bold text-white">{title}</p>
              <p className="mt-1 text-xs text-white/40">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="px-6 py-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800" />
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
          <div className="relative px-10 py-20 text-center">
            <h2 className="text-3xl font-black text-white sm:text-5xl">
              Your comfort is one call away.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-brand-100/80">
              Get a free, no-obligation quote for your home, office, or facility.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 font-bold text-brand-800 shadow-xl transition hover:bg-brand-50"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
