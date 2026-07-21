// portfolio content — all site data lives here
// update this file to change what the site displays

export const info = {
  name: 'Fabio Cassisa',
  handle: 'dagas',
  title: 'creative technologist',
  baseUrl: 'https://dagas-portfolio.vercel.app',

  about: [
    'designer, developer, maker — a creative technologist who works between disciplines.',
    'i build where code meets craft: websites and interfaces, but also physical-computing prototypes, 3d tools, generative visuals, sound toys, and ai agents. code that feels designed, design that actually ships.',
    'background in industrial design (politecnico di torino), interaction design (malmö university, kth exchange), then front-end and creative coding (technigo). today i build high-impact ad formats, creative tooling, and ai-powered pipelines at adnami — and take on select studio & client work after hours.',
    'polymath in progress — always learning, always shipping. design, code, hardware, and art are all just tools. what matters is what you make with them.',
  ],

  socialMedia: {
    github: 'https://github.com/fabio-cassisa',
    linkedin: 'https://www.linkedin.com/in/fabiocassisa/',
    twitter: 'https://x.com/FabioCassisa',
    mastodon: 'https://mastodon.social/@Dagas',
  },

  // ── CONTACT ── freelance funnel endpoints.
  contact: {
    bookingUrl: 'https://cal.com/fabio-cassisa/intro-call',
    bookingLabel: 'Book an intro call',
    email: 'cassisafabio97@gmail.com',
    location: 'Malmö, SE — working remote',
  },

  // ── SERVICES ── the freelance offer. Positioning: brand respect for people
  // whose craft outgrew their web presence. Pricing is per-project, quoted after
  // a free audit — no fixed SEK numbers here on purpose (Fabio's call to add).
  services: {
    intro: 'Websites for studios, artists & makers. I audit what you have, keep your brand, and rebuild it into something fast, distinctive, and yours.',
    tiers: [
      {
        num: '01',
        accent: true,
        title: 'One-Pager',
        who: 'Artists · freelancers · launches · events',
        body: 'A single, strong page that does one job well. Custom design, motion, responsive, deployed and live.',
        includes: ['bespoke one-page design', 'scroll motion', 'domain + deploy', 'basic SEO'],
        tag: 'from a weekend',
      },
      {
        num: '02',
        accent: false,
        title: 'Full Site',
        who: 'Studios · small businesses · practices',
        body: 'A multi-page site built around your brand. Fast, static, editable, and found on Google. Bilingual if you need it.',
        includes: ['multi-page custom build', 'bilingual / i18n', 'SEO + structured data', 'CMS-light content'],
        tag: 'most popular',
      },
      {
        num: '03',
        accent: false,
        title: 'Site + Booking',
        who: 'Anyone taking bookings or selling',
        body: 'Everything in Full Site, plus the machinery: booking flows, client dashboards, payments, integrations.',
        includes: ['booking / commerce flow', 'client dashboard', 'payments + email', 'admin tooling'],
        tag: 'live client work',
      },
    ],
    // The entry point that de-risks the whole thing — ties to the redesign playbook.
    hook: 'Not sure where to start? I\'ll audit your current site for free — design, speed, SEO, brand — and show you exactly what a rebuild would change. No pitch, just the findings.',
  },

  stack: {
    languages: ['js', 'ts', 'html', 'css', 'python'],
    frameworks: ['react', 'astro', 'node.js', 'next.js', 'svelte'],
    animation: ['gsap', 'three.js', 'css animations'],
    'ai / agents': ['mcp', 'lancedb', 'vector search', 'openai', 'anthropic'],
    design: ['figma', 'adobe cc', 'xd', 'rhinoceros', 'davinci resolve', 'blender'],
    methodology: ['double diamond', 'delft methods', 'agile', 'rtd'],
    tools: ['git', 'vite', 'vercel', 'chrome extensions', 'raspberry pi'],
  },

  experience: [
    {
      role: 'Creative Developer',
      company: 'Adnami',
      location: 'Copenhagen, Denmark',
      start: 'Jun 2025',
      end: 'Present',
      description: [
        'Owning the internal creative development pipeline and delivery tooling',
        'Building and shipping high-impact ad formats (Skin, Midscroll, TopScroll)',
        'Crafting creative tools and building AI agentic pipelines for the creative and dev workflow',
        'Driving format R&D and design research for new products',
      ],
    },
    {
      role: 'Junior Creative Developer',
      company: 'Adnami',
      location: 'Copenhagen, Denmark',
      start: 'Jun 2024',
      end: 'Jun 2025',
      description: [
        'Built globally certified templates for executing high-impact ad formats programmatically',
        'Collaborated with design and product teams on format delivery and iteration',
      ],
    },
    {
      role: 'Advisor',
      company: '4Foodies',
      location: 'Turin, Italy (Remote)',
      start: 'Oct 2023',
      end: 'Apr 2025',
      description: [
        'Transitioned from hands-on CTO role to strategic advisory after selling shares',
        'Provided guidance on tech direction and product decisions',
      ],
    },
    {
      role: 'CTO & Co-Founder',
      company: '4Foodies',
      location: 'Turin, Italy',
      start: 'Jan 2021',
      end: 'Oct 2023',
      description: [
        'Designed the brand identity, logo, and guidelines',
        'Prototyped the mobile app in Figma',
        'Built the first site in WordPress with custom PHP, then rebuilt as a SPA landing page',
      ],
    },
    {
      role: 'Design Researcher',
      company: 'Design Disciplin',
      location: 'Malmö, Sweden',
      start: 'Aug 2022',
      end: 'Jan 2023',
      description: [
        'Design research for Design Navigator — a career guidance tool for designers and developers',
        'Produced research presentations and contributed UI work to the main website',
      ],
    },
    {
      role: 'Creative Technologist',
      company: 'Art Value',
      location: 'Stockholm, Sweden',
      start: 'Apr 2021',
      end: 'Dec 2021',
      description: [
        'Produced 2D and 3D content for a digital art platform incubated at KTH',
        'Built the web presence with WordPress and custom code alongside a Solidity developer',
      ],
    },
    {
      role: 'Commercial & Interior Design',
      company: 'IKEA',
      location: 'Collegno, Italy',
      start: 'Feb 2021',
      end: 'Jul 2021',
      description: [
        'Created store display layouts using Autodesk 3ds Max with the IKEA library',
        'Managed new product launches, designed and built display furniture',
      ],
    },
    {
      role: 'Designer & Developer',
      company: 'Pangramma',
      location: 'Turin, Italy',
      start: 'Sep 2020',
      end: 'Jan 2021',
      description: [
        'Worked in a team of designers and developers using Agile and Scrum',
        'Wireframed and developed client websites with WordPress and custom code',
        'Experimented with web animations, data viz, 2D/3D using GSAP, Three.js, and D3.js',
      ],
    },
  ],

  education: [
    {
      school: 'Technigo',
      location: 'Stockholm, Sweden',
      start: '2023',
      end: '2023',
      degree: 'JavaScript & React — up-skill course',
    },
    {
      school: 'Malmö University',
      location: 'Malmö, Sweden',
      start: '2021',
      end: '2022',
      degree: "Master's Degree — Interaction Design",
    },
    {
      school: 'KTH Royal Institute of Technology',
      location: 'Stockholm, Sweden',
      start: '2019',
      end: '2020',
      degree: "Exchange Year — Human-Computer Interaction",
    },
    {
      school: 'Politecnico di Torino',
      location: 'Turin, Italy',
      start: '2017',
      end: '2021',
      degree: "Bachelor's Degree — Industrial Design & Visual Communication",
    },
  ],

  projects: [
    // tier 1 — featured
    {
      title: 'net-assets-scraper',
      description:
        'Chrome extension that scrapes ad creative assets from live web pages. Built for internal use at Adnami.',
      tech: ['js', 'chrome extension', 'manifest v3'],
      discipline: 'tooling',
      github: 'https://github.com/fabio-cassisa/net-assets-scraper',
      live: '',
      thumbnail: '/images/netAssetsScraper.webp',
      tier: 1,
      featured: true,
    },
    {
      title: 'dev-wellness',
      description:
        'Developer wellness dashboard — focus timers, breathe exercises, habit tracking. 4 contributors, 200+ commits.',
      tech: ['react', 'redux toolkit', 'vite'],
      discipline: 'web',
      github: 'https://github.com/fabio-cassisa/dev-wellness',
      live: 'https://dev-wellness.vercel.app',
      thumbnail: '/images/devWellness.webp',
      tier: 1,
      featured: true,
    },
    {
      title: 'carlos-core',
      description:
        'Local-first AI agent workbench — knowledge base, vector search, compiled wiki, MCP tools. Personal second brain and dev sidekick.',
      tech: ['ts', 'lancedb', 'mcp', 'vector db'],
      discipline: 'ai',
      github: '',
      live: '',
      thumbnail: '',
      tier: 1,
      featured: true,
      private: true,
    },
    {
      title: 'lost-satellites',
      description:
        'Landing page for Lost Satellites — a design studio and indie game company based in Rome. Scroll-driven GSAP animations.',
      tech: ['react', 'gsap', 'css'],
      discipline: 'web',
      github: 'https://github.com/fabio-cassisa/lost-satellites',
      live: 'https://lostsatellite-v1.netlify.app',
      thumbnail: '/images/lostSatellite_V2.webp',
      tier: 1,
      featured: true,
    },
    {
      title: 'my-tasks',
      description:
        'Minimal task manager with drag-to-reorder, priority levels, dark/light theme.',
      tech: ['react', 'redux toolkit', 'vite'],
      discipline: 'web',
      github: 'https://github.com/fabio-cassisa/my-tasks',
      live: 'https://project-todo-list-beta.vercel.app',
      thumbnail: '/images/projectTodo.webp',
      tier: 1,
      featured: true,
    },
    {
      title: 'lia-tattoo',
      description:
        'Tattoo booking platform for a real client — live production site with CMS, booking flow, and multi-language support.',
      tech: ['next.js', 'supabase', 'ts', 'tailwind'],
      discipline: 'web',
      github: '',
      live: 'https://lia-tattoo.vercel.app/en',
      thumbnail: '/images/liaTattoo.webp',
      tier: 1,
      featured: true,
      private: true,
    },
    {
      title: 'studio-75',
      description:
        'Music studio website — audio-reactive waveform, Spotify integration, scroll-driven GSAP animations. Built for a real client.',
      tech: ['astro', 'gsap', 'web audio api', 'spotify api'],
      discipline: 'web',
      github: '',
      live: 'https://studio-75.vercel.app',
      thumbnail: '/images/studio75.webp',
      tier: 1,
      featured: true,
      private: true,
    },
    {
      title: 'diamant-tattoo',
      description:
        'Full redesign of a real tattoo studio\'s website — audit, vectorized brand, dark editorial UI, bilingual SV/EN, CSS-only motion. Zero-JS static rebuild of a WordPress site.',
      tech: ['astro', 'vanilla css', 'i18n', 'vercel'],
      discipline: 'web',
      github: '',
      live: 'https://diamant-tattoo.vercel.app',
      thumbnail: '/images/diamantTattoo.webp',
      tier: 1,
      featured: true,
      private: true,
      caseStudy: '/case/diamant-tattoo',
    },
    // tier 2 — supporting
    {
      title: '3d-product-viewer',
      description:
        'Scroll-driven 3D product showcase with camera animation.',
      tech: ['ts', 'webgi sdk', 'gsap', 'vite'],
      discipline: '3d',
      github: 'https://github.com/fabio-cassisa/3d-product-viewer',
      live: '',
      thumbnail: '',
      tier: 2,
      featured: false,
    },
    {
      title: 'resonance',
      description:
        'Hardware + software bridge — micro:bit sensor to web interface with vibration patterns and neopixel animations.',
      tech: ['js', 'micro:bit', 'web serial'],
      discipline: 'hardware',
      github: 'https://github.com/fabio-cassisa/resonance',
      live: 'https://fabio-cassisa.github.io/resonance/',
      thumbnail: '',
      tier: 2,
      featured: false,
    },
    {
      title: '4foodies-landing',
      description:
        'SPA landing page for a food-tech startup I co-founded.',
      tech: ['js', 'html', 'css'],
      discipline: 'web',
      github: 'https://github.com/fabio-cassisa/4foodies-landing',
      live: '',
      thumbnail: '',
      tier: 2,
      featured: false,
    },
    {
      title: 'face-detection',
      description: 'Face detection experiment using ML APIs.',
      tech: ['js', 'ml api'],
      discipline: 'ml',
      github: 'https://github.com/fabio-cassisa/face-detection',
      live: '',
      thumbnail: '',
      tier: 2,
      featured: false,
    },
    {
      title: 'book-collection',
      description: 'Book library app with planned API upgrade.',
      tech: ['react', 'api'],
      discipline: 'web',
      github: 'https://github.com/fabio-cassisa/book-collection',
      live: '',
      thumbnail: '',
      tier: 2,
      featured: false,
    },
  ],

  // ── LAB ── experiments & eclectic work. The maker/artist/technologist range
  // that the client funnel deliberately doesn't show. Curated, not exhaustive.
  experiments: [
    {
      title: 'sculptr',
      discipline: '3d',
      blurb: 'Turn any SVG into an interactive 3D sculpture. Draw on a pixel canvas, type text, or paste SVG — it extrudes into a real-time 3D object with materials, lighting, animation, and export.',
      tech: ['next.js', 'three.js', 'electron'],
      github: 'https://github.com/fabio-cassisa/sculptr',
      live: '',
      year: '2025',
    },
    {
      title: 'beat-builder',
      discipline: 'sound',
      blurb: 'A step sequencer and synth engine built from scratch on the Web Audio API — synthesized kick, snare, hats, bass, all drawn live into a reactive waveform. Lives inside the studio-75 site.',
      tech: ['web audio api', 'canvas', 'astro'],
      github: '',
      live: 'https://studio-75.vercel.app/beat',
      year: '2025',
    },
    {
      title: 'resonance',
      discipline: 'hardware',
      blurb: 'Tactile communication between two wearable micro:bit devices — vibration patterns and neopixel animations synced over radio. Exploring touch as a channel when words are too much.',
      tech: ['micro:bit', 'web serial', 'js'],
      github: 'https://github.com/fabio-cassisa/resonance',
      live: 'https://fabio-cassisa.github.io/resonance/',
      year: '2024',
    },
    {
      title: 'fio-dashboard',
      discipline: 'hardware',
      blurb: 'A design-fiction health dashboard — Arduino sensors streaming through Node serial and Socket.io into a live browser interface with GSAP-animated vitals. Made for an IxD studio at Malmö University.',
      tech: ['arduino', 'node.js', 'socket.io', 'gsap'],
      github: 'https://github.com/fabio-cassisa/FIO_dashboard-EI2021',
      live: '',
      year: '2021',
    },
    {
      title: '3d-product-viewer',
      discipline: '3d',
      blurb: 'A scroll-driven 3D product showcase — camera choreography tied to scroll position, real-time materials and lighting via the WebGi SDK.',
      tech: ['webgi sdk', 'three.js', 'gsap', 'ts'],
      github: 'https://github.com/fabio-cassisa/3d-product-viewer',
      live: '',
      year: '2024',
    },
    {
      title: 'face-detection',
      discipline: 'ml',
      blurb: 'Real-time face detection, landmark mapping, and emotion recognition running entirely in the browser on a webcam feed — no server, no upload.',
      tech: ['face-api.js', 'webcam', 'js'],
      github: 'https://github.com/fabio-cassisa/face-detection',
      live: '',
      year: '2024',
    },
  ],
};

export type Project = (typeof info.projects)[number];
export type Experiment = (typeof info.experiments)[number];
export type Experience = (typeof info.experience)[number];
export type Education = (typeof info.education)[number];
