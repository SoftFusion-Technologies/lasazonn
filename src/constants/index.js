import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  andina,
  shell,
  shelllogo,
  logofarmcentral,
  hammer,
  garage,
  farcentral,
  travellive,
  conectate,
  ragnar,
  threejs,
  carlos
} from '../assets';

export const navLinks = [
  {
    id: 'home',
    title: 'Inicio'
  },

  {
    id: 'parties',
    title: 'Pizzas'
  },
  {
    id: 'team',
    title: 'Calzones'
  },
  {
    id: 'contact',
    title: 'Hamburguesas'
  },
  {
    id: 'about',
    title: 'Nosotros'
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'figma',
    icon: figma
  },
  {
    name: 'docker',
    icon: docker
  }
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Starbucks',
    icon: starbucks,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'React Native Developer',
    company_name: 'Tesla',
    icon: tesla,
    iconBg: '#E6DEDD',
    date: 'Jan 2021 - Feb 2022',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Web Developer',
    company_name: 'Shopify',
    icon: shopify,
    iconBg: '#383E56',
    date: 'Jan 2022 - Jan 2023',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  },
  {
    title: 'Full stack Developer',
    company_name: 'Meta',
    icon: meta,
    iconBg: '#E6DEDD',
    date: 'Jan 2023 - Present',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  }
];

const testimonials = [
  {
    testimonial:
      'La mejor fiesta de la ciudad. El ambiente en Boro Budur es único, con música excelente y una vibra que te hace sentir como en casa. Siempre nos sorprenden con eventos espectaculares, ¡nunca una noche aburrida!',
    name: 'Carlos Garcia',
    designation: 'CEO',
    company: 'HAMMER X',
    image: carlos
  },
  {
    testimonial:
      'Boro Budur es el lugar perfecto para desconectar y disfrutar de una noche épica. Desde la atención hasta la calidad de las bebidas, todo está pensado para que cada momento sea especial. ¡No hay otro lugar igual!',
    name: 'Constanza y Julieta',
    designation: 'Encargadas',
    company: 'SHELL SHOP',
    image: shelllogo
  },
  {
    testimonial:
      'Cada vez que voy a Boro Budur, sé que voy a vivir una experiencia increíble. El equipo se asegura de que todo esté en su lugar, creando fiestas que son el centro de atención. Siempre con energía, siempre con estilo.',
    name: 'Ana Sofia',
    designation: 'Dermatóloga',
    company: 'Farmacia Central',
    image: logofarmcentral
  }
];

const projects = [
  {
    name: 'HAMMERX ',
    description:
      'Creamos una página web personalizada que no solo refleja la esencia y la energía de HAMMER X, sino que también ofrece una experiencia de usuario impecable para atraer y retener clientes. .Además, desarrollamos un sistema interno innovador para el equipo de Hammer X',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mysql',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: hammer,
    source_code_link: 'https://www.hammer.ar/'
  },
  {
    name: 'CONECTATE GROUP',
    description:
      'Desarrollamos la página oficial de la empresa líder en servicios de Internet, con un diseño exclusivo de Soft Fusion. La plataforma ofrece soluciones de conectividad confiables para hogares y negocios, asegurando una experiencia accesible e intuitiva.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mysql',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: conectate,
    source_code_link: 'https://conectategroup.netlify.app/'
  },
  {
    name: 'FARMACIA CENTRAL ',
    description:
      'Farmacia Central: Tu Aliada en Cuidado y Bienestar. Qué encontrarás en nuestra landing page?, ofrece a sus clientes valiosa información sobre cuidados de la piel y productos esenciales.Encontraras: Tips de Skincare: Consejos útiles y prácticos para el cuidado diario de la piel',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mysql',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: farcentral,
    source_code_link: 'https://farmaciacentral7.com.ar/'
  }
];

const projects2 = [
  {
    name: 'SHELL SHOP MONTEROS',
    description:
      'Descubre la combinación perfecta de café, comodidad y servicio en Shell Shop, en soft, diseñamos una página interactiva, intuitiva y muy atractiva para SHELL SHOP.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'css',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: shell,
    source_code_link: 'https://shellshopmonteros.com.ar/'
  },
  {
    name: 'GARAGE SHOWROOM',
    description:
      'Desarrollamos una aplicación personalizada que transforma la manera en que gestionan sus ventas y servicios.Nuestra aplicación incluye: Calculadora de Precios en Tiempo Real, obteniendo resultados precisos al instante. Facilita, Análiza y gráfica detallados de ventas',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'tailwindcss',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      }
    ],
    image: garage,
    source_code_link: 'https://elgarage-calculadora.netlify.app/'
  },
  {
    name: 'RAGNAR GYM',
    description:
      'Nuestra revolucionaria sala fitness tiene todo el equipamiento que necesitas para hacer deporte de una manera variada y sobre todo, efectiva.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient'
      },
      {
        name: 'css',
        color: 'green-text-gradient'
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient'
      }
    ],
    image: ragnar,
    source_code_link: 'https://ragnar-gym.netlify.app/'
  }
];
export { technologies, experiences, testimonials, projects, projects2 };
