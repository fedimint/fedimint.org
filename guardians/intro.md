---
sidebar_position: 1
slug: intro
---

# Becoming a Guardian

Fedimint guardians are the backbone of every federation. As a guardian, you take on the responsibility of running the infrastructure that lets your community custody and transact Bitcoin with strong privacy.

This is a role built on trust. You're not a faceless service provider — you're a family member, a friend, a respected community member who is willing to run a node and hold keys on behalf of people you care about. 

<div style={{textAlign: 'center', marginTop: '4rem'}}>

![The spectrum of federation types](/img/raw-figures/fm-community-scope.excalidraw.png)

</div>

## What Does a Guardian Do?

- **Hold keys:** You hold one key in a multi-signature Bitcoin wallet shared with your fellow guardians. No single guardian can access the funds alone.
- **Run a node:** You operate a Fedimint node next to your Bitcoin node. 
- **Process transactions:** Your node validates and processes Fedimint transactions, be it ecash transfers or Lightning contracts.

All this is highly automated, after the initial setup your main responsibility is to keep your node powered up and connected to the internet.

## What Does It Take?

Running a Fedimint node is designed to be approachable. You don't need enterprise hardware — a Raspberry Pi, a small home server, or even a cloud VPS works fine. The storage requirements are modest and grow slowly over time.

The bigger commitment is social: you and your fellow guardians are making a promise to your community to keep their funds safe and accessible. The trust model depends on guardians being people who have real relationships with their users and real consequences for betraying that trust.

## How Many Guardians?

A federation needs a minimum of 4 guardians for a robust setup (tolerating 1 Byzantine fault). Common configurations:

- **4 guardians:** Tolerates 1 malicious or offline guardian.
- **7 guardians:** Tolerates 2 malicious or offline guardians.
- **10 guardians:** Tolerates 3 malicious or offline guardians.

The more guardians, the more resilient the federation — but also the more coordination required. As you see above, for each 3 additional guardians the federation can withstand one more malicious or offline guardian. The current maximum number of guardians is 20 due to limits in the Bitcoin protocol (pre-taproot).

## Ready to Set Up?

- **[How Federations Work](/guardians/how-federations-work)** — Understand the consensus protocol and architecture.
- **Setup Guides:**
  - [Start9](/guardians/Setup/start9)
  - [Umbrel](/guardians/Setup/umbrel)
  - [Nodana](/guardians/Setup/nodana)
  - [Docker](/guardians/Setup/docker)
