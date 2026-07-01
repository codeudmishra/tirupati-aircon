"use client";

import { useState, useEffect, useRef } from "react";

const WEB3FORMS_KEY = "5bf06973-b2eb-4cf4-a18c-ed060249642f";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const timerRef = useRef(null);

  useEffect(() => {
    if (status === "sent" || status === "error") {
      timerRef.current = setTimeout(() => setStatus("idle"), 5000);
    }
    return () => clearTimeout(timerRef.current);
  }, [status]);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const fd = new FormData(form);

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: "New Enquiry — Tirupati Aircon Website",
      from_name: "Tirupati Aircon Website",
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email"),
      service: fd.get("service"),
      message: fd.get("message") || "",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        console.error("Web3Forms error:", json);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus("error");
    }
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
        <option>Maintenance &amp; Repair</option>
        <option>Air Quality Solutions</option>
        <option>Energy Efficiency</option>
        <option>Something else</option>
      </select>
      <textarea className={field} name="message" rows={4} placeholder="Tell us about your space…" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-glow w-full rounded-full py-4 font-semibold text-white text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed transition"
      >
        {status === "sending" ? "Sending…" : "Send Message →"}
      </button>

      {status === "sent" && (
        <div className="glass rounded-xl px-5 py-4 text-sm font-medium text-brand-300 border border-brand-500/20">
          ✓ Message received — we'll get back to you within 24 hours.
        </div>
      )}
      {status === "error" && (
        <div className="glass rounded-xl px-5 py-4 text-sm font-medium text-red-300 border border-red-500/20">
          ✗ Something went wrong. Please call us at +91 98102 95760.
        </div>
      )}
    </form>
  );
}
