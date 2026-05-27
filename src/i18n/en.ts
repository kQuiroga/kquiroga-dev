export interface TranslationShape {
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
    switchTo: string;
    switchAria: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    location: string;
    role: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
    manifest: {
      whoami: string;
      name: string;
      role: string;
      location: string;
      focus: string;
      status: string;
    };
  };
  about: {
    heading: string;
    p1: string;
    p2: string;
  };
  projects: {
    heading: string;
  };
  skills: {
    heading: string;
  };
  contact: {
    heading: string;
    intro: string;
    emailCta: string;
  };
  footer: {
    credit: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export const en: TranslationShape = {
  nav: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    switchTo: 'ES',
    switchAria: 'Switch to Spanish',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
  },
  hero: {
    location: 'A Coruña, Spain',
    role: 'Full-stack Developer & Software Architect',
    tagline: 'Designing distributed systems that scale and teams that grow.',
    primaryCta: 'View my work',
    secondaryCta: 'Get in touch',
    manifest: {
      whoami: '$ whoami',
      name: '> name      : Kevin Quiroga',
      role: '> role      : software_architect',
      location: '> location  : A_Coruña, ES',
      focus: '> focus     : distributed_systems · clean_architecture',
      status: '> status    : open_to_work',
    },
  },
  about: {
    heading: 'About',
    p1: 'Senior .NET developer with 5+ years designing and maintaining distributed systems in production. Specialized in microservices with C# and Vertical Slice Architecture, with a strong focus on testing, clean code, and systems that hold up under real load.',
    p2: "I've led technical teams at Inycom and Minsait — mentoring developers, defining standards, and bridging the gap between business requirements and working software. Currently deepening my work in modern frontend development and AI-assisted engineering workflows.",
  },
  projects: {
    heading: 'Projects',
  },
  skills: {
    heading: 'Skills',
  },
  contact: {
    heading: 'Contact',
    intro: "I'm open to interesting projects, collaborations, and conversations about architecture and engineering. Reach out directly.",
    emailCta: 'kevin.quiroga.sanchez@gmail.com',
  },
  footer: {
    credit: 'Built with Astro',
  },
  meta: {
    title: 'Kevin Quiroga — Full-stack Developer & Software Architect',
    description: 'Full-stack developer and software architect. Building digital products that actually work.',
  },
};
