import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <img
          src={require("@site/static/img/fedimint-icon.png").default}
          alt="Fedimint Logo"
          className={styles.heroLogo}
        />
        <h1 className={styles.heroTitle}>
          Community Custody, Private by Design
        </h1>
        <p className={styles.heroSubtitle}>
          Open-source federated e-cash for Bitcoin, built for privacy and scale.
        </p>
      </div>
    </section>
  );
}

function ThreePathSection() {
  const paths = [
    {
      title: "Use Fedimint",
      description:
        "Get a wallet, join a federation, and start transacting with private, community-backed Bitcoin.",
      to: "/users/intro",
      label: "Get started",
      icon: require("@site/static/img/illustration-use.png").default,
    },
    {
      title: "Run a Federation",
      description:
        "Become a guardian for your community. Set up and operate a Fedimint federation on your own hardware.",
      to: "/guardians/intro",
      label: "Start running",
      icon: require("@site/static/img/illustration-run.png").default,
    },
    {
      title: "Build on Fedimint",
      description:
        "Build your own wallet or integrate eCash payments into your app with the Fedimint SDK.",
      to: "https://sdk.fedimint.org",
      label: "Start building",
      icon: require("@site/static/img/illustration-build.png").default,
    },
  ];

  return (
    <section className={styles.threePaths}>
      <div className="container">
        <div className={styles.pathGrid}>
          {paths.map((path) => (
            <Link key={path.title} to={path.to} className={styles.pathCard}>
              <img src={path.icon} alt={path.title} className={styles.pathIcon} />
              <h3 className={styles.pathTitle}>{path.title}</h3>
              <p className={styles.pathDescription}>{path.description}</p>
              <span className={styles.pathLink}>{path.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className={styles.howItWorks}>
      <div className="container" style={{ maxWidth: 1000 }}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className="row" style={{ display: "flex", justifyContent: "center" }}>
          <div className="col col--4" style={{ textAlign: "center" }}>
            <img
              src={require("@site/static/img/mint-deposit.png").default}
              alt="Deposit Bitcoin"
              style={{ width: 100, marginBottom: 16 }}
            />
            <h3>Deposit Bitcoin</h3>
            <p>
              Send bitcoin to your community's Fedimint and receive via
              Lightning or on-chain deposits.
            </p>
          </div>
          <div className="col col--4" style={{ textAlign: "center" }}>
            <img
              src={require("@site/static/img/mint-ecash.png").default}
              alt="Mint eCash"
              style={{ width: 100, marginBottom: 16 }}
            />
            <h3>Mint E-Cash</h3>
            <p>
              Receive privacy-preserving e-cash notes, spendable like digital
              cash.
            </p>
          </div>
          <div className="col col--4" style={{ textAlign: "center" }}>
            <img
              src={require("@site/static/img/mint-send.png").default}
              alt="Spend Privately"
              style={{ width: 100, marginBottom: 16 }}
            />
            <h3>Spend Privately</h3>
            <p>
              Transact instantly and privately with anyone, anytime, anywhere.
              Either through e-cash, Lightning or on-chain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportersSection() {
  const supporters = [
    {
      name: "Blockstream",
      url: "https://blockstream.com/",
      img: require("@site/static/img/supporters/blockstream.png").default,
    },
    {
      name: "Obi Nwosu",
      url: "https://twitter.com/obi",
      img: require("@site/static/img/supporters/obi.jpg").default,
    },
    {
      name: "Einundzwanzig",
      url: "https://einundzwanzig.space/",
      img: require("@site/static/img/supporters/einundzwanzig.png").default,
    },
    {
      name: "Human Rights Foundation",
      url: "https://hrf.org/",
      img: require("@site/static/img/supporters/hrf.png").default,
    },
    {
      name: "Ten 31",
      url: "https://ten31.vc/",
      img: require("@site/static/img/supporters/ten31.png").default,
    },
    {
      name: "Spiral",
      url: "https://spiral.xyz/",
      img: require("@site/static/img/supporters/spiral.png").default,
    },
    {
      name: "OpenSats",
      url: "https://opensats.org/",
      img: require("@site/static/img/supporters/opensats.png").default,
    },
    {
      name: "Fedi",
      url: "https://www.fedi.xyz/",
      img: require("@site/static/img/supporters/fedi.png").default,
    },
  ];

  return (
    <section className={styles.supporters}>
      <div className="container" style={{ maxWidth: 1000 }}>
        <h2 className={styles.sectionTitle}>Supporters</h2>
        <p style={{ textAlign: "center", fontSize: "1.2rem", marginBottom: 32 }}>
          The Fedimint project is grateful for the generous support and
          donations we've received from various organisations and individuals
          including:
        </p>
        <div className={styles.supportersRow}>
          {supporters.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener"
              className={styles.supporterLink}
              title={s.name}
            >
              <img
                src={s.img}
                alt={`${s.name} Logo`}
                className={styles.supporterLogo}
              />
            </a>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 80 }}>
          <Link
            className="button button--secondary button--lg"
            to="https://chat.fedimint.org"
            style={{
              background: "var(--ifm-color-primary)",
              color: "#fff",
              border: "none",
              fontWeight: 600,
              fontSize: "1.2rem",
            }}
          >
            Join the Community
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Fedimint is an open-source protocol to custody and transact bitcoin in a community context, built on a strong foundation of privacy."
    >
      <HeroSection />
      <main>
        <ThreePathSection />
        <HowItWorksSection />
        <SupportersSection />
      </main>
    </Layout>
  );
}
