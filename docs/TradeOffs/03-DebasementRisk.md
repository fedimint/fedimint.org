---
sidebar_position: 3
---

# Debasement Risk

:::caution
This Guide is a work in progress.  We would appreciate any feedback you may have and you can submit edits through the link at the bottom of the page.
:::

eCash tokens represent a claim on bitcoin held by the federation guardians.

As such there is a possibility that the mint could generate more claims for bitcoin than there are bitcoin in the custody of the guardians. 

This could have multiple impacts including violating the norms of the 21 million bitcoin and the ability of the user to verify their transactions. 

![Dont trust verify](/img/raw-figures/fm-donttrust-verify.excalidraw.png)


## The Risk

This risk is really a balance sheet and audit problem. 

At all times the mint has both assets and liabilities which should balance:

- **Assets:** The bitcoin held in the on chain multi signature wallet controlled by the federation guardians. 
- **Liabilities:** The outstanding number of eCash tokens that have been issued by the mint.  

![Balance sheet options](/img/raw-figures/fm-debasement-balance-combined.png)

The guardians of the federation have access to all required information that allows them to balance the books between the eCash outstanding and the assets held on chain. 

For the user however, whilst they can see the assets on chain, they have no view of the total number of outstanding liabilities. 

This mismatch is at the core of this risk as it means that no external party to the guardians who can audit the supply and marks the importance strong 2nd party trust in federation guardians.

To understand the impact of this risk we need to consider the incentive for a dishonest guardian and how they would profit from an inflating supply in the mint.

By inflating the supply the guardian would gain access to additional "claims" on bitcoin that could be transferred to any of the parties who accept fm-BTC these would be:

1. **The Mint:** To redeem for bitcoin from the multisig. 
2. **Merchants / Users:** In exchange for goods and services.
3. **LN Gateway:** In exchange for making and receiving lightning payments (Mint issues eCash and pays out to itself via LN, gateway racks up IOUs and would start redeeming against the bitcoin supply - so we're back to why not steal the bitcoin?)

Each of theses parties could be attacked by a corrupt guardian paying with false claims, however, the impact varies drastically. 

Only guardians are able to create and sign false claims and this is done with a threshold of guardians requiring many corrupt guardians. 

As such when these guardians attack the mint, the guardians would in effect be attacking themselves and attempting to steal bitcoin they already control.  

The two most likely attacks would likely be via the users and LN Gateway. 

To attack merchants would in effect by a "Mint eats free" attack by issuing false tokens and using these to purchase real world goods. 

Over a longer period of time more fm-BTC claims would be held by the users and eventually the Fedimint would collapse when the redemption's outpace the bitcoin in the mint. 

The LN gateway attack is very similar only instead of cashing out to real world goods the claims are paid to the LN gateway to pay invoices over lightning e.g. to the corrupt guardian external lightning wallet. 


## The Mitigation 

In mitigating this risk we should consider both attempting to stop false claims, as well as providing audit and verification (catch cheating guardians in the act and raise an alarm early) for users of the systems to back up the trust model. 

Whilst several mitigation activities will be outlined, the tl;dr will be 

### In Mint Audits

Each consensus epoch, balances the assets and liabilities of the mint 

### Guardian mexican stand off

### Know Your Federation 

You're already trusting the mint with all of your bitcoin. 

However, it is in theory possible to perform an attestation to show that the number of issued tokens and the Bitcoin balance held by the federation match at points when a “re-keying checkpoint” is made (a mechanism to periodically switch out private keys and prevent database bloat). Users are required to exchange their old tokens for new ones before each such re-keying checkpoint. This limits the frequency with which the procedure can be performed.

The risk here is that the guardians would be able to debase your holding by secretly signing and issuing additional tokens that are spendable inside the mint

### Existing Risk

### Threshold signatures on eCash Issuance

### Bank Runs