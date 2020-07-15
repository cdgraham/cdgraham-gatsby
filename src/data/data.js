import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Christopher Graham', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'An undiscovered developer, tinkerer, artist, and multipotentialite', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Christopher',
  subtitle: 'I\'m an undiscovered developer, tinkerer, artist and multipotentialite.',
  cta: 'Tell me more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Multipotentialite who loves learning, solving problems, warehouse racking, tinkering, and crab legs. With a diverse background, I am looking for my next adventure in technology. My background includes operating nuclear reactors, software development, database and systems administrator, selling real estate, making YouTube videos, WordPress development, travelling to remote warehouses and leading teams of developers. Oh and eating crème brûlée in France.',
  paragraphTwo: 'I have worked in a variety of industries, like warehouse management, real estate, gambling, financial; and various types of organizations, the Military, Government, start-ups and large firms. Looking for work in technology/software development where I can get my hands dirty, use my current skills and learn new ones.',
  paragraphThree: 'I look forward to speaking with you.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'TarotCardOracle.jpg',
    title: 'Tarot Card Oracle Wordpress plugin',
    info: 'A Wordpress plugin for Tarot card readings.',
    info2: '',
    url: 'https://chillichalli.com/card-oracle',
    repo: 'https://github.com/cdgraham/card-oracle', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'EclipseMagazine.jpg',
    title: 'Eclipse Magazine Website',
    info: 'A racing fashion online magazine.',
    info2: '',
    url: 'https://eclipsemagazine.co.uk',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'GrowingUpFinancially.jpg',
    title: 'Growing up financially Website',
    info: 'A personal financial blog.',
    info2: '',
    url: 'https://growingupfinancially.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wp-install.jpg',
    title: 'Bash script',
    info: 'Bash script to install wordpress and a mysql database.',
    info2: 'In addition, you can install or delete Themes and Plugins, removes the default Wordpress page and post, setup Nginx, add Let\'s Encrpyt certificate and more.',
    url: '',
    repo: 'https://github.com/cdgraham/wordpress_install', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'CDGraham.jpg',
    title: 'This Website',
    info: 'A Gatsby website running on Netlify',
    info2: '',
    url: 'https://cdgraham.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'me@cdgraham.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/CuspStudio',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/cdgraham',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/christophergrahamuk',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cdgraham',
    },
  ],
};
