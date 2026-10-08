// Events Data Configuration
// Editable events schedule for upcoming & past flagship programs

export const eventCategories = [
  "ALL",
  "FLAGSHIP",
  "HACKATHONS",
  "WORKSHOPS",
  "COMPETITIONS",
  "TALKS",
];

export const featuredEvent = {
  id: "featured-flagship",
  tagline: "THE ANNUAL FLAGSHIP GATHERING",
  title: "IGNITE E-SUMMIT 2026",
  subtitle: "Central India's Premier Student Innovation & Venture Conclave",
  date: "2026-11-20T09:30:00",
  dateDisplay: "NOVEMBER 20-21, 2026",
  venue: "Main Auditorium, WIT Campus, Solapur",
  mode: "Offline Conclave",
  category: "FLAGSHIP",
  prizePool: "₹2,50,000+",
  image: "", // Add your photo path here, e.g. "/assets/events/flagship-summit.jpg"
  registrationOpen: true,
  registrationDeadline: "Nov 15, 2026",
  description: "Two high-octane days featuring 10+ startup founders, angel investor panels, inter-college prototype showcases, and rapid-fire venture pitch rounds. Open to builders, designers, and students across India.",
  highlights: [
    "Keynotes from unicorn founders and YC alumni",
    "Live angel investment micro-syndicate",
    "Prototype expo featuring 40+ college innovations",
    "Networking mixer with venture capital analysts",
  ],
  schedule: [
    { time: "09:30 AM", title: "Inaugural Keynote: 0-to-1 Engineering Ventures" },
    { time: "11:30 AM", title: "Fireside: Bootstrapping vs VC Funding" },
    { time: "02:00 PM", title: "Pitch Arena Round 1: Top 15 Seed Startups" },
    { time: "04:30 PM", title: "Investor Feedback & Founder Networking Mixer" },
  ],
  speakers: [
    { name: "Alumni Serial Founder", title: "Founder & CEO", company: "WIT Tech Alumni" },
    { name: "Angel Investor Panelist", title: "Investment Director", company: "Maharashtra Angel Network" },
  ],
  prizes: [
    { place: "1st Place", reward: "₹1,25,000 + Incubation Slot + AWS Credits" },
    { place: "2nd Place", reward: "₹75,000 + Mentorship Access" },
    { place: "3rd Place", reward: "₹50,000 + Cloud Grants" },
  ],
  faqs: [
    { q: "Who is eligible to participate?", a: "Undergraduate and postgraduate students from any recognized college with an active student ID." },
    { q: "Can solo participants register?", a: "Yes, solo participants can attend talks and workshops. For pitch competitions, teams of 2 to 4 are recommended." },
  ]
};

export const eventsList = [
  {
    id: "event-illuminate",
    title: "Illuminate 1.0",
    category: "WORKSHOPS",
    date: "AUGUST 2024",
    isoDate: "2024-08-10T10:00:00",
    venue: "Main Auditorium, WIT Campus",
    isUpcoming: false,
    badge: "COMPLETED",
    metric: "100+ Attendees",
    description: "An entrepreneurship workshop conducted in collaboration with E-Cell IIT Bombay. 100+ attendees received entrepreneurship kits and learned startup fundamentals, business modeling, and problem discovery.",
    image: "", // Add your photo path here, e.g. "/assets/events/illuminate.jpg"
    tags: ["Workshop", "E-Cell IIT Bombay", "Startup Kits", "Ideation"],
    registrationUrl: "#completed",
    highlights: [
      "Official collaboration with E-Cell IIT Bombay",
      "Hands-on startup ideation & Business Model Canvas kits",
      "Direct interactive session on customer discovery",
      "Over 100+ student attendees across departments"
    ],
    schedule: [
      { time: "10:00 AM", title: "Keynote & Inception: What Makes a Real Founder" },
      { time: "11:30 AM", title: "Hands-on Workshop: Business Model Canvas & Market Sizing" },
      { time: "02:30 PM", title: "Rapid Pitch Clinic & Mentor Critique" }
    ],
    prizes: [
      { place: "Top Concept", reward: "IIT Bombay E-Summit Delegate Passes" }
    ],
    faqs: [
      { q: "Was certification provided?", a: "Yes, all verified attendees received certificates backed by E-Cell WIT and partnered initiatives." }
    ]
  },
  {
    id: "event-web-wizards",
    title: "Web Wizards Hackathon",
    category: "HACKATHONS",
    date: "AUGUST 2024",
    isoDate: "2024-08-22T09:00:00",
    venue: "Computing & AI Labs, WIT Solapur",
    isUpcoming: false,
    badge: "COMPLETED",
    metric: "32+ Teams Competing",
    description: "A dedicated website building competition testing participants' technical skills, creativity, and ability to ship a product under pressure with modern web frameworks and design systems.",
    image: "", // Add your photo path here, e.g. "/assets/events/web-wizards.jpg"
    tags: ["Hackathon", "Web Development", "UI/UX", "Rapid Shipping"],
    registrationUrl: "#completed",
    highlights: [
      "32+ student teams built and deployed live web apps",
      "Judged by senior alumni engineers and industry developers",
      "Focus on responsive UX, clean architecture, and performance",
      "Live deployment demo rounds"
    ],
    schedule: [
      { time: "09:00 AM", title: "Problem Statement Unveiling & Sprint Kickoff" },
      { time: "01:00 PM", title: "Milestone Review 1: Architecture & Wireframes" },
      { time: "05:00 PM", title: "Final Live Deployments & Jury Evaluation" }
    ],
    prizes: [
      { place: "1st Place", reward: "Cash Prize & Fast-track Internship Interviews" },
      { place: "Runner Up", reward: "Tech Gear & Goodies Bundle" }
    ],
    faqs: [
      { q: "What tech stack was permitted?", a: "React, Next.js, Vue, Tailwind CSS, or Vanilla HTML/CSS/JS." }
    ]
  },
  {
    id: "event-flyer-fiesta",
    title: "Flyer Fiesta",
    category: "COMPETITIONS",
    date: "AUGUST 2024",
    isoDate: "2024-08-28T14:00:00",
    venue: "Seminar Hall, Central Block",
    isUpcoming: false,
    badge: "COMPLETED",
    metric: "50+ Creative Entries",
    description: "A creative poster-making competition challenging students to design compelling event flyers and visual brand identities that capture customer attention in high-noise environments.",
    image: "", // Add your photo path here, e.g. "/assets/events/flyer-fiesta.jpg"
    tags: ["Design", "Branding", "Creativity", "Visual Identity"],
    registrationUrl: "#completed",
    highlights: [
      "50+ individual and team design submissions",
      "Workshops on typography, color theory, and advertising psychology",
      "Live stage felicitation and showcase of top winning flyers",
      "Jury comprised of creative leads and faculty mentors"
    ],
    schedule: [
      { time: "02:00 PM", title: "Design Brief: Campaign Prompt Revealed" },
      { time: "04:30 PM", title: "Final Poster Submissions & Gallery Walk" },
      { time: "05:15 PM", title: "Awards Ceremony & Stage Felicitation" }
    ],
    prizes: [
      { place: "Best Visual Storytelling", reward: "Award Trophy & Creative Software Subscriptions" },
      { place: "Most Viral Design", reward: "Cash Voucher & Official E-Cell Design Lead Role" }
    ],
    faqs: [
      { q: "What design tools were used?", a: "Figma, Adobe Illustrator, Photoshop, and Canva were all supported." }
    ]
  },
  {
    id: "event-pitch-arena",
    title: "WIT Pitch Arena 2026",
    category: "FLAGSHIP",
    date: "OCTOBER 28, 2026",
    isoDate: "2026-10-28T10:00:00",
    venue: "Seminar Hall 1, WIT Campus",
    isUpcoming: true,
    badge: "REGISTRATION OPEN",
    metric: "₹75,000 Cash Grants",
    description: "Battlefield for student prototypes. Present your 5-minute pitch deck before active angel investors and get direct equity-free validation and seed support.",
    image: "", // Add your photo path here, e.g. "/assets/events/event-01.jpg"
    tags: ["Pitching", "Equity-Free Grants", "Angel Feedback"],
    registrationUrl: "#register",
    highlights: [
      "Direct pitching to seed investors and alumni angels",
      "5-minute pitch + 5-minute grill QA format",
      "Equity-free proof-of-concept cash grants",
      "Incubation slots at WIT Maker Space"
    ],
    schedule: [
      { time: "10:00 AM", title: "Pitch Briefing & Rules" },
      { time: "10:45 AM", title: "Pitches: Alpha Cohort (8 Teams)" },
      { time: "02:00 PM", title: "Pitches: Beta Cohort (8 Teams)" },
      { time: "04:00 PM", title: "Results & Cheque Distribution" }
    ],
    prizes: [
      { place: "Winner", reward: "₹50,000 Cash Grant" },
      { place: "Runner-Up", reward: "₹25,000 Cash Grant" }
    ],
    faqs: [
      { q: "What should the pitch deck contain?", a: "Problem, Solution, Target Market, Traction/Prototype, Business Model, and Team." }
    ]
  },
  {
    id: "event-build-a-thon",
    title: "Build-A-Thon: 36H Sprint",
    category: "HACKATHONS",
    date: "NOVEMBER 08-09, 2026",
    isoDate: "2026-11-08T08:00:00",
    venue: "Innovation Labs, Central Block",
    isUpcoming: true,
    badge: "UPCOMING",
    metric: "36H Non-Stop Sprint",
    description: "36 hours of continuous rapid prototyping. Turn microcontrollers, sensors, LLM APIs, and algorithms into working industrial-grade hardware and software prototypes.",
    image: "", // Add your photo path here, e.g. "/assets/events/event-02.jpg"
    tags: ["Hardware", "Applied AI", "Rapid Prototyping"],
    registrationUrl: "#register",
    highlights: [
      "Hardware maker kits & 3D printers available on-site",
      "Dedicated mentors from alumni IoT & AI startups",
      "Midnight code audits & energy fuel stations",
      "Live expo with industry CTOs"
    ],
    schedule: [
      { time: "08:00 AM", title: "Sprint Kickoff & Problem Statements Revealed" },
      { time: "02:00 PM", title: "Mentorship Review 1" },
      { time: "11:00 PM", title: "Midnight Code Audit" },
      { time: "03:00 PM (Day 2)", title: "Expo & Live Demos" }
    ],
    prizes: [
      { place: "Grand Prize", reward: "₹60,000 + Lab Sponsorship" },
      { place: "Best AI Innovation", reward: "₹40,000" }
    ],
    faqs: [
      { q: "Are hardware kits supplied?", a: "Basic microcontrollers (ESP32, sensors) are available on loan in the lab; teams may bring specialized boards." }
    ]
  },
  {
    id: "event-patent-clinic",
    title: "Patent & IP Clinic",
    category: "WORKSHOPS",
    date: "JANUARY 18, 2025",
    isoDate: "2025-01-18T11:00:00",
    venue: "WIT Library Hall",
    isUpcoming: false,
    badge: "COMPLETED",
    metric: "18+ Patents Drafted",
    description: "Patent attorneys guided 18 student engineering teams through prior-art searches, novelty claims, and provisional patent draft filings for their capstone projects.",
    image: "", // Add your photo path here, e.g. "/assets/events/event-06.jpg"
    tags: ["Patents", "IPR", "Engineering Projects"],
    registrationUrl: "#completed",
    highlights: [
      "Guided by certified Indian Patent Attorneys",
      "Prior-art search hands-on training using patent databases",
      "Provisional drafting clinics for final year capstone projects",
      "Government filing fee subsidization pathways"
    ],
    schedule: [
      { time: "11:00 AM", title: "What is Patentable: Novelty, Utility & Non-obviousness" },
      { time: "01:30 PM", title: "Hands-on Prior Art Searching Workshop" },
      { time: "03:30 PM", title: "1-on-1 Invention Disclosure Consultations" }
    ],
    prizes: [
      { place: "Top Novelty Inventions", reward: "College Patent Filing Sponsorship" }
    ],
    faqs: [
      { q: "Can software be patented?", a: "Attorneys covered Indian patent law regarding computer-related inventions (CRIs) and technical effects." }
    ]
  }
];
