---
sidebar_position: 3
---

# Debasement Risk

:::caution
This guide has been developed as a community project and is a live document. We would advise you to fully consider your own risk model and mitigations before running Fedimint. We also appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::

[eCash notes](/docs/CommonTerms/eCashToken) represent a claim on bitcoin held by the federation guardians.

As such there is a possibility that the mint could generate more claims for bitcoin than there are bitcoin in the custody of the guardians.

This could have multiple impacts including violating the norms of the 21 million bitcoin limit and the ability of the user to verify their transactions.

<div style={{textAlign: 'center'}}>

![Dont trust verify](/img/raw-figures/fm-donttrust-verify.excalidraw.png)

</div>

## The Risk

This risk to a user is that they may be left holding eCash notes, that are not matched to bitcoin in the federation vault.

This risk is caused by a balance sheet audit and verification problem that exists in eCash due to the anonymous nature of blinded eCash notes.

To expand on this, at all times the mint has both assets and liabilities which should balance:

- **Assets:** The bitcoin held in the on chain multi signature wallet controlled by the federation guardians.
- **Liabilities:** The outstanding number of eCash notes that have been issued by the mint.

![Balance sheet options](/img/raw-figures/fm-debasement-balance-combined.png)

The guardians of the federation have access to the required information that allows them to balance the books between the eCash outstanding and the assets held on chain.

For the user however, whilst they can see the assets on chain, they have no view of the total number of outstanding liabilities and so the user is always "unable to verify" the total asset and liability balance of the federation, as such they are trusting the guardians to manage this balance.

This mismatch is at the core of this risk as it means that no external party to the guardians can audit the supply and marks the importance of strong 2nd party trust in federation guardians.

:::info
For completeness this risk also exists in any custodial bitcoin arrangement (for example with exchanges) in which the user gives up access to their keys.
:::

### The Corrupt Quorum Problem

This is complicated further if we consider the situation in which there is a "corrupt quorum" of guardians.

Only guardians are able to create and sign false claims and this is done with a threshold of guardians requiring many corrupt guardians.

So in order to realize this risk in a Fedimint, a quorum of corrupt guardians (66% or in our figure guardian 1 & 2) would need to collude to create new eCash notes that had no bitcoin backing as shown below.

![Balance sheet options](/img/raw-figures/fm-debasement-corrupt.png)

Three points to make at this point are:

1. No additional bitcoins exist, only additional claims to bitcoin that circulate within a specific limited economic community.
2. This is a fraud exercised by a subset of federation guardians on both the Fedimint users who have honestly deposited funds (loss of funds impact) and the honest Guardian (reputation impact).
3. In order to realize this fraud the corrupt quorum of guardians will need to exercise a redemption of the "false eCash claims".

To understand the impact we need to consider **_how_** corrupt guardians would redeem these false "claims" on the bitcoin. These claims could be transferred to any of the parties who accept fm-BTC:

1. **The Mint:** To redeem for bitcoin from the multisig.
2. **Merchants / Users:** In exchange for goods and services.
3. **LN Gateway:** In exchange for making and receiving lightning payments (Mint issues eCash and pays out to itself via LN, gateway racks up IOUs and would start redeeming against the bitcoin supply - so we're back to why not steal the bitcoin?)

The corrupt guardians could take any one, or all three of these exits.

#### Exit 1: The Mint

To exit this attack via the mint the corrupt guardians are using the claims to remove bitcoin from the mint, without alerting the remaining honest guardian.

It should be noted at this point that the same group could empty the mint directly if they are a quorum on the multi-sig vault. This would be a higher pay off strategy, but would instantly alert the remaining guardian and so be instantly obvious within the community.

A lower value theft could occur without alert where the corrupt guardians redeem a smaller amount of bitcoin over time. As more bitcoin is withdrawn this increases the chances of a collapse of the Fedimint.

#### Exit 2: Defraud Merchants / Users

This attack would involve issuing fake eCash and using this in the local economy in exchange for goods and services. A "mint eats free attack".

Here the corrupt guardians are able to acquire real world goods and services from others in the federation at zero cost. This introduces a risk of collapse on the Fedimint.

#### Exit 3: LN Gateway

The LN gateway attack is similar to attack two, only instead of cashing out to real world goods the claims are paid to the LN gateway in order to pay invoices over lightning e.g. to the corrupt guardians external lightning wallet.

This version, has potentially more risk for the corrupt guardians as it is expected that LN gateways would more frequently redeem these eCash notes for on-chain bitcoin than a user / merchant in order to balance liquidity.

In this way an LN Gateway could also act as an early warning on mint liquidity, where a trend is observed of bitcoin constantly flowing out of the mint and not being received inbound.

### Impact

The impact of this activity is two fold:

1. **Mint Collapse:** Over a period of time more fm-BTC claims would be held by the users than exist in the multi-sig. This leads to fragility and eventually collapse of the Fedimint when the redemption's exceed the bitcoin in the mint.
2. **Reputation Loss:** The local reputation of the corrupt guardians would be destroyed, quite rightly. Unfortunately this would also likely impact the honest guardian as it would not be possible to confirm which quorum of guardians were dishonest.

## The Mitigation

:::info
This section is under active review. PRs and discussions are appreciated on the Fedimint telgram, discord or github.
:::

In mitigating this risk we should consider the options to both stop false claims and raise the alarm on discovery of false claims.

Whilst several mitigation activities will be outlined, the tl;dr is that a user can't verify the holdings of the mint, however, several activities and alerts can be built around the mint to trigger warnings of misconduct.

### In Mint Audits

During each consensus epoch, code is in place to balance the known assets and liabilities of the mint. This will allow guardians to monitor for bugs which cause debasements and raise the alarm / act accordingly.

It should be noted that if there is a quorum of bad guardians then these liabilities would be "unknown" to the Fedimint and so would not be identified by this process.

### Guardian "Mexican Stand-off"

An honest guardian could track the volume and value of eCash notes that have been signed whilst they have been in the quorum. They would also be aware of their own up-time.

Using these two data points they could estimate the likelihood of debasement if the level of redemptions to the mint causes concern and can raise alarm on the increased rate of redemptions.

### Know Your Federation

You're already trusting the mint with all of your bitcoin. As such you should only utilise federations that you personally know and trust with your funds.

The main line of defence against debasement risk is choosing to only place your bitcoin in the hands of honest guardians.

### Threshold signatures on eCash Issuance & Redemption

It is possible (and recommended) to separate both the key sets and thresholds required to perform transaction signing and management of the multi-signature vault.

In effect this means you can set a higher threshold of trust for users to redeem the on-chain bitcoin from the mint. This protects users.

### Bank Runs

As a user could be a member of multiple federations there could be consideration given to allow users to automate bank runs from one federation to another to regularly stress test the solvency of the Fedimint.

### Re-keying Event

It is possible to perform an attestation to show that the number of issued notes and the Bitcoin balance held by the federation match at points when a “re-keying checkpoint” is made.

This is a mechanism to periodically switch out private keys and prevent database bloat.

Users are required to exchange their old notes for new ones before each such re-keying checkpoint. This limits the frequency with which the procedure can be performed.

### In App Monitoring

In app monitoring of LN flows and redemption's could be used to trigger early warning signs for "strange activitiy" within the mint. This could provide users an opportunity to conduct a "bank run" on the Fedimint or trigger a re-keying event to prove solvency.

### Existing Risk

This is just to note that this risk already exists in bitcoin with respect to the notion of exchanges and large custodians, who could already engage in fractional reserve banking.
