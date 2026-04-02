---
sidebar_position: 2
---

# How Fedimint Works

## Community Custody

Many people find the technical challenges of running their own nodes and managing recovery phrases prohibitively difficult, and opt into trusting a third-party custodian like exchanges or custodial wallets. These users sacrifice their privacy and security in favor of speed and convenience.

Fedimint aims to address this by distributing custodianship across millions of communities, making it simple for them to bank themselves.

<div style={{textAlign: 'center'}}>

![The spectrum of custody options](/img/raw-figures/fm-spectrum-custody.excalidraw.png)

</div>

Instead of trusting a distant corporation, you trust people you already know — your family, friends, or community members. We call these close, trusted relationships "2nd party custodians."

Put another way, Fedimint allows you to **be your mum's / friend's / village's bank**.

## What Happens When You Use Fedimint

### Depositing Bitcoin

When you deposit Bitcoin into your federation, the guardians collectively hold it in a multi-signature wallet. In return, you receive **eCash notes** — private digital bearer certificates stored on your phone.

### Transacting

You can send eCash notes directly to other members of your federation. These transactions are instant and completely private — even the guardians can't see who paid whom.

### Lightning Payments

Need to pay someone outside your federation? Fedimint is natively interoperable with the Lightning Network. A Lightning Gateway (run by a federation member or anyone else) bridges the gap, letting you pay any Lightning invoice or receive payments from anywhere.

<div className="privacy-row">
<div className="privacy-text">

## What the Guardians See (and Don't See)

The federation guardians are aware of:
- The **total amount** of Bitcoin held in the community multi-sig wallet.
- The **total amount** of eCash notes outstanding.

They are entirely **unaware** of:
- Your **individual balance** (how many notes you hold).
- **Who** a particular eCash note was issued to.
- **Who** redeems an eCash note.
- Any **transactions** made between issuance and redemption.

This is among the most important benefits of Fedimint over third-party custodians.

</div>
<div className="privacy-image">

![Fedimint privacy firewall](/img/raw-figures/fm-privacy-firewall.excalidraw.png)

</div>
</div>
