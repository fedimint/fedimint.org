---
sidebar_position: 3
---
# The Technology Components

:::caution
This Guide is being actively worked on!
:::

Fedimints use three powerful technical components to offer great privacy and interoperability: 

1. chaumian e-cash mints, 
2. federations, and 
3. lightning swaps.

Chaumian e-cash allows the Fedimint to effectively run a set of private user accounts that can spend and redeem bitcoin from the mint, without revealing to the mint their account balance or attaching private informaiton to transactions. 

This is very important in a community banking setting where knowing the exact balances of all the people in your local community could expose individuals to physical attacks if the information is leaked or hacked.  

The e-cash technology is expanded by deploying this on a federated basis. This means that the funds held in the mint are never subject to the control of a single individual and instead ==a quorum of 66%== would be required to steal user funds. 

The federation is a mechanism that shares custody of the group’s bitcoin amongst all guardians and ensures that a majority of guardians need to act to perform a transaction or redeem bitcoin and that a failure of a minority of guardians can be tolerated by the system without affecting its operation. 

This replicates the best practice model of multisig custody, used in exchanges and custody providers globally, but embeds this into a toolset which makes it easer for people to provide for themselves or others. 

is the use of two powerful technologies, federations and chaumian e-cash mints, to remove any single weak point and to maintain complete privacy for all users, and is the reason behind Fedimint’s unusual name. 

Chaumian e-cash mints are a cryptographic tool to allow the federation guardians to process transactions on behalf of any member of the group without knowing who it is or how much they have. This ensures financial privacy even though group members have delegated the complicated task of managing their bitcoin holdings to the guardians.  
