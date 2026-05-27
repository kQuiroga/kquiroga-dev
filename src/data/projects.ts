import type { Locale } from '../i18n/index';

export interface RepoLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  description: Record<Locale, string>;
  stack: string[];
  liveUrl?: string;
  repos?: RepoLink[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    name: 'Ironprint',
    description: {
      en: 'Full-stack training app for tracking workouts and visualizing progression over time. Clean Architecture API with CQRS and JWT auth, paired with a React client featuring interactive charts and real-time form validation.',
      es: 'Aplicación full-stack de entrenamiento para registrar sesiones y visualizar la progresión a lo largo del tiempo. API con Clean Architecture, CQRS y autenticación JWT, junto a un cliente React con gráficos interactivos y validación de formularios en tiempo real.',
    },
    stack: ['C#', '.NET', 'PostgreSQL', 'MediatR', 'Next.js', 'React 19', 'TanStack Query', 'Recharts', 'Docker'],
    liveUrl: 'https://ironprint.kquiroga.dev',
    repos: [
      { label: 'Web', url: 'https://github.com/kQuiroga/ironprint-web' },
      { label: 'API', url: 'https://github.com/kQuiroga/ironprint-api' },
    ],
    featured: true,
  },
  {
    name: 'kquiroga.dev',
    description: {
      en: 'This portfolio — designed and built from scratch with Astro, Tailwind CSS v4, and TypeScript. Spec-driven development with a focus on performance, accessibility, and clean architecture.',
      es: 'Este portfolio — diseñado y construido desde cero con Astro, Tailwind CSS v4 y TypeScript. Desarrollo guiado por especificaciones con foco en rendimiento, accesibilidad y arquitectura limpia.',
    },
    stack: ['Astro', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://kquiroga.dev',
    featured: true,
  },
];
