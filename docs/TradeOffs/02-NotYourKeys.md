---
sidebar_position: 2
---

# Custodial Risk

:::caution
This guide has been developed as a community project and is a live document. We would advise you to fully consider your own risk model and mitigations before running Fedimint. We also appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::

A common and reasonable critique of the Fedimint protocol is the level of trust which is invested in the Federation guardians, as this is seen as a violation of a core norm of the bitcoin community.

<div style={{textAlign: 'center'}}>

![Not your keys not your coins](/img/raw-figures/fm-notyourkeys.excalidraw.png)

</div>

The context here is that whilst you control your own eCash notes, you are very much giving up custody of your bitcoin to the federation guardians.

In this eCash notes are IOUs redeemable to the Fedimint for bitcoin.

This is a reasonable concern for bitcoiners coming from a full self sovereign custody arrangement, in which they hold and backup their own private keys.

## The Risk

The risk with letting other people hold your bitcoin keys has always been the risk of catastrophic failure through one of several concerns, for example:

1. The custodian simply refuses to give your bitcoin back or steals it.
2. The custodian loses access to your bitcoin and can't return them when required.
3. The custodian is big enough to be a "honeypot" that is hacked and loses access to your bitcoin.
4. The custodian is impaired by government regulation and has to give up access to your bitcoin ([covered separately in trade off 3](RegulatoryRisk)).

Whilst the likelihood of each of these scenarios differs depending on the implementation of the mint, the end result is always the same, you lose access to your bitcoin, which can represent a significant part of your savings.

## The Mitigation

As outlined in "[Why Fedimint](../GettingStarted/Why-Fedimint)" the purpose of the protocol is not necessarily to convince existing bitcoiners to give up on their self custody, but instead to move more custodial bitcoin out of centralized services and into Community Custody.

![Spectrum of custody](/img/raw-figures/fm-spectrum-custody.excalidraw.png)

Where users are comfortable and capable with self custody this would be a better solution for eliminating this risk.

There are however, some options to mitigate this risk.

First some setting.

In Fedimint you make some trade offs to your custody arrangements in return for benefits that include:

- Privacy preserving payments;
- Privacy preserving community custody;
- Simplified back up and recovery operations;
- Simple user experience and convenience.

This may or may not be an adequate trade off on the face of it, but we can also take the following mitigating actions.

### Know your Federation

It is important that the user has direct knowledge of the guardians running their federation and it is highly recommended that you only join federations where some or all of the guardians are people that you have a strong pre-existing relationship with or trust in.

Rather than KYC (Know Your Customer) Fedimint promotes KYF (Know your Friend / Know your Family / Know Your Federation).

For example, if I ran a Federation for my family and friends I am highly unlikely to run off with the money due to the high level of social costs which are attached to the action.

The likelihood of this risk is increased where you have a more distant relationship with the federation guardians.

### Limit Exposure

A second mitigation would be to limit the exposure of funds to the federation guardians in terms of both size and time.

For instance keeping only smaller amounts of satoshis in larger federations; or where larger denominations are needed only moving the coins in for a small period of time that covers the spending.
