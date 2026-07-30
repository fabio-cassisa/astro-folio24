// single source of truth for discipline → colour mapping.
// imported by ProjectCard (projects) and lab.astro (experiments) so the two
// never drift. Keys cover both project and experiment disciplines.
export const DISCIPLINE_COLORS: Record<string, string> = {
  web: 'var(--color-cyan)',
  '3d': 'var(--color-purple)',
  hardware: 'var(--color-amber)',
  ml: 'var(--color-red)',
  sound: 'var(--color-accent)',
  ai: 'var(--color-accent)',
  tooling: 'var(--color-text-muted)',
  research: 'var(--color-text-muted)',
};

export const disciplineColor = (d?: string): string =>
  (d && DISCIPLINE_COLORS[d]) || 'var(--color-text-muted)';
