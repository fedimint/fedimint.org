---
sidebar_position: 1
---

# Why Fedimint

:::info
This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::

Bitcoin is a powerful human rights technology that enables anybody in the world to **be their own bank**.

Anyone, anywhere in the world, can run their own node, custody their own funds, and transact permissionlessly over the Bitcoin main chain or the Lightning Network.

We believe that creating simpler, private user experiences will be critical in promoting the human rights benefits of bitcoin.

Fedimint is built on three guiding pillars.

<div style={{textAlign: 'center'}}>

![The spectrum and trade offs for Fedimint Custody](/img/raw-figures/fm-benefits.excalidraw.png)

</div>

## Community Custody

Ideally bitcoiners should run their own nodes and custody their own funds.

Many people find the technical challenges of running their own nodes and holding their own funds through recovery phrase management prohibitively difficult, and opt into trusting a third party custodian like exchanges or custodial wallets.

These users sacrifice their privacy and security in favor of speed and convenience. This represents a systemic risk to the bitcoin network as large quantities of bitcoin are aggregated into single custodians.

Fedimint aims to address this by distributing custodianship across millions of communities, making it simple for them to bank themselves. These community focused 'banks' are known as Fedimint Federations.

We are building a solution which allows users to onboard to Bitcoin in a manner they find extremely convenient, without sacrificing privacy and security.

Fedimint allows bitcoiners to onboard new users, assisting them in their custody and payment model. Instead of referring a new bitcoiner to a third party custodian, you can onboard them yourself as part of a Federation.

Put another way it allows you to **be your mum's / friends / villages bank**.

We call these close, trusted relationships "2nd party custodians". Fedimint federation guardians should be close friends and family members that you know personally, and can directly influence should they ever attempt to violate your trust.

This provides bitcoiners with a third option between 3rd party centralized custodians and self custody as shown in the figure below.

<div style={{textAlign: 'center'}}>

![The spectrum and trade offs for Fedimint Custody](/img/raw-figures/fm-spectrum-custody.excalidraw.png)

</div>

Most importantly, Fedimint is interoperable with the Lightning Network. Fedimint users can at any time move their funds into their own self custody lightning wallet.

This allows Fedimint users to remain apart of the wider lightning network, making it possible to pay merchants, other users, or even move between Fedimints.

As such, a user who previously used a 3rd party custodian for convenience can retain that convenience whilst improving their privacy and control of their finances.

:::note
There is a [trade off ](../TradeOffs/NotYOurKeys) here as you are trusting a federation with your bitcoin. As such it will be important to "know your federation".
:::

## Financial Privacy

Fedimint uses [Chaumian eCash notes and blinded signatures](/docs/CommonTerms/Blind%20Signatures) to achieve privacy for federation members. Federation guardians cannot correlate inputs and outputs of federation members' transactions, and cannot see the holdings of any individual federation member.

<div style={{textAlign: 'center'}}>

![Knowledge firewall](/img/raw-figures/fm-privacy-firewall.excalidraw.png)

</div>

The mint guardians will be aware of:

- The **total amount** of bitcoin held in the community multi-sig wallet.
- The **total amount** of eCash notes outstanding for redemption.

They will be entirely unaware of:

- The **individual account balance** of a user (i.e. how many notes a user has).
- The **identity of the user** to whom a particular eCash note was issued to.
- The **identity of the user** who redeems an eCash note.
- Any **transactions of the note** which are made between issuance and redemption.

This is among the most important benefits of Fedimint over 3rd party custodians. Today, if you or anyone you transact with uses money through a custodian like an exchange, that custodian can see who you are, who you're paying, where the funds came from, and sometimes where they go afterward. Fedimint guardians see none of this information.

## Scaling

The Bitcoin UTXO set, as it exists today, cannot scale to serve billions of users self custodying through personally owned UTXOs. Even using the Lightning Network as a scaling model, it would take years of full blocks to open a single lightning channel each for a billion people. We believe this is a fundamental limit to self custody, and that, at-scale, users will have to aggregate and share ownership of UTXOs either through shared cold storage or as shared lightning channels.

The current direction this scaling model has taken is that users opt into using centralized third party custodians to manage their funds or manage their lightning channels/balances.

Fedimint provides an alternative solution: federating custody of users' funds, but maintaining interoperability with the lightning network to allow global scale payments outside of an individual Fedimint.

Fedimint takes the economic density of an entire community and collapses it into a small number of "gateway" lightning nodes.

A great way to understand this is to consider the different levels of detail in a road network connecting multiple towns.

<div style={{textAlign: 'center'}}>

![Roadmap Analogy](/img/raw-figures/fm-roadmap-analogy.excalidraw.png)

</div>

The Fedimint map (right) clearly shows the many different roads that connect different users in a town. You could imagine this as many different direct interactions and commercial activity that remains in town and doesn't clog the "regional road network".

The lightning map (left) represents this regional road network which simply connects to that "town" of activity to a broader network of similar "towns".

If we tried to connect every address in town one, with town two then we would overwhelm the area with inefficient roads.

We believe this model will allow us to build a more flexible and scalable and efficient lightning network.

:::note
There is [some recent research](https://github.com/renepickhardt/mpp-splitter/issues/12#issuecomment-1143772489) on how to scale lightning that suggests the possibility of widespread use of Fedimint Federations could increase the efficiency of the lightning network while also increasing the potential fees a Lightning Service Provider (LSP) could earn due to increased demand.
:::

---

The goal would be a world of hundreds of thousands to millions of community banks running fedimint and inter-operating over the lightning network.
