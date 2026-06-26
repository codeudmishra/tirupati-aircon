import Link from "next/link";
import { site, nav, services } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 text-lg font-bold text-white">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600">❄</span>
            {site.name}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">{site.description}</p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Pages</h4>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-brand-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.title} className="text-gray-400">
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📞 {site.phone}</li>
            <li>✉️ {site.email}</li>
            <li>📍 {site.address}</li>
            <li>🕒 {site.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-sm text-gray-500 md:flex-row">
          <p>© {site.yearFounded}–present {site.name}. All rights reserved.</p>
          <p>Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
