---
sidebar_position: 2
---

# How Federations Work

A Fedimint federation is a group of guardians running the Fedimint protocol together. This page covers the technical architecture at a level that's useful for operators.

## Consensus

Federation guardians coordinate using **AlephBFT**, a distributed consensus protocol that ensures the integrity of the federations even if a minority of guardians are malicious or offline. If a majority of guardians disconnect, consensus halts until enough come back online — then it picks up right where it left off.

One important consideration is latency. The longer messages travel between guardians the longer consensus rounds take (roughly 4x of p2p latency). The slowest of the fastest 2/3rds of guardians will determine the consensus latency, so if a well-connected guardian becomes unreachable the consensus latency may go up. This will result in slightly slower payments. In most real world scenarios consensus only adds about 1s to payment latency though.

## Multi-Signature Custody

Bitcoin deposited into a federation is held in a **threshold multi-signature wallet**. For a federation with `n` guardians, a threshold of `t` signatures is required to move funds, where `t` is a majority (e.g., 3-of-4, 5-of-7). No single guardian — or minority of guardians — can unilaterally move the federation's Bitcoin.

To recover a federation's funds at least `t` of `n` keys and at least one of the guardian databases need to be available. These keys are included in the backup available in the guardian UI, that backup is encrypted with the guardian password, so that also has to be remembered.

## Modular Architecture

Fedimint is built in a modular manner, the main modules are:

- **Ecash module:** Handles blind signing, issuance, and redemption of ecash notes that allow users to prove to the federation that they own moeny in it without revealing their identity.
- **Wallet module:** Manages the on-chain Bitcoin multi-sig and processes withdraw and deposit requests.
- **Lightning module:** Implements HTLC-like smart contracts that allow making atomic payments via a Lightning Gateway. The smart contracts ensure that the gateway doesn't need to be trusted since it can't steal from users.

There's also the **Meta module** which is a helper allowing guardians to communicate meta information such as the federation name, default currencies, etc. to client apps. For more information see the [docs in the main Fedimint repo](https://github.com/fedimint/fedimint/tree/master/docs/meta_fields).

Additional modules can be added by the federation, enabling custom functionality. One such example is the [Fedi Stability Pools module](https://github.com/fedixyz/fedi/tree/master/crates/modules/stability-pool), enabling users to hedge against Bitcoin's volatility. All nodes in a federation must agree on the installed modules at setup time. Modules can't be added after the fact.

## Lightning Gateway

The Lightning Gateway is how federation users interact with the broader Lightning Network. A gateway is simply a federation user who also runs a Lightning node that uses special smart contracts inside fedimint to offer atomic Lightning payments to other users. How this works in detail:

- **Outgoing payments:** A user locks ecash to a contract containing a Lightning invoice. The gateway pays the invoice and sweeps the ecash using the preimage received on payment completion.
- **Incoming payments:** The user puts up the preimage to a payment hash used in the invoice up for sale. The federation makes sure that it is only revealed once ecash is deposited into a contract redeemable by the user. The gateway then uses the preimage to claim the incoming lightning payment.

Any user can run a gateway — it doesn't have to be a guardian. Multiple gateways can operate within a single federation, providing redundancy and competition. To run one yourself see the [gateway documentation in the Fedimint repo](https://github.com/fedimint/fedimint/blob/master/docs/gateway.md).

## Node Requirements

Each Fedimint node is lightweight, system requirements:
- Memory: 1GB minimum, 2GB recommended
- Disk: 10GB minimum
- CPU: 1 core minimum, 2 cores recommended

This means it can run on home servers, single-board computers (Raspberry Pi), old laptops, or cloud VPS. Since redundancy is built into the protocol any single guardian doesn't have to run their node one super reliable hardware. The system keeps running even if some guardians are offline.

See the [setup overview](/guardians/Setup/overview) for the different supported modes of running Fedimint.
