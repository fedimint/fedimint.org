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
        // Disable the default docs plugin — we use multi-instance below
        docs: false,
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

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        // The site was restructured off of a single /docs/* tree in
        // April 2026 (docs: restructure site around three-persona
        // onboarding flow) into /users/*, /guardians/*, and an external
        // developer docs site, but no redirects were added at the time.
        // Google still has dozens of /docs/* URLs indexed, so without
        // these they 404 for anyone following a search result or an
        // AI crawler's citation. Mappings below were matched by content,
        // not guessed from filenames — several old pages had no true
        // successor (e.g. speculative/stale FAQ content) and fall back
        // to the nearest relevant hub page rather than 404ing.
        redirects: [
          {
            to: "/users/intro",
            from: [
              "/docs/intro",
              "/docs/FAQs/FutureUseCases",
              "/docs/FAQs/HistroyofFedimint",
              "/docs/FAQs/JoiningAFederation",
            ],
          },
          {
            to: "/users/how-it-works",
            from: [
              "/docs/GettingStarted/Why-Fedimint",
              "/docs/GettingStarted/What-is-a-Fedimint",
              "/docs/GettingStarted/How-FM-Transactions-Work",
              "/docs/FAQs/WhyCommunityCustody",
            ],
          },
          {
            to: "/users/privacy-and-trust",
            from: [
              "/docs/CommonTerms/Blind Signatures",
              "/docs/FAQs/WhatIsChaumianMint",
              "/docs/TradeOffs/Trust-Trade-Offs",
              "/docs/TradeOffs/NotYourKeys",
              "/docs/TradeOffs/DebasementRisk",
              "/docs/TradeOffs/RegulatoryRisk",
              "/docs/TradeOffs/TrustLNGateways",
            ],
          },
          {
            to: "/users/faq",
            from: ["/docs/CommonTerms/eCashToken", "/docs/FAQs/Backups"],
          },
          {
            to: "/guardians/intro",
            from: [
              "/docs/GettingStarted/Who-are-the-fms",
              "/docs/MiniMintDetails/MinimintDemo",
            ],
          },
          {
            to: "/guardians/how-federations-work",
            from: [
              "/docs/GettingStarted/TechCompontents",
              "/docs/MiniMintDetails/Architecture",
              "/docs/MiniMintDetails/Consensus",
              "/docs/MiniMintDetails/Wallet",
              "/docs/CommonTerms/AlephBFTConsensus",
              "/docs/FAQs/TheFederation",
              "/docs/TradeOffs/Transaction-Contract-Fulfilment",
            ],
          },
          {
            to: "/guardians/Setup/overview",
            from: ["/docs/GettingStarted/Running-a-Fedimint"],
          },
          {
            to: "/guardians/founding",
            from: ["/docs/CommonTerms/ShamirSecret"],
          },
        ],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "users",
        path: "users",
        routeBasePath: "users",
        sidebarPath: "./sidebarsUsers.js",
        editUrl: "https://github.com/fedimint/fedimint.org/tree/main/",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "guardians",
        path: "guardians",
        routeBasePath: "guardians",
        sidebarPath: "./sidebarsGuardians.js",
        editUrl: "https://github.com/fedimint/fedimint.org/tree/main/",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
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
            to: "/users/intro",
            label: "Users",
            position: "right",
          },
          {
            to: "/guardians/intro",
            label: "Guardians",
            position: "right",
          },
          {
            href: "https://sdk.fedimint.org",
            label: "Developers",
            position: "right",
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
            title: "Learn",
            items: [
              {
                label: "Users",
                to: "/users/intro",
              },
              {
                label: "Guardians",
                to: "/guardians/intro",
              },
              {
                label: "Developers",
                href: "https://sdk.fedimint.org",
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
