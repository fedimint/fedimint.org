---
sidebar_position: 4
---
# The Technology Components

:::caution
This Guide is being actively worked on!
:::

Fedimints use three powerful technical components to offer great privacy and interoperability: 

1. Chaumian e-cash
2. Federations
3. Lightning swaps

## Chaumian eCash

Chaumian e-cash allows the Fedimint to create and redeem IOU tokens that represent claims on bitcoin. 

The technology was originally developed in the 1980's (==Check this==) and popularised through the company Digicash led by David Chaum the inventor of eCash.

Digicash, allowed users to purchase $ denominated eCash tokens, that could be transferred over the internet to perform payments.  This process relied on a centralised server run by Digicash to confirm authenticity of certificates and eliminate double spend issues. 

This was in effect the worlds first internet bank.

What's the process of issuing and redeeming eCash tokens was made anonymous through the use of [Blind Signatures](../CommonTerms/Blind%20Signatures). 

This allowed users to transact privately on the internet without the bank being aware of the specific transactions and payments made, or the balances held by any specific user. 

[More details on how this is achieved is documented here(../CommonTerms/Chaumian%20eCash). 

## Federations

The next technical innovation with Fedimints, it to take the centralised 

effectively run a set of private user accounts that can spend and redeem bitcoin from the mint, without revealing to the mint their account balance or attaching private informaiton to transactions. 

This is very important in a community banking setting where knowing the exact balances of all the people in your local community could expose individuals to physical attacks if the information is leaked or hacked.  

The e-cash technology is expanded by deploying this on a federated basis. This means that the funds held in the mint are never subject to the control of a single individual and instead ==a quorum of 66%== would be required to steal user funds. 

The federation is a mechanism that shares custody of the group’s bitcoin amongst all guardians and ensures that a majority of guardians need to act to perform a transaction or redeem bitcoin and that a failure of a minority of guardians can be tolerated by the system without affecting its operation. 

This replicates the best practice model of multisig custody, used in exchanges and custody providers globally, but embeds this into a toolset which makes it easer for people to provide for themselves or others. 

is the use of two powerful technologies, federations and chaumian e-cash mints, to remove any single weak point and to maintain complete privacy for all users, and is the reason behind Fedimint’s unusual name. 

Chaumian e-cash mints are a cryptographic tool to allow the federation guardians to process transactions on behalf of any member of the group without knowing who it is or how much they have. This ensures financial privacy even though group members have delegated the complicated task of managing their bitcoin holdings to the guardians.  
