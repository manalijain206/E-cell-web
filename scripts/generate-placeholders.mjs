// Utility to generate clean placeholder SVG files for all team, event, speaker, and gallery assets
import fs from 'fs';
import path from 'path';

function createSvg(title, subtitle, category, w = 600, h = 600) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" fill="none">
  <defs>
    <radialGradient id="grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1C1C24" />
      <stop offset="100%" stop-color="#0A0A0E" />
    </radialGradient>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#22222E" stroke-width="0.8"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#grad)" />
  <rect width="${w}" height="${h}" fill="url(#grid)" opacity="0.6" />
  
  <!-- Corner Tech Crosshairs -->
  <path d="M20 30 V20 H30 M${w-20} 30 V20 H${w-30} M20 ${h-30} V${h-20} H30 M${w-20} ${h-30} V${h-20} H${w-30}" stroke="#FF5722" stroke-width="1.5" />
  
  <!-- Center Emblem -->
  <circle cx="${w/2}" cy="${h/2 - 25}" r="38" fill="#14141A" stroke="#FF5722" stroke-width="1.5" stroke-dasharray="3 3"/>
  <circle cx="${w/2}" cy="${h/2 - 25}" r="18" fill="#FF5722" fill-opacity="0.15" />
  <path d="M${w/2 - 8} ${h/2 - 25} L${w/2 + 8} ${h/2 - 25} M${w/2} ${h/2 - 33} L${w/2} ${h/2 - 17}" stroke="#FF5722" stroke-width="2" stroke-linecap="round"/>
  
  <!-- Badges and Text -->
  <rect x="${w/2 - 60}" y="${h/2 + 30}" width="120" height="20" rx="10" fill="#FF5722" fill-opacity="0.1" stroke="#FF5722" stroke-width="0.8"/>
  <text x="${w/2}" y="${h/2 + 44}" fill="#FF8A00" font-family="system-ui, monospace" font-size="9" font-weight="700" letter-spacing="1.5" text-anchor="middle">${category.toUpperCase()}</text>
  
  <text x="${w/2}" y="${h/2 + 75}" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="14" font-weight="700" letter-spacing="0.5" text-anchor="middle">${title}</text>
  <text x="${w/2}" y="${h/2 + 96}" fill="#71717A" font-family="system-ui, monospace" font-size="10.5" text-anchor="middle">${subtitle}</text>
</svg>`;
}

const assets = [
  // Team
  { path: 'public/assets/team/president.jpg', title: 'PRESIDENT / CHAIR', subtitle: 'Drop president.jpg here', cat: 'Leadership', w: 500, h: 600 },
  { path: 'public/assets/team/vice-president.jpg', title: 'VICE PRESIDENT', subtitle: 'Drop vice-president.jpg here', cat: 'Leadership', w: 500, h: 600 },
  { path: 'public/assets/team/secretary.jpg', title: 'SECRETARY', subtitle: 'Drop secretary.jpg here', cat: 'Leadership', w: 500, h: 600 },
  { path: 'public/assets/team/joint-secretary.jpg', title: 'JOINT SECRETARY', subtitle: 'Drop joint-secretary.jpg here', cat: 'Leadership', w: 500, h: 600 },
  { path: 'public/assets/team/tech-head.jpg', title: 'TECHNICAL HEAD', subtitle: 'Drop tech-head.jpg here', cat: 'Core Lead', w: 500, h: 600 },
  { path: 'public/assets/team/events-head.jpg', title: 'EVENTS HEAD', subtitle: 'Drop events-head.jpg here', cat: 'Core Lead', w: 500, h: 600 },
  { path: 'public/assets/team/marketing-head.jpg', title: 'MARKETING HEAD', subtitle: 'Drop marketing-head.jpg here', cat: 'Core Lead', w: 500, h: 600 },
  { path: 'public/assets/team/pr-head.jpg', title: 'PUBLIC RELATIONS HEAD', subtitle: 'Drop pr-head.jpg here', cat: 'Core Lead', w: 500, h: 600 },
  { path: 'public/assets/team/design-head.jpg', title: 'DESIGN HEAD', subtitle: 'Drop design-head.jpg here', cat: 'Core Lead', w: 500, h: 600 },
  { path: 'public/assets/team/finance-head.jpg', title: 'FINANCE HEAD', subtitle: 'Drop finance-head.jpg here', cat: 'Core Lead', w: 500, h: 600 },
  { path: 'public/assets/team/strategy-head.jpg', title: 'STRATEGY HEAD', subtitle: 'Drop strategy-head.jpg here', cat: 'Core Lead', w: 500, h: 600 },
  { path: 'public/assets/team/member-01.jpg', title: 'TECHNICAL ASSOCIATE', subtitle: 'Drop member-01.jpg here', cat: 'Associate', w: 500, h: 600 },
  { path: 'public/assets/team/member-02.jpg', title: 'TECHNICAL ASSOCIATE', subtitle: 'Drop member-02.jpg here', cat: 'Associate', w: 500, h: 600 },
  { path: 'public/assets/team/member-03.jpg', title: 'EVENTS EXECUTIVE', subtitle: 'Drop member-03.jpg here', cat: 'Associate', w: 500, h: 600 },
  { path: 'public/assets/team/member-04.jpg', title: 'EVENTS EXECUTIVE', subtitle: 'Drop member-04.jpg here', cat: 'Associate', w: 500, h: 600 },
  { path: 'public/assets/team/member-05.jpg', title: 'CREATIVE MEDIA EXEC', subtitle: 'Drop member-05.jpg here', cat: 'Associate', w: 500, h: 600 },
  { path: 'public/assets/team/member-06.jpg', title: 'SOCIAL & GROWTH EXEC', subtitle: 'Drop member-06.jpg here', cat: 'Associate', w: 500, h: 600 },
  { path: 'public/assets/team/member-07.jpg', title: 'PR & OUTREACH EXEC', subtitle: 'Drop member-07.jpg here', cat: 'Associate', w: 500, h: 600 },
  { path: 'public/assets/team/member-08.jpg', title: 'CORPORATE ALLIANCES', subtitle: 'Drop member-08.jpg here', cat: 'Associate', w: 500, h: 600 },
  { path: 'public/assets/team/member-09.jpg', title: 'FINANCE & ACCOUNTS', subtitle: 'Drop member-09.jpg here', cat: 'Associate', w: 500, h: 600 },
  { path: 'public/assets/team/test-01.jpg', title: 'STUDENT FOUNDER', subtitle: 'Drop test-01.jpg here', cat: 'Testimonial', w: 500, h: 500 },
  { path: 'public/assets/team/test-02.jpg', title: 'HARDWARE BUILDER', subtitle: 'Drop test-02.jpg here', cat: 'Testimonial', w: 500, h: 500 },
  { path: 'public/assets/team/test-03.jpg', title: 'ALUMNI BUILDER', subtitle: 'Drop test-03.jpg here', cat: 'Testimonial', w: 500, h: 500 },

  // Events
  { path: 'public/assets/events/flagship-summit.jpg', title: 'IGNITE E-SUMMIT 2026', subtitle: 'Drop flagship-summit.jpg here', cat: 'Flagship Event', w: 800, h: 500 },
  { path: 'public/assets/events/event-01.jpg', title: 'WIT PITCH ARENA', subtitle: 'Drop event-01.jpg here', cat: 'Pitch War', w: 700, h: 450 },
  { path: 'public/assets/events/event-02.jpg', title: 'BUILD-A-THON 36H', subtitle: 'Drop event-02.jpg here', cat: 'Hackathon', w: 700, h: 450 },
  { path: 'public/assets/events/event-03.jpg', title: 'FOUNDER FIRESIDE', subtitle: 'Drop event-03.jpg here', cat: 'Keynote Talk', w: 700, h: 450 },
  { path: 'public/assets/events/event-04.jpg', title: 'CAP TABLE MASTERCLASS', subtitle: 'Drop event-04.jpg here', cat: 'Workshop', w: 700, h: 450 },
  { path: 'public/assets/events/event-05.jpg', title: 'CAMPUS IDEATHON', subtitle: 'Drop event-05.jpg here', cat: 'Ideathon', w: 700, h: 450 },
  { path: 'public/assets/events/event-06.jpg', title: 'PATENT CLINIC', subtitle: 'Drop event-06.jpg here', cat: 'IP Workshop', w: 700, h: 450 },

  // Speakers
  { path: 'public/assets/speakers/speaker-01.jpg', title: 'KEYNOTE FOUNDER', subtitle: 'Drop speaker-01.jpg here', cat: 'Keynote', w: 500, h: 600 },
  { path: 'public/assets/speakers/speaker-02.jpg', title: 'ANGEL INVESTOR', subtitle: 'Drop speaker-02.jpg here', cat: 'Judge', w: 500, h: 600 },
  { path: 'public/assets/speakers/speaker-03.jpg', title: 'ALUMNI BUILDER', subtitle: 'Drop speaker-03.jpg here', cat: 'Alum', w: 500, h: 600 },
  { path: 'public/assets/speakers/speaker-04.jpg', title: 'PATENT COUNSEL', subtitle: 'Drop speaker-04.jpg here', cat: 'Mentor', w: 500, h: 600 },

  // Gallery
  { path: 'public/assets/gallery/gallery-01.jpg', title: 'E-SUMMIT AUDITORIUM', subtitle: 'Drop gallery-01.jpg here', cat: 'Ecosystem Moment', w: 800, h: 500 },
  { path: 'public/assets/gallery/gallery-02.jpg', title: 'LIVE PITCH EVALUATION', subtitle: 'Drop gallery-02.jpg here', cat: 'Pitch Arena', w: 500, h: 700 },
  { path: 'public/assets/gallery/gallery-03.jpg', title: 'PROTOTYPING WORKSHOP', subtitle: 'Drop gallery-03.jpg here', cat: 'Lab Workshop', w: 600, h: 600 },
  { path: 'public/assets/gallery/gallery-04.jpg', title: 'COUNCIL STRATEGY', subtitle: 'Drop gallery-04.jpg here', cat: 'Team Moment', w: 800, h: 500 },
  { path: 'public/assets/gallery/gallery-05.jpg', title: 'WAR ROOM MIDNIGHT', subtitle: 'Drop gallery-05.jpg here', cat: 'Behind The Scenes', w: 600, h: 600 },
  { path: 'public/assets/gallery/gallery-06.jpg', title: 'INNOVATION HUB', subtitle: 'Drop gallery-06.jpg here', cat: 'Campus', w: 800, h: 500 },
  { path: 'public/assets/gallery/gallery-07.jpg', title: 'FOUNDER Q&A', subtitle: 'Drop gallery-07.jpg here', cat: 'Audience Interaction', w: 500, h: 700 },
  { path: 'public/assets/gallery/gallery-08.jpg', title: 'HARDWARE DEMO TABLE', subtitle: 'Drop gallery-08.jpg here', cat: 'Engineering Expo', w: 800, h: 500 },
];

for (const item of assets) {
  const dir = path.dirname(item.path);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  // Note: we write SVG content even if the file extension is .jpg, or we can write .svg too.
  // Modern browsers and Vite handle SVGs directly or we provide inline fallback in React component!
  fs.writeFileSync(item.path + '.svg', createSvg(item.title, item.subtitle, item.cat, item.w, item.h));
}

console.log('Generated placeholder SVGs successfully!');
