// ───────────────────────────────────────────────────────────────
//  EDIT YOUR BUSINESS INFO HERE — it updates across the whole site
// ───────────────────────────────────────────────────────────────
export const site = {
  name: "Tirupati Aircon",
  tagline: "Cooling Comfort, Engineered to Last",
  description:
    "Tirupati Aircon delivers expert HVAC installation, maintenance, and air quality solutions for homes, offices, and industrial facilities.",
  phone: "+91 98102 95760",
  email: "tirupatiaircon@hotmail.com",
  address: "718, Sector 51, Gurugram",
  hours: "Mon–Sat: 9:00 AM – 7:00 PM",
  yearFounded: 2024,
  social: {
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    title: "HVAC Installation",
    icon: "❄️",
    summary:
      "Precision-engineered installation of central AC, VRF/VRV systems, ducting, and chillers — sized right the first time.",
    points: ["Split, VRF & central systems", "Load calculation & design", "Clean ducting & commissioning"],
  },
  {
    title: "Maintenance & Repair",
    icon: "🔧",
    summary:
      "Preventive maintenance contracts and rapid repair to keep your systems running efficiently all year round.",
    points: ["Annual maintenance contracts", "24/7 breakdown support", "Genuine spare parts"],
  },
  {
    title: "Air Quality Solutions",
    icon: "🌬️",
    summary:
      "Cleaner, healthier indoor air with advanced filtration, fresh-air systems, and humidity control.",
    points: ["HEPA & fresh-air systems", "Humidity control", "Indoor air quality audits"],
  },
  {
    title: "Energy Efficiency",
    icon: "⚡",
    summary:
      "Cut your power bills with energy audits, smart controls, and retrofits that pay for themselves.",
    points: ["Energy audits", "Smart BMS controls", "Retrofit & optimization"],
  },
];

export const stats = [
  { value: "3+", label: "Years of experience" },
  { value: "100+", label: "Projects delivered" },
  { value: "98%", label: "Client retention" },
  { value: "24/7", label: "Support available" },
];

export const projects = [
  { name: "Corporate HQ — Central VRF", category: "Commercial", detail: "120-ton VRF system across 8 floors with smart zoning." },
  { name: "Manufacturing Plant Cooling", category: "Industrial", detail: "Chiller plant + process cooling for a 50,000 sq ft facility." },
  { name: "Luxury Residences", category: "Residential", detail: "Concealed ducted AC for a premium apartment complex." },
  { name: "Hospital Air Quality Upgrade", category: "Healthcare", detail: "HEPA filtration and fresh-air handling for critical care areas." },
  { name: "Retail Mall HVAC", category: "Commercial", detail: "Energy-efficient central cooling for a high-footfall mall." },
  { name: "Data Center Precision Cooling", category: "Industrial", detail: "Redundant precision cooling for 24/7 server uptime." },
];
