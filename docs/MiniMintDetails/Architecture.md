---
sidebar_position: 2
---

# Fedimint Architecture

Fedimint is a highly experimental Rust implementation of a federated chaumian mint on top of Bitcoin. If you are interested in taking a look feel free to [reach out](mailto:elsirion@protonmail.com).

In the following we will try to illuminate the high level architecture. Since this is probably not the only way to build such a federated mint we will only talk about Fedimint in particular here. Other projects like SCRIT made other design decisions that are not reflected. Maybe a more comprehensive comparison can be written at a later date.

Fedimint started out as a federated chaumian eCash prototype. By now it is a more general framework for federated financial applications. At its core lies the ability to agree on and process transactions. The possible input and output types of these transactions are defined by modules.

To implement the federated eCash functionality there currently exists two modules:

- Fediwallet: a federated on-chain wallet, supporting deposits and withdrawals
- Fedimint: a federated eCash mint, supporting issuance and spending of blind signed notes of different denominations

In the future other modules, e.g. to integrate Lightning, smart contracts or even a federated market place could be implemented.

## The Main Loop

The main functionality is implemented in one big loop shown below.

<div style={{textAlign: 'center'}}>

![](/img/architecture.svg)

</div>

A BFT consensus algorithm is used to agree on a set of consensus items. These consist of transactions submitted by clients and other data proposed by modules. This globally agreed-upon set is then split into module-specific items and transactions. Module specific items are given to the respective modules first to prepare them for the consensus round.

After that the transactions are processed by checking that the sum of input amounts is greater than or equal to outputs plus fees. If that is the case the inputs and outputs are delegated to their respective module for processing. If any is deemed invalid by a module (e.g. invalid signature) the transaction is discarded.

After all transactions have been processed the next consensus proposal is prepared. It consists of transactions submitted by clients and module specific items.

## Modules

Each module defines an input, output and consensus item type. Modules also keep their own state using the same key-value store as Fedimint. See the database documentation for more information.

| Module     | Input      | Output        | Consensus Items                                                                           |
| ---------- | ---------- | ------------- | ----------------------------------------------------------------------------------------- |
| FediWallet | Deposit    | Withdrawal    | - Block height, fees and randomness beacon <br />- Signatures for withdrawal transactions |
| FediMint   | Coin spend | Coin issuance | - Partial blind signatures of issued coins                                                |

## Client Interaction

Clients communicate with federation members via a REST API. They are expected to communicate with as many members as necessary for the required assurances since some might be malicious.

Communication is asynchronous. First, clients submit a transaction. After that they can query the transaction’s status. If the transaction is found to be faulty, the status will be error and the transaction will not be submitted to the consensus.

Once a transaction was included in a consensus round its state changes from **proposed** to **accepted** or **error** in case there was a previously undetected problem (e.g. quick double spend).

Note that the accepted state is not final. Depending on the module, outputs may need further action, e.g. generating blind signatures or actually submitting a withdrawal transaction. These will show up in the status as they become available.
