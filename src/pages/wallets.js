import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "@docusaurus/router";
import Layout from "@theme/Layout";
import styles from "./wallets.module.css";
import { FaApple, FaAndroid, FaGlobe, FaDesktop, FaTerminal, FaDownload, FaFilter } from "react-icons/fa";

const MODULE_INFO = {
  "ln-v1":    { name: "Lightning", version: "v1", status: null },
  "ln-v2":    { name: "Lightning", version: "v2", status: "experimental" },
  "wallet":   { name: "On-Chain",   version: null,  status: null },
  "mint":     { name: "Ecash",     version: null,  status: null },
  "meta":     { name: "Meta",      version: null,  status: null },
  "sb-v1":    { name: "Stable Balance", version: "v1", status: "deprecated" },
  "sb-v2":    { name: "Stable Balance", version: "v2", status: null },
};

const DEFAULT_MODULES = ["ln-v1", "wallet", "mint", "meta"];

function getModuleBadgeClass(status) {
  if (status === "experimental") return "moduleExperimental";
  if (status === "deprecated") return "moduleDeprecated";
  return "moduleStable";
}

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
        <div className={styles.moduleTags}>
          {wallet.modules.map((mod) => {
            const info = MODULE_INFO[mod];
            const badgeClass = getModuleBadgeClass(info.status);
            return (
              <span key={mod} className={`${styles.moduleTag} ${styles[badgeClass]}`}>
                <span className={styles.moduleTagName}>{info.name}</span>
                {info.version && <span className={styles.moduleVersion}>{info.version}</span>}
              </span>
            );
          })}
        </div>
        <span className={styles.walletLink}>
          Learn more →
        </span>
      </div>
    </a>
  );
}

const ALL_MODULES = Object.keys(MODULE_INFO);
const ALL_PLATFORMS = ["iOS", "Android", "APK", "Web", "Desktop"];

function parseParams(search) {
  const params = new URLSearchParams(search);
  const modules = params.get("modules") ? params.get("modules").split(",").filter(m => ALL_MODULES.includes(m)) : [];
  const platforms = params.get("platforms") ? params.get("platforms").split(",").filter(p => ALL_PLATFORMS.includes(p)) : [];
  const beta = params.get("beta") === "0" ? false : true;
  return { modules, platforms, beta };
}

function buildSearch(filters) {
  const params = new URLSearchParams();
  if (filters.modules.length > 0) params.set("modules", filters.modules.join(","));
  if (filters.platforms.length > 0) params.set("platforms", filters.platforms.join(","));
  if (!filters.beta) params.set("beta", "0");
  const str = params.toString();
  return str ? `?${str}` : "";
}

function FilterBar({ filters, setFilters }) {
  const [open, setOpen] = useState(false);

  const hasActiveFilters = filters.modules.length > 0 || filters.platforms.length > 0 || !filters.beta;

  function toggleModule(mod) {
    setFilters(f => ({
      ...f,
      modules: f.modules.includes(mod) ? f.modules.filter(m => m !== mod) : [...f.modules, mod],
    }));
  }

  function togglePlatform(plat) {
    setFilters(f => ({
      ...f,
      platforms: f.platforms.includes(plat) ? f.platforms.filter(p => p !== plat) : [...f.platforms, plat],
    }));
  }

  function toggleBeta() {
    setFilters(f => ({ ...f, beta: !f.beta }));
  }

  return (
    <div className={styles.filterContainer}>
      <button
        className={`${styles.filterToggle} ${hasActiveFilters ? styles.filterToggleActive : ""}`}
        onClick={() => setOpen(o => !o)}
      >
        <FaFilter /> Filter {hasActiveFilters && <span className={styles.filterCount}>{filters.modules.length + filters.platforms.length + (!filters.beta ? 1 : 0)}</span>}
      </button>
      {open && (
        <div className={styles.filterPanel}>
          <div className={styles.filterGroup}>
            <span className={styles.filterGroupLabel}>Modules</span>
            <div className={styles.filterOptions}>
              {ALL_MODULES.map(mod => {
                const info = MODULE_INFO[mod];
                const active = filters.modules.includes(mod);
                return (
                  <button
                    key={mod}
                    className={`${styles.filterChip} ${active ? styles.filterChipActive : ""}`}
                    onClick={() => toggleModule(mod)}
                  >
                    {info.name}{info.version ? ` ${info.version}` : ""}
                  </button>
                );
              })}
            </div>
          </div>
          <div className={styles.filterGroup}>
            <span className={styles.filterGroupLabel}>Platforms</span>
            <div className={styles.filterOptions}>
              {ALL_PLATFORMS.map(plat => {
                const active = filters.platforms.includes(plat);
                return (
                  <button
                    key={plat}
                    className={`${styles.filterChip} ${active ? styles.filterChipActive : ""}`}
                    onClick={() => togglePlatform(plat)}
                  >
                    {getPlatformIcon(plat)} {plat}
                  </button>
                );
              })}
            </div>
          </div>
          <div className={styles.filterGroup}>
            <span className={styles.filterGroupLabel}>Status</span>
            <div className={styles.filterOptions}>
              <button
                className={`${styles.filterChip} ${filters.beta ? styles.filterChipActive : ""}`}
                onClick={toggleBeta}
              >
                Include beta
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
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
  const history = useHistory();
  const location = useLocation();
  const [filters, setFiltersState] = useState(() => parseParams(location.search));

  function setFilters(updater) {
    setFiltersState(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      const search = buildSearch(next);
      history.replace({ ...location, search });
      return next;
    });
  }

  useEffect(() => {
    setFiltersState(parseParams(location.search));
  }, [location.search]);

  const wallets = [
    {
      name: "Fedi",
      description: "Source-available mobile app for Fedimint with chat and community features. A fully-featured, production-ready wallet designed for everyday use.",
      link: "https://www.fedi.xyz/product/",
      platforms: ["iOS", "Android", "APK"],
      modules: [...DEFAULT_MODULES, "sb-v1", "sb-v2"],
      isBeta: false,
      screenshot:  require("@site/static/img/wallets/fedi.png").default,
    },
    {
      name: "Ecash App",
      description: "Open source Fedimint wallet under active development. Built with a focus on power-users and exploration of new Fedimint features.",
      link: "https://ecash.love",
      platforms: ["APK"],
      modules: [...DEFAULT_MODULES, "ln-v2"],
      isBeta: false,
      screenshot: require("@site/static/img/wallets/ecash-app.png").default,
    },
    {
      name: "Conduit",
      description: "Open source Fedimint wallet focused on Lightning, on-chain, and ecash payments. Built for simplicity and direct access to core Fedimint modules.",
      link: "https://github.com/fedimint/fedimint",
      platforms: ["iOS", "Android"],
      modules: ["wallet", "mint", "ln-v2"],
      isBeta: false,
      screenshot: require("@site/static/img/wallets/conduit.png").default,
    },
    {
      name: "Vipr",
      description: "Open source PWA Fedimint wallet in beta stage. Expect evolving features and ongoing improvements.",
      link: "https://beta.vipr.cash/",
      platforms: ["Web"],
      modules: [...DEFAULT_MODULES],
      isBeta: true,
      screenshot: require("@site/static/img/wallets/vipr.png").default,
    },
    {
      name: "Haze Wallet",
      description: "Open source Fedimint web wallet that combines power with simplicity, offering a feature rich experience with more controllability, safe to use with small amounts",
      link: "https://harshdev098.github.io/haze-wallet/wallet",
      platforms: ["Web"],
      modules: [...DEFAULT_MODULES],
      isBeta: true,
      screenshot: require("@site/static/img/wallets/haze.png").default,
    },
    {
      name: "Harbor",
      description: "Open source Fedimint wallet in very early development. Currently supports signet only, perfect for testing and experimentation.",
      link: "https://github.com/MutinyWallet/harbor",
      platforms: ["Desktop"],
      modules: [...DEFAULT_MODULES],
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
          <FilterBar filters={filters} setFilters={setFilters} />
          <div className={styles.walletsGrid}>
            {wallets
              .filter(w => {
                if (!filters.beta && w.isBeta) return false;
                if (filters.modules.length > 0 && !filters.modules.every(m => w.modules.includes(m))) return false;
                if (filters.platforms.length > 0 && !filters.platforms.every(p => w.platforms.includes(p))) return false;
                return true;
              })
              .map((wallet) => (
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
