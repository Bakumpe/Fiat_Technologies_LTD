/* ── Data ─────────────────────────────────────────────────────────────────── */

export const NAV_LINKS = [
  {name: "Home", link: "/"},
  { name: "Services", link: "/services" },
  { name: "Projects", link: "/projects" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

export const SERVICES = [
  {
    id: "software",
    chipClass: "chip-svc-software",
    accentClass: "accent-software",
    cardAccent: "card-accent-software",
    bgClass: "bg-svc-software",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    tag: "Software Development",
    title: "Custom Software Solutions",
    description:
      "Full-cycle engineering from architecture to deployment. We build scalable web platforms, APIs, and internal tools tailored to your operational needs.",
    features: ["Web & Mobile Apps", "API Integration", "Cloud Architecture"],
    stat: "200+",
    statLabel: "Projects Delivered",
  },
  {
    id: "install",
    chipClass: "chip-svc-install",
    accentClass: "accent-install",
    cardAccent: "card-accent-install",
    bgClass: "bg-svc-install",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1={12} y1={22.08} x2={12} y2={12} />
      </svg>
    ),
    tag: "Software Installation",
    title: "Professional Setup & Deployment",
    description:
      "End-to-end software installation, configuration, and onboarding. We handle enterprise rollouts, licensing, and staff training seamlessly.",
    features: ["ERP & CRM Rollouts", "OS Configuration", "Staff Onboarding"],
    stat: "500+",
    statLabel: "Systems Configured",
  },
  {
    id: "cctv",
    chipClass: "chip-svc-cctv",
    accentClass: "accent-cctv",
    cardAccent: "card-accent-cctv",
    bgClass: "bg-svc-cctv",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x={1} y={5} width={15} height={14} rx={2} ry={2} />
      </svg>
    ),
    tag: "CCTV & Security",
    title: "Security Camera Systems",
    description:
      "Intelligent surveillance infrastructure for offices, warehouses, and commercial spaces. Remote monitoring, AI detection, and 24/7 footage management.",
    features: [
      "IP Camera Networks",
      "Remote Monitoring",
      "AI Motion Detection",
    ],
    stat: "1,000+",
    statLabel: "Cameras Installed",
  },
  {
    id: "hardware",
    chipClass: "chip-svc-hardware",
    accentClass: "accent-hardware",
    cardAccent: "card-accent-hardware",
    bgClass: "bg-svc-hardware",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x={4} y={4} width={16} height={16} rx={2} />
        <rect x={9} y={9} width={6} height={6} />
        <line x1={9} y1={1} x2={9} y2={4} />
        <line x1={15} y1={1} x2={15} y2={4} />
        <line x1={9} y1={20} x2={9} y2={23} />
        <line x1={15} y1={20} x2={15} y2={23} />
        <line x1={20} y1={9} x2={23} y2={9} />
        <line x1={20} y1={14} x2={23} y2={14} />
        <line x1={1} y1={9} x2={4} y2={9} />
        <line x1={1} y1={14} x2={4} y2={14} />
      </svg>
    ),
    tag: "Hardware & Accessories",
    title: "Hardware Procurement & Supply",
    description:
      "Sourcing, procurement, and supply of enterprise-grade hardware — servers, workstations, networking gear, and peripherals at competitive prices.",
    features: ["Servers & Workstations", "Network Equipment", "Peripherals"],
    stat: "50+",
    statLabel: "Trusted Vendors",
  },
  {
    id: "support",
    chipClass: "chip-svc-support",
    accentClass: "accent-support",
    cardAccent: "card-accent-support",
    bgClass: "bg-svc-support",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    tag: "Maintenance & Support",
    title: "Managed IT Support",
    description:
      "Proactive maintenance contracts and responsive helpdesk support. We keep your systems healthy so your team can focus on what matters.",
    features: ["24/7 Helpdesk", "Preventive Maintenance", "SLA Guarantees"],
    stat: "99.8%",
    statLabel: "Uptime Achieved",
  },
  {
    id: "networking",
    chipClass: "chip-svc-networking",
    accentClass: "accent-networking",
    cardAccent: "card-accent-networking",
    bgClass: "bg-svc-networking",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx={12} cy={12} r={3} />
        <path d="M19.4 15a7 7 0 1 0-14.8 0" />
      </svg>
    ),
    tag: "Networking",
    title: "Network Design & Infrastructure",
    description:
      "Secure and scalable network architecture for businesses of all sizes. From LAN setups to enterprise-grade connectivity and optimization.",
    features: ["LAN/WAN Setup", "Wi-Fi Optimization", "Firewall Configuration"],
    stat: "300+",
    statLabel: "Networks Deployed",
  },

  {
    id: "cybersecurity",
    chipClass: "chip-svc-cyber",
    accentClass: "accent-cyber",
    cardAccent: "card-accent-cyber",
    bgClass: "bg-svc-cyber",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2l8 4v6c0 5-3.8 9.7-8 10-4.2-.3-8-5-8-10V6l8-4z" />
      </svg>
    ),
    tag: "Cybersecurity",
    title: "IT Security & Protection",
    description:
      "Comprehensive cybersecurity solutions to protect your systems, data, and users from evolving threats and vulnerabilities.",
    features: ["Threat Detection", "Data Protection", "Access Control"],
    stat: "150+",
    statLabel: "Systems Secured",
  },

  {
    id: "consulting",
    chipClass: "chip-svc-consulting",
    accentClass: "accent-consulting",
    cardAccent: "card-accent-consulting",
    bgClass: "bg-svc-consulting",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx={12} cy={7} r={4} />
        <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
      </svg>
    ),
    tag: "IT Consulting",
    title: "Technology Strategy & Advisory",
    description:
      "Expert guidance to align your technology with business goals. We help you make smarter IT investments and scale efficiently.",
    features: ["Digital Transformation", "IT Audits", "Tech Roadmaps"],
    stat: "80+",
    statLabel: "Businesses Advised",
  },
];

export const STATS = [
  { value: "8+", label: "Markets Served", description: "", },
  { value: "350+", label: "Active Clients",  description: "", },
  { value: "1,700+", label: "Projects Completed",  description: "", },
  { value: "99%", label: "Client Satisfaction",  description: "",  },
];

export const TESTIMONIALS = [
  {
    name: "Amara Osei",
    role: "CTO, NovaCorp Uganda",
    text: "Fiat Technologies delivered our entire ERP rollout on time and on budget. Their hardware team and software engineers worked as one unit — rare and impressive.",
    rating: 5,
  },
  {
    name: "Sandra Mukasa",
    role: "Director of Operations, SafeHaven Properties",
    text: "The CCTV installation across our 12 sites was flawless. Remote monitoring works perfectly and the team's support response time is exceptional.",
    rating: 5,
  },
  {
    name: "James Kiprotich",
    role: "Head of IT, Meridian Bank",
    text: "We've relied on Fiat Technologies for over 4 years for all our maintenance contracts. Consistent, professional, and genuinely expert.",
    rating: 5,
  },
];