---
sidebar_position: 1
---

# Trust and Trade Offs

:::caution
This Guide is being actively worked on!
:::

The Fedimint protocol is an optional opensource protocol which can be utilized alongside bitcoin and the lightning network. 

The protocol makes a number of trade offs in order to provide benefits including Financial Privacy, Community Custody and Transnational Scaling.

These trade offs are largely based on the trust assumptions in the system which is explored below and detailed over the coming pages. 

These trust assumptions are:

1. **Custody:** The user must trust the Federation Guardians with custody of their funds which introduces custodial risk. 
2. **LN Pay:** The user must trust "1 of n" Lightning Gateways to pay lightning invoices outside of the mint. 
3. **LN Receive:** The user must trust "1 of n" Lightning Gateways to receive lightning payments into the mint. 
4. **Tx Execution:** The user must trust a quorum of Federation a Guardians to process transactions (deposit, redeem, swap, contract enforcement). 

On the flip side the user benefits from the following positive attributes:

1. **Blind Balance:** The guardians cannot see a users balance. 
2. **Blind Transactions:** The guardians cannot tell which parties are part of a transaction.

:::note
Fedimint is a voluntary system which individuals can and individuals in part or fully for their bitcoin custody. We hope that by being honest with these trade offs, individuals can make better decisions for their risk profiles. 
:::

## The Trade Offs

The trade offs in the trust model have been captured as five key risks as outlined below[^1] and explored in more detail on the following pages. 

![trust model](/img/raw-figures/fm-trust-model.excalidraw.png)


1. **[Custodial Risk](NotYourKeys):** Can the federation steal or lose your funds. 
2. **[Debasement Risk](DebasementRisk):** Can the federation issue more claims to bitcoin than they own. 
3. **[Regulatory Risk](RegulatoryRisk):** Can the federation be unilaterally shut down or forced to cease operations.
4. **[LN Gateway Censorship Risk](TrustLNGateways):** Can the LN gateways refuse service. 
5. **[Transaction Censorship Risk](Transaction-Contract-Fulfilment):** Can the federation refuse service. 


[^1]: This is under constant revision, please raise further trade offs for consideration. 