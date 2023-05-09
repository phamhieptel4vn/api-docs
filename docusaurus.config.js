// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pitel Docs',
  tagline: 'Pitel API Document',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'autocall',
        path: 'autocall',
        routeBasePath: 'autocall',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'callcenter',
        path: 'callcenter',
        routeBasePath: 'callcenter',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'portal_autocall_guide',
        path: 'portal_autocall_guide',
        routeBasePath: 'portal_autocall_guide',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'portal_callcenter_guide',
        path: 'portal_callcenter_guide',
        routeBasePath: 'portal_callcenter_guide',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pitel_app_voip',
        path: 'pitel_app_voip',
        routeBasePath: 'pitel_app_voip',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/pitel-logo.png',
      navbar: {
        // title: 'API Documents',
        logo: {
          alt: 'Pitel APIs',
          src: 'img/pitel-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview',
            position: 'left',
            label: 'PBX APIs',
          },
          {
            to: '/autocall',
            position: 'left',
            label: 'Autocall APIs',
            activeBaseRegex: `/autocall/`,
          },
          {
            to: '/callcenter',
            position: 'left',
            label: 'Call Center APIs',
            activeBaseRegex: `/callcenter/`,
          },
          {
            to: '/pitel_app_voip',
            position: 'left',
            label: 'Pitel VoIP',
            activeBaseRegex: `/pitel_app_voip/`,
          },
          {
            href: 'https://portal.tel4vn.com/docs',
            label: 'SDK',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'UserGuide',
            position: 'right',
            items: [
              {
                label: 'CallCenter Portal Admin Guide',
                to: '/portal_callcenter_guide',
                activeBaseRegex: '/portal_callcenter_guide/',
              },
              {
                to: '/portal_autocall_guide',
                label: 'Autocall Portal Admin Guide',
                activeBaseRegex: `/portal_autocall_guide/`,
              }
            ]
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} TEL4VN`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
