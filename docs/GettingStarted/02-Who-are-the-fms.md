---
sidebar_position: 2
---

# Who are the federations?

:::info
This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::

Fedimint is an open source protocol and technology stack which makes it easier to deploy and manage **community custody** solutions.

Key to this is the word community, which can mean many things and obviously the size and scope of the community will have a direct impact on the trust models and operations of the federation.

There are likely to be many hundreds of thousands of Fedimints all with unique setups. We will consider the following groupings as a starting point, evaluated on a scale of membership size:

<div style={{textAlign: 'center'}}>

![The Spectrum of Mints](/img/raw-figures/fm-community-scope.excalidraw.png)

</div>

On the left side of the spectrum, we have a family federation which would have very high levels 2nd party trust, but a lower anonymity set. On the right side of the spectrum, we could imagine a fully private online federation with very low trust, but an extremely large anonymity set.

The Fedimint open source project is focused on enabling community custody; for example across friends, family and local communities. Fedimint guardians should be 2nd party custodians who are close friends and family members that you know personally, and can directly influence should they ever attempt to violate your trust. However the members of that federation might not all know one another.

It is anticipated that people may choose to be a member of multiple federations, perhaps with different strategies:

- **Family:** More likely used for longer term holding due to higher trust. Could be used to refill alternate federation wallets with larger anonymity sets to facilitate spending.
- **Friends:** Similar to family in design, but with a wider anonymity set, this may be a back up scope for people who do not have a direct family members who can assist with custody.
- **Community:** Larger community federations that would be used to facilitate spending across a regional area, analogous to community banking infrastructure. Likely to be small value wallets that are more regularly depleted and regularly topped up from alternative wallets.
- **Private online:** Interesting design space to explore options for temporarily holding funds in order to complete smart contract execution or deliver more complex services.

## Know your federation

There are trade offs to consider when joining a Fedimint.

As such it is very important to "know your federation". Fedimint is an explicit trust model: you are trusting the guardians of your federation not to collude. The incentive for them not to do so is that they have close, trusted relationships with their members, and that the members are capable of socially and physically responding to the guardians in their community should they ever attempt to break the trust model.

With this in mind, Fedimint has been designed to be used by pre-existing groups where members already have high levels of trust in each other within a non-commercial context.

We refer to this as second party trust, the trust you would be able to place in another set of individuals based on a long standing relationship, reputation, social capital or available local legal recourse (outside of the technical protocol).

This goes some way to mitigate the custodial risk involved with Fedimint.

For example, I am less likely to steal from my mum, her friends and my brothers than a random stranger on the internet as there will be social consequences to this action that I find incalculably large.

This model would likely would include families, friends, small villages and community groups as examples of groups with strong second party relationships.

These larger community bodies could even be formalized with constitutions to describe the operations of the federation.

This is in contrast to the distant third party relationships offered by an exchange or the first party relationship afforded by self custody.

This setup also has the added advantage of [often being exempt from most regulatory considerations](../TradeOffs/RegulatoryRisk), where the context is strictly non-commercial.

:::note
This doesn't preclude the notion of "commercial" Fedimints existing in the future.

As Fedimint is an open protocol, there is nothing stopping these entities being formed.
:::

This will have the benefit of decentralizing custody and transaction infrastructure to local levels. By way of example consider two countries:

- **Country A:** Has four banks and runs on a closed money system with no competition between banks.
- **Country ₿:** Has 100k banks running on an open money system, that allows competition from anyone.

Given the intense competition in country ₿ it would always be harder to find and retain customers.

As such you might expect the banks to differentiate based on their close ties to the user, reputation, great UX and ability to always place the needs of customers first.

Country ₿ is a much better country to be a customer.

---

The specifics around this trust model and trade offs will be explored in [Trade offs > Custodial Risk](../TradeOffs/NotYourKeys).
