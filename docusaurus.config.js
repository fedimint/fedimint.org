// @ts-check
import { themes as prismThemes } from "prism-react-renderer";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fedimint",
  tagline:
    "A modular open source protocol to custody and transact bitcoin in a community context, built on a strong foundation of privacy.",
  url: "https://fedimint.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",

  organizationName: "fedimint",
  projectName: "fedimint.org",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/fedimint/fedimint.org/tree/main/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/fedimint/fedimint.org/tree/main/",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: "./src/css/custom.css",
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
        disableSwitch: true,
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
            label: "Docs",
          },
          {
            to: "/wallets",
            label: "Wallets",
            position: "right",
          },
          {
            to: "/blog",
            label: "Blog",
            position: "right",
          },
          {
            href: "https://github.com/fedimint",
            position: "right",
            className: "header-github-link",
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
                label: "WebSDK",
                href: "https://web.fedimint.org",
              },
              {
                label: "Rust Docs",
                href: "https://docs.fedimint.org",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Nostr",
                href: "https://primal.net/p/nprofile1qqsgwgkrss7gthwkzc49edgxu895664setaevcp57snw2k3wlzdrghswflshg",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/fedimint",
              },
              {
                label: "Discord",
                href: "https://chat.fedimint.org",
              },
              {
                label: "Telegram",
                href: "https://t.me/fedimint",
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
          {
            title: "Contact",
            items: [
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
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
