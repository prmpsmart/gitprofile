// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'prmpsmart', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/prmpsmart/prmpsmart.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/prmpsmart/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['prmpsmart/my-project1', 'prmpsmart/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['prmpsmart/gitprofile', 'prmpsmart/pandora'], // List of repository names to display. example: ['prmpsmart/my-project1', 'prmpsmart/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'piXeval',
          description:
            'Programa totalmente actualizado y diseñado desde 0.',
          imageUrl:
            'https://dinaten.com/wp-content/uploads/2024/09/inicioSesion01.png',
          link: 'https://dinaten.com/pixeval-v7/',
        },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Miracle Apata',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'prmpsmart',
    twitter: 'prmpsmart',
    mastodon: '',
    researchGate: '',
    facebook: 'prmpsmart',
    instagram: 'prmpsmart',
    reddit: '',
    threads: '',
    youtube: 'prmpsmart', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'prmpsmart',
    dev: 'prmpsmart',
    stackoverflow: 'prmpsmart', // example: '1/jeff-atwood'
    skype: 'prmpsmart',
    telegram: 'prmpsmart',
    website: '',
    phone: '+2348168524477',
    email: 'prmpsmart@gmail.com',
  },
  resume: {
    // fileUrl:
    //   'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Dart/Flutter',
    'JavaScript',
    'Node.js',
    'MongoDB',
    'Git',
    'Nginx',
    'Docker',
    'PySide/PyQt',
  ],
  experiences: [
    {
      company: 'Sofgo',
      position: 'Software Developer',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://sofgo.io',
    },
    {
      company: 'Jodna Technologies',
      position: 'Full-stack Developer',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://linkedin.com/in/JodnaTechnologies',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Federal University of Technology, Akure',
      degree: 'Bachelor of Engineering',
      from: '2018',
      to: '2023',
    },
    {
      institution: 'Saint Thomas Aquinas College, Akure',
      degree: 'SSCE',
      from: '2011',
      to: '2016',
    },
  ],
  publications: [
    {
      title: 'BLAST DESIGN USING ARTIFICIAL NEURAL NETWORK APPROACH AND LANGEFORS-KIHLSTROM BENCH BLAST MODEL',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'Prof. Saliu M. A., Ogunyemi O. B., Akinlosose V. J., Apata M. P.',
      link: 'https://www.academia.edu/104693441/BLAST_DESIGN_USING_ARTIFICIAL_NEURAL_NETWORK_APPROACH_AND_LANGEFORS_KIHLSTROM_BENCH_BLAST_MODEL?auto=download',
      description:
        `This study aims to enhance the blast design efficiency by incorporating Langefors-Kihlstrom 
model and artificial neural networks (ANN) while considering rock strength and structural 
properties of sedimentary limestone deposit at Dangote cement, Ibese mine site.`,
    },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'medium', // medium | dev
    // username: 'prmpsmart', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/prmpsmart/portfolio"
      target="_blank"
      rel="noreferrer"
    >Miracle Apata (@prmpsmart)</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
