// resume content — single source for /resume (styled), resume.txt (plain) and the PDF.
// derived from info.ts where possible; bullets are resume-specific (tighter, outcome-first).
import { info } from './info.ts';

export const resume = {
  meta: {
    name: info.name,
    handle: info.handle,
    tagline: 'designer · maker · coder',
    url: info.baseUrl.replace('https://', ''),
    email: info.contact.email,
    compiled: new Date().toISOString().slice(0, 10),
  },

  header: [
    { k: 'role', v: 'creative technologist' },
    { k: 'base', v: 'malmö, se — remote-friendly' },
    { k: 'web', v: info.baseUrl.replace('https://', '') },
    { k: 'mail', v: info.contact.email },
    { k: 'git', v: 'github.com/fabio-cassisa' },
    { k: 'in', v: 'linkedin.com/in/fabiocassisa' },
  ],

  experience: [
    {
      role: 'Creative Developer',
      company: 'Adnami',
      where: 'Copenhagen, DK',
      when: '2024 — present',
      bullets: [
        'Own the creative development pipeline for high-impact ad formats (Skin, Midscroll, Topscroll) — from Figma to certified, shipped creatives for major brands across the Nordics.',
        'Built globally certified format templates for programmatic execution; drive format R&D and design research for new products.',
        'Design and build AI-agentic tooling for the creative workflow — automated QA, delivery pipelines, and an agent-assisted production system used daily.',
      ],
    },
    {
      role: 'CTO & Co-Founder → Advisor',
      company: '4Foodies',
      where: 'Turin, IT',
      when: '2021 — 2025',
      bullets: [
        'Co-founded a food-tech startup; owned brand identity, product design and web. Raised ~500k EUR and opened a physical store; transitioned to advisor after selling shares.',
      ],
    },
  ],

  // pre-2024 history, compressed to a dense one-line ledger
  ledger: [
    { when: '2022–23', what: 'Design Researcher — Design Disciplin, Malmö (design-career research tool)' },
    { when: '2021', what: 'Creative Technologist — Art Value, Stockholm (KTH-incubated digital art platform)' },
    { when: '2021', what: 'Commercial & Interior Design — IKEA, Turin (3ds Max store layouts, launches)' },
    { when: '2020–21', what: 'Designer & Developer — Pangramma, Turin (client sites, GSAP/Three.js/D3)' },
  ],

  projects: [
    {
      title: 'carlos',
      blurb: 'Local-first AI agent system — memory, vector search, MCP tools, self-improving workflows. My daily dev sidekick.',
      tags: ['ts', 'lancedb', 'mcp'],
    },
    {
      title: 'this résumé & portfolio',
      blurb: 'Terminal-aesthetic site with a live ASCII hero, draggable windows and a palette picker; this PDF is printed from it by code.',
      tags: ['astro', 'tailwind'],
    },
    {
      title: 'sculptr',
      blurb: 'Turn any SVG or sketch into an interactive 3D sculpture — real-time extrusion, materials, lighting, and export.',
      tags: ['three.js', 'next.js', 'electron'],
    },
    {
      title: 'client studio work',
      blurb: 'Sites for studios & artists — music studio with audio-reactive waveform, bilingual tattoo-studio rebuilds, booking platforms.',
      tags: ['astro', 'next.js', 'gsap'],
    },
  ],

  stack: {
    code: ['typescript', 'javascript', 'python', 'html/css'],
    web: ['astro', 'react', 'next.js', 'node.js'],
    motion: ['gsap', 'three.js', 'web audio'],
    'ai/agents': ['mcp', 'anthropic', 'vector search'],
    design: ['figma', 'adobe cc', 'blender', 'rhino'],
  },

  education: [
    { when: '2021–22', what: "MSc Interaction Design — Malmö University" },
    { when: '2019–20', what: 'HCI exchange — KTH, Stockholm' },
    { when: '2017–21', what: 'BSc Industrial & Visual Design — Politecnico di Torino' },
  ],

  languages: [
    { k: 'it', v: 'native' },
    { k: 'en', v: 'fluent' },
    { k: 'sv', v: 'fluent' },
    { k: 'da', v: 'working' },
    { k: 'es', v: 'conversational' },
  ],
};
