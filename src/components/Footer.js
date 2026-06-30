import Link from "next/link";
import { site, nav, services } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/[0.06] bg-ink-950/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 text-lg font-bold text-white">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-700 shadow-lg shadow-brand-600/30">
              <span>❄</span>
            </div>
            {site.name}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/40">{site.tagline}</p>
          <div className="mt-6 space-y-2 text-sm text-white/40">
            <p>📞 <a href={`tel:${site.phone.replace(/\s/g,"")}`} className="hover:text-brand-300 transition-colors">{site.phone}</a></p>
            <p>✉️ <a href={`mailto:${site.email}`} className="hover:text-brand-300 transition-colors">{site.email}</a></p>
            <p>📍 {site.address}</p>
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/30">Pages</h4>
          <ul className="space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/50 transition hover:text-brand-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/30">Services</h4>
          <ul className="space-y-3 text-sm text-white/40">
            {services.map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/30">Business hours</h4>
          <p className="text-sm text-white/40">{site.hours}</p>
          <Link
            href="/contact"
            className="btn-glow mt-6 inline-block rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/20 md:flex-row">
          <p>© {site.yearFounded}–2026 {site.name}. All rights reserved.</p>
          <p>Serving Gurugram & NCR</p>
        </div>
      </div>
    </footer>
  );
}
