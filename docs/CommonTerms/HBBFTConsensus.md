# Honey Badger Byzantine Fault Tolerant Consensus

:::info
This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::


Because it takes such a central part in a federated mint we will begin with explaining the properties of [Byzantine Fault Tolerant (BFT)](https://en.wikipedia.org/wiki/Byzantine_fault) consensus algorithms. 

A byzantine fault not only allows a party to go offline, but also to maliciously continue participating in the protocol. In the following we will use  `n` as the total number of participants in a protocol and `f` as the maximum amount of faulty ones among them.

We define a BFT consensus algorithm as an algorithm that allows all honest parties to agree on a common set of items as long as fewer than `f + 1` of the participants are malicious. 

These items may be contributed by any participant and there should be no risk of targeted censorship of items. One such protocol is [Honey Badger](https://eprint.iacr.org/2016/199.pdf) BFT (HBBFT). We will mainly use it as a reference for BFT consensus properties but note that similar but more efficient ones exist (most notably [Dumbo](https://eprint.iacr.org/2020/841.pdf) and [hybrids](https://arxiv.org/pdf/2103.09425) built on top of it).

We generally assume the consensus runs in rounds, producing a common subset of the contributions made by the participants. At the start of each round each participant `i` is expected to propose a set of items `Ci` to the consensus. 

After the BFT consensus algorithm has finished (note: this involves a lot of back-and-forth communication which we ignore for now) every honest participant learns the same subset `C ⊆ C1,…,Cn` 

The consensus set `C` contains at least `n − f` contributions from different participants. 

Note how this implies that if more than `f` participants propose the same item said item is guaranteed to be included in the next consensus output.

The consensus protocols we are discussing, asynchronous ones, can only handle about `n/3` faulty nodes, so this will also be our assumption when building our protocol on top if not stated otherwise.
