---
sidebar_position: 1
---

# Trust Model Trade Offs

:::caution
This guide has been developed as a community project and is a live document. We would advise you to fully consider your own risk model and mitigations before running Fedimint. We also appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::

The Fedimint protocol is an optional opensource protocol which can be utilized alongside bitcoin and the lightning network. 

The protocol makes a number of trade offs in order to provide benefits including Financial Privacy, Community Custody and Transnational Scaling.

These trade offs are largely based on the trust assumptions in the system which is explored below and detailed over the coming pages. 

These trust assumptions are:

1. **Custody:** The user must trust the Federation Guardians with custody of their funds which introduces custodial risk. 
2. **LN Pay:** The user must trust "1 of n" Lightning Gateways to pay lightning invoices outside of the mint. 
3. **LN Receive:** The user must trust "1 of n" Lightning Gateways to receive lightning payments into the mint. 
4. **Tx Execution:** The user must trust a quorum of Federation Guardians to process transactions (deposit, redeem, swap, contract enforcement). 

On the flip side the user benefits from the following positive attributes:

1. **Blind Balance:** The guardians cannot see a users balance. 
2. **Blind Transactions:** The guardians cannot tell which parties are part of a transaction.
3. **Unattended LN deposits:** A user of a fedimint can receive payment on the lightning network without needing to be online.
4. **Simplified use:** Using the Bitcoin and Lightning network is made simpler due to the operation of the Bitcoin and Lightning nodes being outsourced to the federation of LN gateways.

:::note
Fedimint is a voluntary system which individuals can use in part or fully for their bitcoin custody. We hope that an honest accounting of the trade offs will help individuals make better decisions for their risk profiles. 
:::

## The Risks

The trade offs in the trust model have been captured as five key risks as outlined below[^1] and explored in more detail on the following pages. 

![trust model](/img/raw-figures/fm-trust-model.excalidraw.png)


1. **[Custodial Risk](NotYourKeys):** Can the federation steal or lose your funds. 
2. **[Debasement Risk](DebasementRisk):** Can the federation issue more claims to bitcoin than they own. 
3. **[Regulatory Risk](RegulatoryRisk):** Can the federation be unilaterally shut down or forced to cease operations.
4. **[LN Gateway Censorship Risk](TrustLNGateways):** What are the risks in LN gateways refusing service to mint users.
5. **[Transaction Censorship Risk](Transaction-Contract-Fulfilment):** In what instance could a federation refuse service. 


[^1]: This is under constant revision, please raise further trade offs for consideration. 