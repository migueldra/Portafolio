// Site-wide data. Edit here instead of hunting through components.

type ContactLinks = Record<'github' | 'linkedin' | 'email', string>;

export const site = {
  name: 'AM',
  title: 'AM · Portafolio de ciberseguridad',
  description:
    'Portafolio de AM: writeups de laboratorios y CTF con su parte defensiva, proyectos, certificaciones y habilidades en ciberseguridad.',
  // Put the real file at public/cv.pdf (TODO: AM). Until then the download button returns a 404.
  cvPath: '/cv.pdf',
  // TODO: AM — fill in only what you want to make public. Leave '' to show a visible "pendiente".
  // github / linkedin: full URL. email: just the address (it becomes a mailto: link).
  links: { github: '', linkedin: '', email: '' } as ContactLinks,
};

export const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/writeups/', label: 'Writeups' },
  { href: '/proyectos/', label: 'Proyectos' },
  { href: '/habilidades/', label: 'Habilidades' },
  { href: '/certificaciones/', label: 'Certificaciones' },
  { href: '/sobre-mi/', label: 'Sobre mí' },
];

export const skillAreas = ['Redes', 'Web', 'Sistemas', 'Defensa y SOC', 'Scripting'];
