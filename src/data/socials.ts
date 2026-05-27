export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin';
  shortLabel: string;
}

export const socials: SocialLink[] = [
  {
    label: "Kevin Quiroga on GitHub",
    url: "https://github.com/kQuiroga",
    icon: 'github',
    shortLabel: 'GitHub',
  },
  {
    label: "Kevin Quiroga on LinkedIn",
    url: "https://linkedin.com/in/kevinquirogasanchez",
    icon: 'linkedin',
    shortLabel: 'LinkedIn',
  },
];
