import lightCodeTheme from 'prism-react-renderer';
import darkCodeTheme from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '254stack',
  tagline: 'Building Africa\'s Digital Future',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://254stack.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/254stack/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '254-stack', // Usually your GitHub org/user name.
  projectName: '254stack.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.ts'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/254-stack/254stack.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/254-stack/254stack.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        title: '254stack',
        logo: {
          alt: '254stack Logo',
          src: 'img/logo.svg',
        },
        // items: [
        //   {
        //     type: 'docSidebar',
        //     sidebarId: 'tutorialSidebar',
        //     position: 'left',
        //     label: 'Docs',
        //   },
        //   {to: '/blog', label: 'Blog', position: 'left'},
        //   {to: '/community', label: 'Community', position: 'left'},
        //   {to: '/projects', label: 'Projects', position: 'left'},
        //   {
        //     href: 'https://github.com/254-stack',
        //     label: 'GitHub',
        //     position: 'right',
        //   },
        // ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Getting Started',
          //       to: '/docs/getting-started',
          //     },
          //     {
          //       label: 'Contributing',
          //       to: '/docs/contributing',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Discord',
              //   href: 'https://discord.gg/254stack',
              // },
              {
                label: 'Twitter',
                href: 'https://twitter.com/254stack',
              },
              // {
              //   label: 'LinkedIn',
              //   href: 'https://linkedin.com/company/254stack',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/254-stack',
              },
              // {
              //   label: 'Projects',
              //   to: '/projects',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 254stack. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;