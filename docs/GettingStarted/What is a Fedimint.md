---
sidebar_position: 2
---
# What is a Fedimint

:::caution

This section is currently being worked on.

:::

A Fedimint - or "Federated Mint" is a protocol to implement [Chaumian eCash](../CommonTerms/Blind%20Signatures) with a federation of guardians to custody funds, instead of a centralized actor, that is integrated with the lightning network.

The user experience of a Fedimint is designed to be similar to that of a custodial lightning wallet (e.g. Wallet[[TechCompontents]] of Satoshi) with the addition of strong privacy for the user.

It is anticipated there will be multiple federated mints deployed globally in both small and large community instances. 

It makes sense to consider Fedimints deployed on a small scale for example, as a community bank for a small community with a robust circular economy and remember there will be many Fedimints deployed on the lightning network and not a single instance.  

The open protocol enables communities of Bitcoiners to come together at their own discretion, assist each other with their custody and backup arrangements and make lightning payments through a privacy preserving wallet. 

Run for the community, by the community.

## Fedimint Components Structure
A Fedimint has five functional components (accounts, custody & redemption, backup & recovery, transaction processing, LN Gateway) and three user personas (Guardian, User, Lightning Gateway) as outlined in the figure and with details below.

![High level logical model of a fedimint](/img/Fedimint-HL.png)


All of these are supported by three core technology components eCash, lighting discussed in more detail in ["Overview > The Technology Components"](TechCompontents).

### Federation Guardians
Federation guardians are the technical community members responsible for setting up and running the Fedimint.  

The guardians will coordinate using a [consensus protocol (HBBFT)](../CommonTerms/HBBFTConsensus) which is part of the Fedimint software deployed on personal servers.  This means that their computers will need to be on the same network and will be "talking" constantly in order to process the various transactions of the Fedimint.

The federation guardians are specific roles within the system that can only be added or removed with consensus of the existing set of guardians.  

- **Account & Onboard:** The federation guardians will run the Fedimint protocol software stack. This will allow the guardians to generate a "joining a federation QR Code".
- **Custody & Redemption:** The federation guardians will hold private keys to the threshold multi signature contract into which bitcoin is deposited. When a user executes a deposit process they will also blind sign eCash certificates to an amount equivalent to the deposited bitcoin.
- **Backup & Recovery:** Federation members will manage the back up of "shards" (individual parts of complete file) of users wallet data.  When a recovery request is made they will manage an out of band process to confirm the authenticity of the recovery request and coordinate with other federation members to reconstruct the shard and recover the users funds. 
- **Transaction Processing:** review transactions submitted to the federation to ensure that only valid eCash certificates are redeemed and that new eCash certificates are generated where required ([see how do FM transactions work?](howFMtransactionsWork)).
* **LN Gateway:** From the point of view of the federation the LN Gateway is simply a user accepting fm-BTC. 

### Fedimint Users

The users of the Fedimint, utilize wallet applications in order to interact with the Fedimint.  It is anticipated there will be many different wallet applications. 

These are considered a non-technical persona in that we assume no specific technical knowledge in order to complete tasks.  

* **Account & Onboard:** Users must ensure they are happy with the reputation of the guardians for the chosen Fedimint, then they would simply scan a QR code to connect an account.  
* **Custody & Redemption:** Users can submit a request to deposit bitcoin and exchange for fm-BTC certificates or use the fm-BTC certificates in their wallet in order to redeem on-chain bitcoin (note: users could also transfer out to themselves via the LN Gateway)
* **Backup & Recovery:** The user will encrypt and shard their data to be backed up to the federation by their wallet application. 
* **Transaction Processing:** The user could submit transactions that transfer fm-BTC to other users.  Alternatively the user can redeem transfered fm-BTC for newly issued fm-BTC, settling a paid transaction ([see how do FM transactions work?](howFMtransactionsWork)).
* **LN Gateway:** As an alternative to transacting inside the Fedimint, a user can create contracts (enforced by the Fedimint consensus) that will pay the lightning gateway persona to pay LN invoices on their behalf or generate lightning invoices to be paid.

In principle anyone can become a Fedimint user as long as they have access to the on boarding link / QR code, the process by which on-boarding will be managed will be managed by specific federations. 

:::note
The money "fm-BTC" held by the user are actually "digital bearer certificates" stored on the users phone. 

These are not account balances but equivalent to digital banknotes of specific set values. As these are digital, they can be encrypted and backed up.
:::

### Lightning Gateway Provider

The Lighting Service Provider allows Fedimint users to interact with the broader lighting network outside of the mint. 

They are a special case of the user persona which also runs some additional technical infrastructure software such as a lightning network routing node and software to automatically interface and review Fedimint contracts for lighting services. 

* **Account & Onboard:** Similar to a user the Lightning Service provider will need to be comfortable accepting the federations fm-BTC in exchange for providing a liquidity bridge to the lightning network.  
* **Custody & Redemption:** As per user persona. It is more likely a Lightning Gateway user would require the redemption and deposit service in order to more actively balance fm-BTC, lighting and on-chain balances.  
* **Backup & Recovery:** As per user persona.
* **Transaction Processing:** As per user persona. The Lightning Gateway would also be running additional daemon software to automate the process of accepting contracts for lighting services ([more details in FAQs > Lightning Network Integration](../FAQs/Lightning))

There will need to be a market discovery process, by which users of a Fedimint are able to contract with the Lightning Gateways, the specifics of this is still to be documented. 

It is anticipated there will be a process by which a Lightning Gateway registers it's service with the federation to ease discovery, but it would also be possible to have multiple unannounced gateways that users could contract with directly.  

