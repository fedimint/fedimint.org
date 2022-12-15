---
sidebar_position: 6
---

# Running a Fedimint

:::info
This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::

A fedimint requires a set of trusted guardians to establish the federation, hold the keys to the bitcoin multisig and to custody the hardware that runs the fedimint nodes. 

These guardians will play a pivotal role in securing funds and running the fedimint infrastructure on behalf of the community. Therefore it is envisaged that these guardians will be part of a "second party trust" network with the user.

Second party trust refers to a situation where there is a direct existing trust relationship between the individual committing funds to the fedimint and the guardians of the fedimint. 

Some examples of this second party trust relationship could be: 

- The guardian is a technically literate member of your family.
- The guardians are members of your broad friendship network.
- The guardians are respected members of a local community with high degree of social capital that hey stand to lose through misdeeds. 
- The guardians are known institutions with a history of honest service.

This is a broad membership base of society and as such there is likely to be a very wide range of practical use cases and varied implementation patterns for fedimints. 

As such, it is not the scope of the protocol to define how or why fedimints are deployed in practice, and no such specific templates are given, due to the variation in need and requirements of the community. 

Instead we expect to see a world where there a wide range (millions of individual fedimints) [deployed across the full spectrum of custody](https://fedimint.org/docs/GettingStarted/Who-are-the-fms).  

To support this approach Fedimint provides the protocol with minimal tools to run, monitor and manage operations. 

A set of APIs is then used to support 3rd party applications and services to extend these services and meet specific user needs, allowing for innovation in a competitive ecosystem outside of the core protocol. 
  
## Deployment Concepts

Whilst the specific deployment, configuration and tools used to manage a fedimint may differ there are some commonalities that are likely to be familiar across fedimint deployments.

1. Fedimints will utilize a number of fedimint nodes, operated by "guardians".
2. Fedimint nodes will be connected via public networks and may utilize different anonymous networking protocols or overlay networks for speed, simplicity or security.
3. All fedimint nodes are modular in design. 
4. Any particular node may run both core modules (eCash, multisig) as well as 3rd party modules.
5. The specific configuration ad module install base of a fedimint node will be driven by the needs of the fedimint community. 
6. Fedimint nodes will come to consensus on installed modules. 

Fedimint guardians as the custodians of the fedimint nodes will have responsibility for backing up an private keys and custodying the hardware on behalf of the community.

Each fedimint node would be lightweight in practice, (akin to a pruned bitcoin node in size)  for e.g. Raspi4 with 100gb of storage - pending analysis of eCash DB growth.

The form factor of fedimint nodes could be any number of options from laptops, towers, smartphones, single board systems or remotely operated computers in the cloud - as long as the system can run the bitcoind and fedimintd daemons and connect to the internet. 

### Deployment UI 

The deployment of fedimint, currently utilizes a simple UI which allows a user to view thier private key and build a federation by adding additional "peer" private keys from the other federation guardians. 

This allows the fedimint scripts to collect the appropriate information before automating the remainder of the deployment. 

This in turn is then to be made accessible via an API to allow additional 3rd party services to innovate on the federation setup and management process. 

<UPDATE AS UI IS PUSHED TO MAIN PROJECT>
