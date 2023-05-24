# What does the Federation do? 

:::info
This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::

The federation is the collective term for the guardians who actively run the Fedimint software on behalf of the users. They will run the software to custody, redeem and enforce contracts in the federation. 

## How does the federation custody the bitcoin?

The federation guardians utilize bitcoin multi signature wallet to manage the on chain funds. 

These are used to redeem federation eCash notes for bitcoin on chain. 

## Is there some ability to set limitations on withdrawals if a user requests it (max withdrawal per day, one off, etc.)?

This is possible in theory but the most practical implementations would require the introduction of some form of account based system, which would not be compatible with the Chaumian mint protocol.  One potential option would be to have the potential to keep a proportion of funds in an account based system where withdrawal thresholds can be enforced while a user’s remaining balance is held in chaumian eCash notes.

## Can the federation guardians collude and steal from me?

Guardian collusion is prevented by the configuration of the federation and the selection of its guardians. The federation uses an asynchronous BFT consensus, e.g. 3/5 or 7/13 that would require a majority to collude to steal your coins.

Within fedimint you are explicitly trusting that the federation will not collude, their incentive not to is 2nd degree social connections so a fedimint user should know in person who at least 1 of their federation guardians are and be capable of directly interacting with them.

## Can a single bad guardian rewrite my transaction to steal coins?

On receipt of a payment, you will want to swap out the eCash notes you received for new eCash notes. 

When you submit this transaction, you will specify the input coins provided and the new blind signature requests that you are trading them for.

This is constructed as a transaction which includes the inputs, outputs and an associated public key known to the user. The user then signs the transaction on submission.

This signature is part of the validation check on the consensus algorithm, as such no inputs or outputs can be changed by a rogue guardian (for example to steal the outputs) without failing the consensus round. 


## Can guardians prevent me from pegging out? 

Yes. If enough guardians collude they can prevent you from pegging out of the federation and receiving bitcoin. Of course if the same amount of guardians collude they can simply steal the coins. 

This is why "knowing your federation is so important".

## If it uses multisig custodians, what is the fundamental difference to a DPoS blockchain? 

([Originally asked on Twitter](https://twitter.com/ricardoplopes/status/1531659058607964167?t=PUTMcNfA6fYbJ7wZsVPzPw&s=19))

A - It's not a blockchain - so it doesn't have the severe limitations a blockchain imposes (and which are only needed in very few cases).
B - It's not proof of stake (delegated or otherwise) - so having more wealth doesn't confer additional rights to the owner.

In DPOS, blocks are produced by whoever stakes the most coins. In Fedimint the transactions are validated by an explicit and unchanging group of federation members. Users opt in to having these people validate their transactions. They would choose to do this because of an existing trust / reputation relationship they have with the federation members.

## How are upgrades and changes made to a federation (who decides if the rules change)?

An interesting thing to think about  is "who decides if the rules change?"

Will it usually happen that all federation members agree to an upgrade? Or might it be that only a majority agree and they replace the dissenting members? This is likely to be federation dependent and many governance models could be experimented with and implemented.  In any event, for a change to be enacted, it is likely that all guardians must approve it and upgrade their individual servers.

## What are the differences between using Liquid vs Fedimint?

There are a few differences:
 - The Liquid network is a blockchain,
 - Fedimint is a Federated server system,
 - Liquid uses Confidential Transactions to blind payment amounts but not transaction flows
 - Fedimint uses the Chaumian Mint protocol to create anonymous eCash to make almost all transaction information private
 - Liquid is designed to enable a few financial institutions to form one federation
 - Fedimint is designed to enable arbitrary diverse communities — ranging from friends to companies — to form thousands of independent federations
 - Liquid doesn't currently support Lightning
 - Fedimint supports Lightning

In summary, compared to Liquid, Fedimint doesn't require a side chain, has better privacy, faster transactions, will be more decentralized, and is interoperable with Lightning.

However, the increased privacy means that Fedimint has a greater risk of inflation on bitcoin denominated eCash notes within the system (but not on the Bitcoin main chain). This is mitigated (but not eliminated) by the requirement for second party trust in choice of Fedimint guardians, and in future, the ability to perform attestations.
