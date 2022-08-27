// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fedimint",
  tagline:
    "An open source protocol to custody and transact bitcoin in a community context, built on a strong foundation of privacy.",
  url: "https://humansinstitute.github.io", // FLAG Set up for github pages
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
  // i18n: { cale: "en", locales: ["en"] },

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
            "https://github.com/humansinstitute/wiki_fedimint/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/humansinstitute/wiki_fedimint/tree/main/",
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
        title: "Fedimint", // FLAG
        logo: {
          alt: "Fedimint Full Logo",
          src: "img/Fedimint-Full.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Learn more",
          },
          {
            href: "/",
            label: "  |  ",
            position: "right",
          },
          {
            to: "blog",
            label: "Resources & Updates",
            position: "right",
          },
          {
            href: "/",
            label: "  |  ",
            position: "right",
          },
          {
            href: "https://github.com/fedimint", // FLAG
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
                href: "https://twitter.com/fedimint",
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
              {
                label: "Mail",
                href: "mailto:elsirion@protonmail.com",
              },
              {
                label: "GPG Key",
                href: "https://fedimint.org/elsirion.asc",
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
