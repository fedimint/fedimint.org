---
sidebar_position: 1
---
# Why Fedimint

:::caution
This Guide is being actively worked on!
:::

Bitcoin is a powerful human rights technology that enables anybody in the world to **be their own bank**.

The reality is that this requires a level of technical understanding and comfort that only comes with time and effort.  

Creating simpler, private user experiences will be critical in promoting the human rights benefits of bitcoin.

Fedimint achieves this by focusing on three pillars.

![The spectrum and trade offs for Fedimint Custody](/img/raw-figures/fm-benefits.excalidraw.png)

## Community Custody

The most popular convenient solution for new bitcoin users has been to purchase and store bitcoin on centralized exchanges.  

Whist providing a good user experience this sacrifices key properties of bitcoin (private open banking) and represents a systemic risk to the bitcoin network of aggregating too many bitcoin in one custodian. 

Fedimint aims to address this by distributing the custodianship across millions of communities, making it simple for communities to bank themselves.

Put another way it allows you to **be your mum's / friends / villages bank**, so they don't have to. 

This provides bitcoiners with a third option between 3rd party centralized custodians and self custody as shown in the figure below. 

![The spectrum and trade offs for Fedimint Custody](/img/raw-figures/fm-spectrum-custody.excalidraw.png)

Fedimint has also been design to interoperate with the bitcoin lightning network. 

This allows Fedimint users to remain part of the wider lightning network merchants, making instant payments and moving between Fedimints without managing additional complexity.

As such as a user who previously may have used 3rd party custody for convenience can retain that convenience whilst improving their privacy and control of their finances. 

:::note
There is a [trade off to be considered](../CommonTerms/CustodialRisk) here as you are trusting a federation with your bitcoin custody.  As such it will be important to "know your federation".
:::

## Financial Privacy
By implementing [Blind Signatures and Chaumian eCash protocols](/docs/CommonTerms/Blind%20Signatures) inside the Fedimint, the identifying details of the fm-BTC eCash tokens are unknowable by the guardians. 

![The spectrum and trade offs for Fedimint Custody](/img/raw-figures/fm-privacy-firewall.excalidraw.png)

The mint guardians will be aware of:

- The **amount** of bitcoin held in the community multi-sig wallet.
- The **amount** of eCash tokens outstanding for redemption.

They will be unaware of:

- The **individual account balance** of a user (i.e. how many tokens a user has).
- The **identity of the user** to whom a particular eCash token was issued to. 
- The **identity of the user** who redeems an eCash token. 
- Any **transactions of the token** which are made between issuance and redemption.

## Scaling
> 
> "640,000,000"
> 
> The approximate maximum number of UTXOs that can be transacted each year.  
> 

Given the figure above, it becomes more obvious that billions of users, will not own individual UTXOs on the bitcoin network. 

As such we will need to look for ways to aggregate and share ownership of UTXOs whilst retaining a simple and efficient user experience. 

Fedimint achieves this by taking the economic density of an entire community and collapsing it into a single lightning node. 

A great way to understand this is to consider the different levels of detail in a road network connecting multiple towns.

![Roadmap Analogy](/img/raw-figures/fm-roadmap-analogy.excalidraw.png)

The Fedimint map (right) clearly shows the many different roads that connect different users in a town. You could imagine this as many different direct interactions and commercial activity that remains in town and doesn't clog the "regional road network".

The lightning map (left) represents this regional road network which simply connects to that "town" of activity to a broader network of similar "towns".

If we tried to connect every address in town one, with town two then we would overwhelm the area with inefficient roads. 

We believe this model will allow us to build a more flexible and scalable and efficient lightning network. 

:::note
There is [some recent research](https://github.com/renepickhardt/mpp-splitter/issues/12#issuecomment-1143772489) on how to scale lightning that suggests the possibility of widespread use of fedimint federations could increase the efficiency of the lightning network while also increasing the potential fees an LSP can earn due to increased liquidity.
:::

---

The goal would be a world of hundreds of thousands to millions of community banks running fedimint and inter-operating over the lightning network. 


