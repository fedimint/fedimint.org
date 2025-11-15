import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./wallets.module.css";
import { FaApple, FaAndroid, FaGlobe, FaDesktop, FaTerminal, FaDownload } from "react-icons/fa";

function getPlatformIcon(platform) {
  const iconMap = {
    iOS: FaApple,
    Android: FaAndroid,
    APK: FaDownload,
    Web: FaGlobe,
    Desktop: FaDesktop,
    CLI: FaTerminal,
  };
  const IconComponent = iconMap[platform];
  return IconComponent ? <IconComponent className={styles.platformIcon} /> : null;
}

function WalletCard({ wallet }) {
  return (
    <a
      href={wallet.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.walletCard}
    >
      <div className={styles.walletImageContainer}>
        {wallet.screenshot ? (
          <img
            src={wallet.screenshot}
            alt={`${wallet.name} screenshot`}
            className={styles.walletImage}
          />
        ) : (
          <div className={styles.walletImagePlaceholder}>
            <span>Screenshot coming soon</span>
          </div>
        )}
      </div>
      <div className={styles.walletContent}>
        <h3 className={styles.walletName}>{wallet.name}</h3>
        <p className={styles.walletDescription}>{wallet.description}</p>
        <div className={styles.walletTags}>
          {wallet.platforms.map((platform) => (
            <span key={platform} className={`${styles.tag} ${styles.platformTag}`}>
              {getPlatformIcon(platform)}
              {platform}
            </span>
          ))}
          {wallet.isBeta && (
            <span className={`${styles.tag} ${styles.betaTag}`}>beta</span>
          )}
        </div>
        <span className={styles.walletLink}>
          Learn more →
        </span>
      </div>
    </a>
  );
}

function CLISection() {
  return (
    <div className={styles.cliSection}>
      <div className={styles.cliContent}>
        <h3>Fedimint CLI</h3>
        <p>
          Command-line wallet included in Fedimint, primarily used for testing and debugging.
          Perfect for developers and advanced users who want direct access to Fedimint's core functionality.
        </p>
        <div className={styles.walletTags}>
          <span className={`${styles.tag} ${styles.platformTag}`}>
            {getPlatformIcon("CLI")}
            CLI
          </span>
        </div>
        <a
          href="https://github.com/fedimint/fedimint/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.walletLink}
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default function Wallets() {
  const wallets = [
    {
      name: "Fedi",
      description: "Source-available mobile app for Fedimint with chat and community features. A fully-featured, production-ready wallet designed for everyday use.",
      link: "https://www.fedi.xyz/product/",
      platforms: ["iOS", "Android", "APK"],
      isBeta: false,
      screenshot:  require("@site/static/img/wallets/fedi.png").default,
    },
    {
      name: "Ecash App",
      description: "Open source Fedimint wallet under active development. Built with a focus on power-users and exploration of new Fedimint features.",
      link: "https://ecash.love",
      platforms: ["APK"],
      isBeta: false,
      screenshot: require("@site/static/img/wallets/ecash-app.png").default,
    },
    {
      name: "Vipr",
      description: "Open source PWA Fedimint wallet in beta stage. Expect evolving features and ongoing improvements.",
      link: "https://beta.vipr.cash/",
      platforms: ["Web"],
      isBeta: true,
      screenshot: require("@site/static/img/wallets/vipr.png").default,
    },
    {
      name: "Harbor",
      description: "Open source Fedimint wallet in very early development. Currently supports signet only, perfect for testing and experimentation.",
      link: "https://github.com/MutinyWallet/harbor",
      platforms: ["Desktop"],
      isBeta: true,
      screenshot: require("@site/static/img/wallets/harbor.png").default,
    },
  ];

  return (
    <Layout
      title="Wallets"
      description="Explore the ecosystem of Fedimint wallets - from mobile apps to web-based solutions."
    >
      <section
        style={{
          background: "var(--body-background)",
          color: "var(--header-font-color)",
          padding: "4rem 0 2rem 0",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 1rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: 700, margin: "0.5em 0" }}>
            Fedimint Wallets
          </h1>
          <p style={{ fontSize: "1.5rem", maxWidth: 600, margin: "0 auto 2em auto" }}>
            Choose from a growing ecosystem of wallets to hold, send and receive Bitcoin privately.
          </p>
        </div>
      </section>

      <main style={{ padding: "2rem 0 4rem 0" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className={styles.walletsGrid}>
            {wallets.map((wallet) => (
              <WalletCard key={wallet.name} wallet={wallet} />
            ))}
          </div>

          <div style={{ marginTop: "4rem" }}>
            <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, marginBottom: "2rem" }}>
              Developer Tools
            </h2>
            <CLISection />
          </div>
        </div>
      </main>
    </Layout>
  );
}
