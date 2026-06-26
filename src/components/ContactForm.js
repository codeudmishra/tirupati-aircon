"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this to a real email/API service (see README — Formspree, Resend, etc.)
    setStatus("sent");
    e.target.reset();
  }

  const field =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className={field} name="name" placeholder="Your name" required />
        <input className={field} name="phone" placeholder="Phone number" required />
      </div>
      <input className={field} type="email" name="email" placeholder="Email address" required />
      <select className={field} name="service" defaultValue="">
        <option value="" disabled>What do you need?</option>
        <option>HVAC Installation</option>
        <option>Maintenance & Repair</option>
        <option>Air Quality Solutions</option>
        <option>Energy Efficiency</option>
        <option>Something else</option>
      </select>
      <textarea className={field} name="message" rows={4} placeholder="Tell us about your space..." />
      <button
        type="submit"
        className="w-full rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition hover:bg-brand-700"
      >
        Send Message
      </button>
      {status === "sent" && (
        <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          ✓ Thanks! We've received your message and will get back to you shortly.
        </p>
      )}
    </form>
  );
}
