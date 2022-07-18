// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fedimint Wiki",
  tagline: "A non-technical overview of the fedimint project",
  url: "https://github.com", // FLAG Set up for github pages
  baseUrl: "/wiki_fedimint/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "humansinstitute", // Usually your GitHub org/user name. FLAG
  projectName: "wiki_fedimint", // Usually your repo name. FLAG
  deploymentBranch: "gh-pages",
  trailingSlash: false, //FLAG
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/humansinstitute/fedimint-docs/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/humansinstitute/fedimint-docs/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Fedimint Wiki", // FLAG
        logo: {
          alt: "My Site Logo",
          src: "img/fedimint-icon.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          //{ to: "/blog", label: "Blog", position: "left" }, // FLAG
          {
            href: "https://github.com/humansinstitute/fedimint-docs", // FLAG
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Wiki",
                to: "/docs/intro",
              },
              {
                label: "Tech Docs",
                href: "https://fedimint.org/MiniMint/", ///
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/fedimint",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "Contribute",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/fedimint",
              },
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`, //FLAG
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
