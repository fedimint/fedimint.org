---
sidebar_position: 0
---

# Overview

Setting up a Fedimint federation is a coordinated process between all guardians. Here's what the full journey looks like.

## Before You Start

Make sure you have:

- **Agreed on guardians.** Decide who will be part of the federation and how many guardians you'll have (minimum 4 recommended).
- **A Bitcoin node.** Each guardian needs access to a Bitcoin full node. Fedimint can be run using APIs like mempool.space, but that isn't recommended.
- **A server.** Each guardian runs a Fedimint node — this can be a Raspberry Pi, a home server, a cloud VPS, or a dedicated node platform like Start9 or Umbrel.
- **A way to coordinate.** You'll need to exchange configuration data with your fellow guardians during setup (e.g. via a group chat).

## 1. Deploy Fedimint

Each guardian installs and runs Fedimint on their platform. Different guardians can use different platforms **as long as they use the same Fedimint version**. Pick the guide that matches your setup:

- **[Start9](/guardians/Setup/start9)** — Run Fedimint as a service on your Start9 personal server.
- **[Umbrel](/guardians/Setup/umbrel)** — Install Fedimint from the Umbrel app store.
- **[Nodana](/guardians/Setup/nodana)** — Managed hosting for Fedimint guardians.
- **[Docker](/guardians/Setup/docker)** — Run Fedimint directly with Docker on any Linux server.

## 2. Found the Federation

Once all guardians have their nodes running, you go through the [founding process](/guardians/founding) together. This is a one-time event where you configure the federation's identity, generate shared keys, and bring it online. It typically takes 10–15 minutes.

## 3. After Founding

Once your federation is running:

- **Share the invite code** with your community so they can join from their wallet app.
- **Monitor your node** — keep it online and connected. The Guardian UI shows federation status.
- **[Set up a Lightning Gateway](https://github.com/fedimint/fedimint/blob/master/docs/gateway.md)** — this lets your federation members send and receive Lightning payments. Anyone can run a gateway, not just guardians.
