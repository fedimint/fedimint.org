---
sidebar_position: 2
---
# What is a Fedimint

A Fedimint - or "Federated Mint" is a protocol to implement [Chaumian eCash](../CommonTerms/Chaumian%20eCash) with a federation of guardians to custody funds, instead of a centralized actor, that is integrated with the lightning network.

The user experience of a Fedimint is designed to be similar to that of a custodial lightning wallet (for example Wallet of Satoshi), with the addition of strong privacy between you and the custodian. 

It is anticipated there will be multiple federated mints deployed globally in both small and larger community instances. 

Fedimint makes a lot more sense if you imagine it on a smaller scale, for example running a Fedimint with some friends for your respective families or as a community bank for a small community with a robust circular economy. 

The protocol is flexible enough to support federations of local family members looking to formalize their custody and anonymous federations to support human rights groups in high threat environments. 

:::note
It is up to the federation guardians to consider the legal and regulatory implications of the deployment considered. 
:::

The open Fedimint protocol enables communities of Bitcoiners to come together at their own discretion, assist each other with their custody and backup arrangements and make lightning payments through a privacy preserving wallet. 

Run by the community for the community.

## Logical Structure
A Fedimint has several core components as shown in the figure below.

![High level logical model of a fedimint](/img/Fedimint-HL.png)

### Federation Guardians
Federation guardians are responsible for setting up and running the Fedimint.

They coordinate using a [consensus protocol (HBBFT)](../CommonTerms/HBBFTConsensus) which is part of the Fedimint software deployed on personal servers.

They have a number of responsibilities including:

- Manage deposits and custody of on-chain bitcoin.
- Mint new "Fedi" coins to be used for transactions in the Fedimint and for redemption of on-chain bitcoin.   
- Sign and coordinate p2p transactions inside the Fedimint. 
- Backup "shards" (individual parts of a full key) of user keys in order to restore accounts.  

The federation guardians are specific roles within the system that can only be added or removed with consensus of the existing set of guardians.  

### Fedimint Users

The users of the Fedimint, utilize wallet applications in order to interact with the Fedimint. 

They have no specific responsibilities, however, they may interact with a Fedimint in the following way:   

- Ensure they are happy with the reputation of the chosen mint.
- Register an account with the mint. 
- Deposit on chain bitcoin in exchange for "fm-BTC".
- Deposit via Lightning Network for "fm-BTC" (via LSP).
- Conduct p2p transactions in fm-BTC or via LSPs to the lightning network. 
- Backup Fedimint wallet to the Federation.

In principle anyone can become a Fedimint user as long as they have access to the on boarding link / QR code. 

The user holds "fm-BTC" which are "digital bearer certificates" stored on the users phone. These are not account balances but equivalent to digital banknotes of specific set values. As these are digital, they can be encrypted and backed up by the federation. 

### Lightning Service Providers (LSPs)

The Lighting Service Provider allows Fedimint users to interact with the broader lighting network outside of the mint. 

:::note
A lightning service provider is actually a special case of a federation user, who will accept fm-BTC in payment for paying and generating lightning invoices.
:::

The responsibilities of a lightning service provider are: 

- Conduct due diligence on the reputation of the chosen mint.
- Generate lighting receive invoices in exchange for fm-BTC.
- Pay lightning invoices, in exchange for fm-BTC.
- Deposit and withdraw on chain bitcoin to manage balance and channels.


:::caution

This section is currently being worked on.

:::

The third and final element is the powerful technical design of Fedimint.

It uses three powerful technical component to offer great privacy and interoperability: chaumian e-cash mints, federations and lightning swaps.

Chaumian e-cash allows the Fedimint to effectively run a set of private user accounts that can spend and redeem bitcoin from the mint, without revealing to the mint their account balance or attaching private informaiton to transactions. 

This is very important in a community banking setting where knowing the exact balances of all the people in your local community could expose individuals to physical attacks if the information is leaked or hacked.  

The e-cash technology is expanded by deploying this on a federated basis. This means that the funds held in the mint are never subject to the control of a single individual and instead ==a quorum of 66%== would be required to steal user funds. 

The federation is a mechanism that shares custody of the group’s bitcoin amongst all guardians and ensures that a majority of guardians need to act to perform a transaction or redeem bitcoin and that a failure of a minority of guardians can be tolerated by the system without affecting its operation. 

This replicates the best practice model of multisig custody, used in exchanges and custody providers globally, but embeds this into a toolset which makes it easer for people to provide for themselves or others. 

is the use of two powerful technologies, federations and chaumian e-cash mints, to remove any single weak point and to maintain complete privacy for all users, and is the reason behind Fedimint’s unusual name. 

Chaumian e-cash mints are a cryptographic tool to allow the federation guardians to process transactions on behalf of any member of the group without knowing who it is or how much they have. This ensures financial privacy even though group members have delegated the complicated task of managing their bitcoin holdings to the guardians.  

A more thorough break down is included in how does a Fedimint work.

Because of the nature of this open network, bitcoin can be a little difficult to grasp for many people who may otherwise benefit from a censorship resistant, open, internet enabled sound money.  