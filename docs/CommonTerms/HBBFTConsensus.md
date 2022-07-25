# Honey Badger Byzantine Fault Tolerant Consensus

:::caution
This Guide is being actively worked on!
:::

Because it takes such a central part in a federated mint we will begin with explaining the properties of [Byzantine Fault Tolerant (BFT)](https://en.wikipedia.org/wiki/Byzantine_fault) consensus algorithms. 

A byzantine fault does not only allow a party to go offline, but also to maliciously continue participating in the protocol. In the following we will use  `n`

as the total number of participants in a protocol and `f` as the maximum amount of faulty ones among them.

We define a BFT consensus algorithm as an algorithm that allows all honest parties to agree on a common set of items as long as less or equal than `f` of the participants are malicious. 

These items may be contributed by any participant and there should be no risk of targeted censorship of items. One such protocol is [Honey Badger](https://eprint.iacr.org/2016/199.pdf) BFT (HBBFT). We will mainly use it as a reference for BFT consensus properties but note that similar but more efficient ones exist (most notably [Dumbo](https://eprint.iacr.org/2020/841.pdf) and [hybrids](https://arxiv.org/pdf/2103.09425) built on top of it).

We generally assume the consensus to run in rounds, producing a common subset of the contributions made by the participants. At the start of each round each participant `i` is expected to propose a set of items `Ci` to the consensus. 

After the BFT consensus algorithm has finished (note: this involves a lot of back-and-forth communication which we ignore for now) every honest participant learns the same subset `C ⊆ C1,…,Cn` 

The consensus set `C` contains at least `n − f` contributions from different participants. 

Note how this implies that if more than `f` participants propose the same item said item is guaranteed to be included in the next consensus output.

The consensus protocols we are discussing, asynchronous ones, can only handle about `1/3` faulty nodes, so this will also be our assumption when building our protocol on top if not stated otherwise.

TODO

- [x] Pull from .org site
- [x] tidy up
- [ ] Create an appropriate analogy or story?  