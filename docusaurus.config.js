// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Modern Developer Roadmap',
  tagline: 'A guide to modern software architecture, from code to cloud.',
  favicon: 'img/favicon.ico',

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
        blog: false, // Blog is disabled as requested
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "Ali Shahidid's Roadmap",
        logo: {
          alt: 'Roadmap Logo',
          src: 'img/logo.svg',
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
              {
                label: 'Part I: Strategy',
                to: '/docs/roadmap/part1',
              },
              {
                label: 'Part II: Patterns',
                to: '/docs/roadmap/part2',
              },
              {
                label: 'Part III: Tech Stack',
                to: '/docs/roadmap/part3',
              },
              {
                label: 'Part IV: Operations',
                to: '/docs/roadmap/part4',
              },
            ],
          },
          {
            title: 'Community & More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/alishahidi/roadmap',
              },
              // You can add your Twitter or other social links here
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/your_handle',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ali Shahidid. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
