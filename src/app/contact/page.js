import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = { title: "Contact — Tirupati Aircon" };

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/[0.06] py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-900/20 to-transparent" />
        <div className="pointer-events-none absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-brand-600/10 blur-[100px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-brand-400">Contact</p>
          <h1 className="animate-fade-up delay-100 mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">
            Let's talk about <br /><span className="text-shimmer">your project.</span>
          </h1>
          <p className="animate-fade-up delay-200 mx-auto mt-6 max-w-xl text-lg text-white/50">
            Free consultation, no-obligation quote. Our team responds within 24 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div className="animate-fade-up glass rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-white mb-8">Send us a message</h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="animate-fade-up delay-200 space-y-5">
            {[
              ["📞", "Phone", site.phone, `tel:${site.phone.replace(/\s/g, "")}`],
              ["✉️", "Email", site.email, `mailto:${site.email}`],
              ["📍", "Address", site.address, null],
              ["🕒", "Hours", site.hours, null],
            ].map(([icon, label, value, href]) => (
              <div key={label} className="glass glass-hover rounded-2xl px-8 py-6 flex items-start gap-5">
                <span className="text-2xl mt-0.5">{icon}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/30">{label}</p>
                  {href ? (
                    <a href={href} className="mt-1 text-white hover:text-brand-300 transition-colors font-medium">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-white font-medium">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Quick action */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 p-8 text-center">
              <div className="pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-full bg-brand-400/20 blur-2xl" />
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-200">Emergency support</p>
              <p className="mt-2 text-3xl font-black text-white">{site.phone}</p>
              <p className="mt-1 text-sm text-brand-200/70">Available Mon–Sat, 9 AM – 7 PM</p>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="mt-5 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-bold text-brand-800 transition hover:bg-brand-50"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
