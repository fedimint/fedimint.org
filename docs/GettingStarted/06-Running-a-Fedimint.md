---
sidebar_position: 6
---

# Running a Fedimint

:::info
This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::

A fedimint requires a set of trusted guardians to establish the federation, hold the keys to the bitcoin multisig and to custody the fedimint nodes. 

These guardians will play a pivotal role in securing funds and running the fedimint infrastructure on behalf of the community. We therefore envisaged this to be deployed into a situation of "second party trust".

This second party trust refers to a situation where there is a direct existing trust relationship between the individual committing funds to the fedimint and the guardians of the fedimint. 

Some examples of this second party trust relationship could be: 

- The guardian is a technically literate member of your family.
- The guardians are members of your broad friendship network.
- The guardians are respected members of the community with high degree of social capital they stand to lose through misdeeds. 
- The guardians are known institutions with a history of honest service.

This is a broad membership base of society and as such there is likely to be a very wide range of practical use cases for fedimints. 

As such, it is not the scope of the protocol to define how or why fedimints are deployed in practice, and no such specific templates are given, due to the variation in need and requirements of the community. 

Instead we expect to see a world where there a wide range (millions of individual fedimints) [deployed across the full spectrum of Cusody](https://fedimint.org/docs/GettingStarted/Who-are-the-fms).  

To support this approach Fedimint provides the protocol with minimal tools to run, monitor and manage operations. A set of APIs is then used to support 3rd party applications and services to extend these services and meet specific user needs. 
  
## High Level Reference

Whilst the specific deployment, configuration and tools used to manage a fedimint may differ there are some commonalities that are likely to be familiar across fedimint deployments.

1. Fedimints will utilize a number of fedimint nodes, operated by "guardians".
2. Fedimint nodes will be connected via public networks and may utilize different anonymous networking protocols or overlay networks for speed, simplicity or security.
3. All fedimint nodes are modular in design. 
4. Any particular node may run both core modules (eCash, multisig) as well as 3rd party modules.

Fedimint guardians as the custodians of the fedimint nodes will have responsibility for backing up the key utilized and custodying the hardware on behalf of the community.

Each fedimint node would be lightweight in practice, (akin to a pruned bitcoin node in size)  for e.g. Raspi4 with 100gb of storage - pending analysis of eCash DB growth.


