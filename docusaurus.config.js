// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fedimint",
  tagline:
    "A modular open source protocol to custody and transact bitcoin in a community context, built on a strong foundation of privacy.",
  url: "https://fedimint.org", // Set up for github pages FLAG Set to fedimint.org
  baseUrl: "/", //FLAG - Set to /
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "fedimint", // Usually your GitHub org/user name. FLAG set to "fedimint"
  projectName: "fedimint.org", // Usually your repo name. FLAG set to "fedimint.org"
  deploymentBranch: "gh-pages",
  trailingSlash: false,
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
          editUrl: "https://github.com/fedimint/wiki_fedimint/tree/main/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/fedimint/wiki_fedimint/tree/main/",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: true, //FLAG - Curruntly set to avoid having to customise dark mode CSS
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Fedimint",
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
            href: "https://github.com/fedimint",
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
                href: "https://github.com/fedimint/fedimint/wiki",
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
              {
                label: "Discord",
                href: "https://chat.fedimint.org",
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
  plugins: [[require.resolve("docusaurus-lunr-search"), { excludeRoutes: [] }]],
};
module.exports = config;
