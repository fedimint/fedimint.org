---
sidebar_position: 3
---

# What is a Fedimint

:::info
This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::

A Fedimint - or "Federated Mint" is an implementation of [Chaumian eCash](../CommonTerms/Blind%20Signatures) with a federation of guardians to custody funds, instead of a centralized actor, and is natively interoperable with Bitcoin's Lightning Network.

The user experience of a Fedimint is designed to be similar to that of a custodial lightning wallet (e.g. Wallet of Satoshi) with the advantage of strong privacy for the user from the federation guardians, and a native backup scheme for a user to recover their funds from the federation.

It is anticipated there will be multiple federated mints deployed globally in both small and large community instances.

It makes sense to consider Fedimints deployed on a small scale for example, as a community bank for a small community with a robust circular economy and remember there will be many Fedimints deployed on the lightning network and not a single global implementation.

The open protocol enables communities of Bitcoiners to come together at their own discretion, assist each other with their custody and backup arrangements and make lightning payments through a privacy preserving wallet.

Fedimints are run for the community, by the community.

## Fedimint Components Structure

A Fedimint has five functional components (accounts, custody & redemption, backup & recovery, transaction processing, LN Gateway) and three user personas (Guardian, User, Lightning Gateway) as outlined in the figure and with details below.

![High level logical model of a fedimint](/img/raw-figures/fm-logical.excalidraw.png)

All of these are supported by three core technology components, discussed in greater detail in ["Overview > Technologies used in Fedimint"](TechCompontents).

### Fedimint Guardians

Fedimint guardians are the technical community members responsible for setting up and running the Federated Chaumian eCash system. They custody and backup funds and are responsible for the minting and redemption of eCash notes, that are claims against the Bitcoin reserves. A fedimint member is explicitly trusting that the federation guardians will not form a majority quorum to collude to steal user funds.

The guardians coordinate using a [distributed consensus protocol (HBBFT)](../CommonTerms/HBBFTConsensus) which is part of the Fedimint software deployed on personal servers. The consensus mechanism is Asynchronous, Byzantine Fault Tolerant, and can survive and operate even if a minority of individual federation guardians disconnect from the network. If a majority of the federation guardians disconnect, the consensus protocol will halt execution until a quorum of guardians come back online, at which point the consensus will continue.

The federation guardians are specific roles within the system that can only be added or removed with consensus of the existing set of guardians.

- **Account & Onboard:** The federation guardians will run the Fedimint protocol software stack. This will allow the guardians to generate a "joining a federation QR Code".
- **Custody & Redemption:** The federation guardians will hold private keys to the threshold multi signature contract into which bitcoin is deposited. When a user executes a deposit process they will also blind sign eCash certificates to an amount equivalent to the deposited bitcoin.
- **Backup & Recovery:** Federation members will manage the back up of "shards" (individual parts of complete file) of users' wallet data. When a recovery request is made they will manage an out of band process to confirm the authenticity of the recovery request, the identity of the federation member attempting to recover funds, and coordinate with other federation members to reconstruct the shard and recover the user's funds.
- **Transaction Processing:** review transactions submitted to the federation to ensure that only valid eCash certificates are redeemed and that new eCash certificates are generated where required ([see how do FM transactions work?](How-FM-Transactions-Work)).

### Fedimint Users

The users of the Fedimint use Fedimint compatible wallet software like [Fedi](https://www.fedi.xyz) to interact with the Fedimint. We anticipate there will be many different wallet applications, and are intentionally building Fedimint to be compatible across these different wallets.

We assume no specific technical knowledge in order for Fedimint users to send and receive Bitcoin through the Fedimint model. Our initial usecase for Fedimint is as an extremely private, federated custodial wallet.

- **Account & Onboard:** Users must ensure they are happy with the reputation of the guardians for the chosen Fedimint, then they would simply scan a QR code to connect an account.
- **Custody & Redemption:** Users can submit a request to deposit bitcoin, "pegging in", in exchange for fm-BTC eCash notes or use the fm-BTC eCash notes in their wallet in order to redeem on-chain bitcoin (note: users could also transfer out to themselves via the LN Gateway)
- **Backup & Recovery:** The user will encrypt and shard their data to be backed up to the federation by their wallet application.
- **Transaction Processing:** The user could submit transactions that transfer fm-BTC to other users. Alternatively the user can redeem transfered fm-BTC for newly issued fm-BTC, settling a paid transaction ([see how do FM transactions work?](How-FM-Transactions-Work)).
- **LN Gateway:** As an alternative to transacting inside the Fedimint, a user can create contracts (enforced by the Fedimint consensus) that will pay the lightning gateway persona to pay LN invoices on their behalf or generate lightning invoices to be paid.

In principle anyone can become a Fedimint user as long as they have access to the onboarding link / QR code. The onboarding process itself is subject to the specific implementations by the Federations.

:::note
The money "fm-BTC" held by the user are actually "digital bearer certificates" or "eCash notes" stored on the users phone.

These are not account balances but equivalent to digital banknotes of specific set values. As these are digital, they can be encrypted and backed up.
:::

### Lightning Gateway Provider

The Lighting Gateway is a Fedimint User who also runs a lightning node. 

A federation may opt to run its own lightning gateway as well, but we have intentionally architected Fedimint such that any user can act as a lightning gateway to interact with the broader lighting network outside of the mint.

The Lightning Gateway monitors the Federation for user requests to pay Lightning invoices or receive lightning payments. 

To send a lightning payment, the Fedimint User locks eCash notes to a contract which contains a lightning invoice. The lightning gateway can sweep the eCash notes from the contract by paying the lightning invoice. 

To receive a payment, the Fedimint User broadcasts a tweaked invoice to the lightning gateway. The User reveals the tweak, allowing the gateway to receive the lightning payment, in exchange for eCash notes.

- **Account & Onboard:** Similar to a user the Lightning Service provider will need to be comfortable accepting the federations fm-BTC in exchange for providing a liquidity bridge to the lightning network.
- **Custody & Redemption:** As per user persona. It is more likely a Lightning Gateway user would require the redemption and deposit service in order to more actively balance fm-BTC, lighting and on-chain balances.
- **Backup & Recovery:** As per user persona.
- **Transaction Processing:** As per user persona. The Lightning Gateway would also be running additional daemon software to automate the process of accepting contracts for lighting services ([more details in FAQs > Lightning Network Integration](How-FM-Transactions-Work))

There will need to be a market discovery process, by which users of a Fedimint are able to contract with the Lightning Gateways, the specifics of this is still to be documented.

It is anticipated there will be a process by which a Lightning Gateway registers it's service with the federation to ease discovery, but it would also be possible to have multiple unannounced gateways that users could contract with directly.
