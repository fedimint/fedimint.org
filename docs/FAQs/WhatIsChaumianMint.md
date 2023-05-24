---
sidebar_position: 1
title: What is a Chaumian Mint
---

:::info
This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::

One of the (if not the) earliest eCash schemes were [Chaumian mints or banks](http://www.hit.bme.hu/~buttyan/courses/BMEVIHIM219/2009/Chaum.BlindSigForPayment.1982.PDF). They use blind signatures to allow the anonymous transfer of backing assets held by the mint. 

The basic idea is that a user can give the mint some amount x of an asset and the mint in turn blind signs x IOUs that allow the user to either withdraw the asset or exchange them for new IOUs or products. 

The small word “blind” does the heavy lifting here, it means that the user and mint run a cryptographic protocol that allows the user to acquire a digital signature on some data without the mint learning anything about the message or the signature so that when the mint sees one of its signatures for some message it can no longer tell to whom it was issued. 

This means trading these IOUs is completely anonymous.

“Why have I never heard of this before?” you may ask and the sad answer is that it never really caught on. 

One big problem of chaumian mints is that they are a single point of failure and an easy target for regulation and other attacks. Most countries financial regulations disallow anonymous payments to some degree, so running a mint in the open is a bad idea.

Running one anonymously brings with it the problem of trust, the operator could run away with the money at any point. This combination of problems relegated the concept to a very small, low value market, e.g. [to pay for watchtower fees](https://web.archive.org/web/20210518075600/https://lightning-wallet.com/storage-tokens) in lightning.

## What is a Federated Mint?

In a federated mint the required trust is split over multiple parties. It employs a consensus algorithm and threshold cryptography to guarantee both safety and availability even in the case that some parties are compromised. 

That means if the participants are sufficiently distributed not even a nation state level attacker can harm the federation. Running it anonymously also becomes much more attractive since there is no single party anymore that could run away with the backing funds.

## How does it relate to Bitcoin?

Bitcoin is the first asset in human history that can truly be held in a federated manner, meaning only being accessible if a certain quorum of people agrees. It is thus the perfect backing asset for a federated mint. A first, primitive version could work as follows:

- **deposit**: A User sends BTC to the federation’s wallet and in turn receives the corresponding amount of eCash notes.
- **transfer**: The user can then pay someone else using these notes, which works as follows:
    -   The payer selects appropriately many notes and sends them to the payee
    -   The payee exchanges these notes for new ones using the federated mint
    -   Only then does the payee accept the transaction, as the exchange may fail in case of a double spend
- **withdraw**: Finally any user can redeem notes for BTC again.

We see that between deposit and withdrawal there can be many internal transactions, so federated mints do not only provide excellent privacy but also scaling. One problem with this primitive version is the enormous centralization pressure it exerts, as two federated mints won’t accept each other’s notes, making big mints more attractive. This can be mitigated by integrating with Lightning. For this the federation needs to support two more operations:

- **ln-send**: pay an LN invoice using eCash notes.
- **ln-receive**: issue an invoice to a user. Once it is paid the user receives the appropriate amount of eCash notes.

With these two operations any federated mint suddenly becomes interoperable with any other Lightning node, including other federated mints. The federation essentially becomes a hosted but federated Lightning wallet.

## What about centralization?

Yes, a federated mint requires more trust than a self-hosted Lightning node or on-chain Bitcoin. But we think that the risk can be minimized sufficiently by distributing the federation members. 

There are many people that can not or do not want to run their own lightning wallet, be it because of fees or maintenance effort. 

For these a federated mint is much preferable to centralized solutions as it protects user privacy and has no single points of failure. Systemic risks should be sufficiently mitigated by the fact that any willing group of people should be able to start their own federation.
