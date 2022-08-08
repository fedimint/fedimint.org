---
sidebar_position: 3
---

# Debasement Risk

:::caution
This Guide is a work in progress.  We would appreciate any feedback you may have and you can submit edits through the link at the bottom of the page.
:::

eCash tokens represent a claim on bitcoin held by the federation guardians.

As such there is a possibility that the mint could generate more claims for bitcoin than there are bitcoin in the custody of the guardians. 

Fedimint federations can not be audited by external parties. This fact makes the importance of strong 2nd party trust of federation guardians even greater and acts as a limit on how large a Fedimint community can grow.

However, it is in theory possible to perform an attestation to show that the number of issued tokens and the Bitcoin balance held by the federation match at points when a “re-keying checkpoint” is made (a mechanism to periodically switch out private keys and prevent database bloat). Users are required to exchange their old tokens for new ones before each such re-keying checkpoint. This limits the frequency with which the procedure can be performed.

## The Risk

The risk here is that the guardians would be able to debase your holding by secretly signing and issuing additional tokens that are spendable inside the mint

## The Mitigation 

### In Mint Audits

Each consensus epoch, balances the assets and liabilities of hte mint 

### Audit on Receipt of eCash

### Know Your Federation 

You're already trusting the mint with all of your bitcoin. 