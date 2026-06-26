import { SectionHeading } from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata = { title: "Contact — Tirupati Aircon" };

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionHeading
            eyebrow="Get in touch"
            title="Let's talk about your cooling needs"
            subtitle="Send us a message and our team will get back to you with a free, no-obligation quote."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <ContactForm />
          </div>

          <div className="space-y-6">
            {[
              ["📞", "Phone", site.phone],
              ["✉️", "Email", site.email],
              ["📍", "Address", site.address],
              ["🕒", "Hours", site.hours],
            ].map(([icon, label, value]) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl bg-brand-50 p-6">
                <span className="text-2xl">{icon}</span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-brand-700">{label}</p>
                  <p className="mt-1 text-ink-900">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
