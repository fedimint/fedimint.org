import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Learn more about Fedimints
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />

        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <h1 className="title">Welcome to Fedimint.org</h1>
              <p>
                This site is intended to collect research and ideas about
                federated chaumian mints to scale Bitcoin while also making it
                more private.
              </p>
              <p>
                We have provided a wiki style resource for you to learn more
                about how the protocol works and the trade offs and benefits
                that come with running or joining a Fedimint.
              </p>
            </div>
            <div className="row">
              <h2>Prior Art</h2>
              <div>
                <p>
                  We believe it is important to acknowledge the work which has
                  led up to the current Fedimint opensource protocol design.
                </p>
                <p>
                  We are currently aware of two efforts to build such a
                  federated mint:
                  <ul>
                    <li>
                      <b>
                        <a
                          href="https://github.com/fedimint/minimint"
                          target="_blank"
                        >
                          MiniMint
                        </a>
                      </b>{" "}
                      (precursor work to be renamed to Fedimint): A modular
                      federated e-cash prototype still under heavy development
                      written in Rust. It already supports all main operations
                      (deposit/withdraw via both on-chain Bitcoin and Lightning,
                      e-cash transfers) and comes with a rudimentary CLI client.
                      Some features are still missing and blocking mainnet
                      deployments, but the project is moving quickly. If you are
                      interested in contributing check out the GitHub
                      repository.
                    </li>
                    <li>
                      <b>
                        <a href="https://github.com/scritcash" target="_blank">
                          SCRIT1:
                        </a>{" "}
                      </b>
                      A half-finished implementation of a federated chaumian
                      mint written in Go, developed by Frank Braun and Jonathan
                      Logan. It does not implement BTC backing, but was the
                      first public implementation.
                    </li>
                    <li>
                      <b>SCRIT2:</b> A reimplementation of a federated chaumian
                      mint written in Go, supporting multiple currencies,
                      inter-currency swap transactions, receiver- and
                      sender-initiated half-offline transactions as well as
                      complex multiparty transactions. It is in private beta and
                      has no direct linkage with bitcoin yet. You can read more
                      on Jonathan’s blog.
                    </li>
                    <li>
                      <b>Open Transactions:</b> Open Transactions also deserves
                      a honorable mention since it already allowed for the
                      issuance of e-cash tokens backed by Bitcoin held in a
                      multisig wallet. It does not appear to support threshold
                      issuance of e-cash tokens though.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="row">
              <h2>Support and Donations</h2>

              <div>
                <p>
                  The Fedimint project is grateful for the generous support and
                  donations we’ve received from various organisations and
                  individuals including:
                </p>
              </div>
              <p>
                <ul>
                  <li>
                    <a href="https://blockstream.com/" target="_blank">
                      Blockstream
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/obi" target="_blank">
                      Obi Nwosu
                    </a>
                  </li>
                  <li>
                    <a href="https://einundzwanzig.space/" target="_blank">
                      Einundzwanzig
                    </a>
                  </li>
                  <li>
                    <a href="https://hrf.org/" target="_blank">
                      Human Rights Foundation
                    </a>
                  </li>
                  <li>
                    <a href="https://ten31.vc/" target="_blank">
                      Ten 31
                    </a>
                  </li>
                  <li>
                    <a href="https://spiral.xyz/" target="_blank">
                      Spiral
                    </a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>
        <div></div>
      </main>
    </Layout>
  );
}
