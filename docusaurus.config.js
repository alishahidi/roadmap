// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Software Architect's Roadmap",
  tagline: 'A comprehensive guide to modern software architecture, from code to cloud.',
  favicon: 'img/roadmap-logo.png',

  // Set the production url of your site here
  url: 'https://alishahidi.github.io', // YOUR GITHUB USERNAME
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/roadmap/',

  // GitHub pages deployment config.
  organizationName: 'alishahidi', // YOUR GITHUB USERNAME
  projectName: 'roadmap', // YOUR REPO NAME

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Enable Mermaid diagrams
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Set the edit URL to your specific repo branch
          editUrl: 'https://github.com/alishahidi/roadmap/tree/main/',
        },
        blog: false, // Blog is disabled
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/roadmap-logo.png', // Social card image
      navbar: {
        title: "The Architect's Roadmap",
        logo: {
          alt: 'Roadmap Logo',
          src: 'img/roadmap-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'roadmapSidebar',
            position: 'left',
            label: 'The Roadmap',
          },
          {
            href: 'https://github.com/alishahidi/roadmap',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Roadmap Sections',
            items: [
              { label: 'Architecture & Design', to: '/docs/01-architecture-and-design' },
              { label: 'Core Backend Concepts', to: '/docs/02-core-backend-concepts' },
              { label: 'Data & Storage', to: '/docs/03-data-and-storage' },
              { label: 'Scaling & Performance', to: '/docs/04-scaling-and-performance' },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/alishahidi/roadmap',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Architect's Roadmap. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
