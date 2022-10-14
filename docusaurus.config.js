// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Open Source and Bookmarks',
  tagline: 'Just Collecting 🗃',
  url: 'https://hello.santhoshveer.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mskian', // Usually your GitHub org/user name.
  projectName: 'open-source', // Usually your repo name.

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/mskian/open-source/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/mskian/open-source/tree/main',
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
      navbar: {
        title: '$root@hello-world',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Things i Use',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/mskian/open-source',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Termux',
                to: '/docs/category/termux',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/santhoshveer',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/santhoshveerece',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/mskian',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Open Source and Bookmarks.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
      "@docusaurus/plugin-pwa",
      {
        debug: false,
        offlineModeActivationStrategies: ["appInstalled", "standalone", "queryString"],
        pwaHead: [
          { tagName: "link", rel: "apple-touch-icon", sizes: "180x180", href: "/img/apple-icon-180.png" },
          //{ tagName: "link", rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
          //{ tagName: "link", rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" },
          { tagName: "link", rel: "icon", sizes: "196x196", href: "/img/favicon-196.png" },
          { tagName: "link", rel: "manifest", href: "/manifest.json" },
          { tagName: "meta", name: "theme-color", content: "#B388C5" },
          { tagName: "meta", name: "mobile-web-app-capable", content: "yes" },
          { tagName: "meta", name: "application-name", content: "Hello San" },
          { tagName: "meta", name: "apple-mobile-web-app-capable", content: "yes" },
          { tagName: "meta", name: "apple-mobile-web-app-title", content: "Hello San" },
        ],
      },
    ]
  ],
};

module.exports = config;
