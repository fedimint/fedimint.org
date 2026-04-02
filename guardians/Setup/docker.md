---
sidebar_position: 4
---

# Setup: Docker

Docker is the most flexible way to run Fedimint — suitable for any Linux server, VPS, or local machine. This guide uses Docker Compose with Caddy as a reverse proxy for automatic HTTPS.

## Prerequisites

- A server with **Docker** and **Docker Compose** installed
- A **domain name** pointing to the server (e.g. `fedimint.example.com`) — needed for automatic TLS certificates. If you're running on a home network you can skip this and access the Guardian UI directly at `http://<local-ip>:8175`.
- Ports **80**, **443**, **8173** (tcp+udp), and **8174** (udp) open in the firewall

### Firewall Setup (UFW)

If you're using UFW, open the required ports:

```bash
ufw allow 80/tcp    # Caddy HTTP (ACME challenges + redirect)
ufw allow 443/tcp   # Caddy HTTPS (Guardian UI)
ufw allow 22/tcp    # SSH
ufw allow 8173/tcp  # fedimintd p2p (TLS)
ufw allow 8173/udp  # fedimintd p2p (iroh)
ufw allow 8174/udp  # fedimintd API (iroh)
```

## Installation

Create the directory for your federation node:

```bash
mkdir -p /opt/fedimintd
```

Create a `docker-compose.yaml` file inside it. Replace `fedimint.example.com` with your actual domain, and uncomment the sections you need:

```yaml
services:
  fedimintd:
    image: fedimint/fedimintd:v0.10.0
    ports:
      - 8173:8173/tcp # p2p tls
      - 8173:8173/udp # p2p iroh
      - 8174:8174/udp # api iroh
    volumes:
      - fedimintd_data:/data
    environment:
      - FM_ENABLE_IROH=true
      - FM_BITCOIN_NETWORK=bitcoin
      - FM_ESPLORA_URL=https://mempool.space/api
      # To use your own bitcoind, uncomment the following lines. When both
      # FM_BITCOIND_URL and FM_ESPLORA_URL are set, fedimintd uses bitcoind as
      # the primary bitcoin backend and automatically falls back to esplora if
      # bitcoind is unavailable (e.g. while it is still syncing). Transactions
      # are broadcast to both backends simultaneously. Once bitcoind is fully
      # synced you can remove FM_ESPLORA_URL to use bitcoind exclusively.
      # - FM_BITCOIND_URL=http://bitcoind:8332
      # - FM_BITCOIND_USERNAME=bitcoin
      # - FM_BITCOIND_PASSWORD=bitcoin
      - FM_BIND_P2P=0.0.0.0:8173
      - FM_BIND_API=0.0.0.0:8174
      - FM_BIND_UI=0.0.0.0:8175
    restart: always

  # Uncomment to run your own bitcoind alongside fedimintd.
  # bitcoind:
  #   image: bitcoind/bitcoin:28.1
  #   volumes:
  #     - bitcoind_data:/home/bitcoin/.bitcoin
  #   environment:
  #     BITCOIN_DATA: /home/bitcoin/.bitcoin
  #   command:
  #     - -server=1
  #     - -rpcuser=bitcoin
  #     - -rpcpassword=bitcoin
  #     - -rpcallowip=0.0.0.0/0
  #     - -rpcbind=0.0.0.0
  #   restart: always

  # Uncomment to expose the Guardian UI via HTTPS. Replace the domain with yours.
  # Caddy automatically obtains and renews Let's Encrypt TLS certificates.
  caddy:
    image: caddy:2
    ports:
      - 80:80
      - 443:443
    command: caddy reverse-proxy --from fedimint.example.com --to fedimintd:8175
    volumes:
      - caddy_data:/data
    depends_on:
      - fedimintd
    restart: always

volumes:
  fedimintd_data:
  # bitcoind_data:
  caddy_data:
```

A few things to note about this configuration:

- The Guardian UI port (8175) is **not** exposed to the host directly. Caddy reverse-proxies to it over the internal Docker network, so the UI is only accessible via HTTPS. Caddy automatically obtains and renews a Let's Encrypt TLS certificate.
- The default configuration uses `mempool.space` as the Bitcoin backend, which works but means trusting a third party. For a production federation, uncomment the `bitcoind` service and the `FM_BITCOIND_*` environment variables to run your own Bitcoin node.
- When both `FM_BITCOIND_URL` and `FM_ESPLORA_URL` are set, fedimintd uses bitcoind as the primary backend and falls back to esplora automatically (e.g. while bitcoind is still syncing).

## Starting the Services

```bash
cd /opt/fedimintd
docker compose up -d
```

Verify both containers are running:

```bash
docker ps
```

Check that Caddy obtained a TLS certificate:

```bash
docker logs fedimintd-caddy-1 2>&1 | grep certificate
# Look for "certificate obtained successfully"
```

Check that fedimintd started and is waiting for setup:

```bash
docker logs fedimintd-fedimintd-1 2>&1 | tail -5
# Should show: "Setup UI running at http://0.0.0.0:8175"
```

## Running the Setup Ceremony

Once your node is running, open `https://<your-domain>` in a browser to access the Guardian UI. From here follow the [Founding a Federation](/guardians/founding) guide with your fellow guardians.

After DKG completes and you can log in, **download the guardian backup** immediately from the dashboard. Store it securely — anyone with this file and your password can run your guardian node.

The invite code becomes available after the federation completes its first consensus session (typically about 3 minutes after setup). Refresh the dashboard to see it.

## Stopping and Restarting

```bash
cd /opt/fedimintd
docker compose down      # stop
docker compose up -d     # start again
```

Data persists in Docker volumes (`fedimintd_data`, `caddy_data`), so your federation state is safe across restarts.

