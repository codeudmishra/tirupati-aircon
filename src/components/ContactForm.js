"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sent");
    e.target.reset();
  }

  const field =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white placeholder-white/30 outline-none transition focus:border-brand-500/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-brand-500/20 backdrop-blur-sm";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={field} name="name" placeholder="Your name" required />
        <input className={field} name="phone" placeholder="Phone number" required />
      </div>
      <input className={field} type="email" name="email" placeholder="Email address" required />
      <select className={`${field} [&>option]:bg-ink-900`} name="service" defaultValue="">
        <option value="" disabled>What do you need?</option>
        <option>HVAC Installation</option>
        <option>Maintenance & Repair</option>
        <option>Air Quality Solutions</option>
        <option>Energy Efficiency</option>
        <option>Something else</option>
      </select>
      <textarea className={field} name="message" rows={4} placeholder="Tell us about your space…" />
      <button
        type="submit"
        className="btn-glow w-full rounded-full py-4 font-semibold text-white text-sm tracking-wide"
      >
        Send Message →
      </button>
      {status === "sent" && (
        <div className="glass rounded-xl px-5 py-4 text-sm font-medium text-brand-300 border border-brand-500/20">
          ✓ Message received — we'll get back to you within 24 hours.
        </div>
      )}
    </form>
  );
}
