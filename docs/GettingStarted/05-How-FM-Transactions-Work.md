---
sidebar_position: 5
---

# How do Fedimint transactions work?

:::info
This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::

This is a set of simplified transactions flows to explain how transaction processing works inside the Fedimint, with integration to the wider lightning network and between different mints.

## Transactions within a Fedimint

This represents how a transaction would settle entirely within the same Fedimint.

![IntramintPayments](/img/raw-figures/fm-Pay-IntraMint.excalidraw.png)

### Step 1 : The Invoice

An invoice (in the form of data) is passed from Bob's wallet to Alice's wallet asking for payment to be forwarded for 15,000 sats.

### Step 2: Share the notes

Alice's wallet responds by checking the notes it holds and selecting eCash notes that total 15,000 sats in this case a 10k sats and a 5k sats eCash note.

It then forwards these notes to Bob's wallet.

### Step 3: Settle the transaction with new eCash notes

Bob now has the eCash files and can redeem them from the Fedimint. However, there is a risk that Alice still has the eCash notes copied and could redeem them first. As such the payment is not yet settled.

To settle the payment Bob submits the eCash notes to the mint and instead of redeeming for bitcoin, asks to swap them out for fresh eCash notes, in this instance a 15,000 sats eCash note.

:::note
During implementation it is suspected that users will not use "pay me in the mint" invoices and would instead always assume they are paying Lightning invoices.
:::

## Transactions from Fedimint to Lightning

In this case the payment is being sent from a Fedimint user to pay a lightning invoice.

This works by setting up a situation in which a lightning gateway provider is incentivised to pay the lightning invoice in **sats** in order to receive a **hash pre-image** that allows them to claim **fm-sats**.

We will unpack this below.

![Pay Fedimint to Lightning](/img/raw-figures/fm-Pay-MintToLN.excalidraw.png)

### Step 1: The lightning invoice

A lightning merchant (or general recipient) generates a lightning invoice in this case for **_10,000 sats_**.

This is actually a [Hash Time Lock Contract (HTLC)](https://www.youtube.com/watch?v=hs79R8kd_70&t=62s) contract that will provide some secret information - "**a hash pre-image**" in return for a payment in satoshis.

The merchant is in effect **"selling a pre-image-A"** for sats.

### Step 2: Create the incentive to pay

Alice would like to pay this invoice from her Fedimint wallet, but doesn't run a lightning wallet herself.

Instead she creates an equivalent [Hash Time Lock Contract (HTLC)](https://www.youtube.com/watch?v=hs79R8kd_70&t=62s) that will pay out **_10,200 fm-sats_** to anyone who can supply a pre-image to the contract where the extra **_200 fm-sats_** represent a fee for the service.

An important note is that the **hash** used in this contract is the same **hash** used in the contract by the merchant linking the contracts together.

Here Alice is in effect willing to **"buy pre-image-A"** for sats+200.

### Step 3: Broadcast to Lightning Gateways

The Lightning Gateway, is now incentivized by this arbitrage opportunity to pay this invoice and obtain the pre-image in order to obtain fm-sats plus fee.

:::note
There is a process by which the Lightning Gateway needs to become aware of the contract which could either be by direct contact from the user, or by the mint broadcasting available contracts. Yet to be fully defined.
:::

### Step 4: Lightning Gateway Pays the Invoice

The Lightning Gateway routes a payment, through the lightning network to the merchant paying the invoice and obtaining the pre-image.

The "lightning" balance of the Lightning Gateway is now reduced by 10,000 sats.

### Step 5: Lightning Gateway settles the mint contract

The Lightning Gateway now takes that pre-image and uses this to claim the 10,200 fm-sats.

The Lightning Gateway's fm-BTC balance is now up 10,200 sats and their net position is up 200 sats.

:::note
By linking the HTLCs with the same pre-image between the lightning route and the mint, this allows the Fedimint to spoof a lightning node and extend the route "into the mint".
:::

## Transactions from Fedimint to Other Fedimints

This transaction represents a payment from a Fedimint to a Fedimint. As a payment between FMs is routed over the lightning network we can also imply in the same use case, how a lightning node to Fedimint payment would be completed.

In this instance Alice (in Fedimint 1) will receive a payment of 10,000 sats from Bob (in Fedimint 2).

![Pay Fedimint to Fedimint](/img/raw-figures/fm-Pay-MintToMint.excalidraw.png)

### Step 1: Alice sells a pre-image

Alice want's to receive 10,000 sats, but her wallet doesn't have a lightning node.

Instead her wallet creates a contract in Fedimint 1 which will sell the pre-image to a hash for 9,800 fm-sats, we'll call this **_"pre-image-A"_**.

### Step 2: Alice lets Bob know how to pay

Alice now sends Bob a Lightning invoice for 10,000 sats which includes two pieces of important information:

- a fake endpoint ID associated with Fedimint 1.
- a route hint to Lightning Gateway A

This provides Bob with the information required to pay this invoice over lightning.

### Step 3: Bob buys a pre-image

Bob would love to pay the 10,000 sats, but his wallet doesn't have a lightning node.

Instead he follows the previous payment flow and posts a contract to Fedimint 2 that will pay 10,200 fm-sats to buy **_"pre-image-A"_** and lets Lightning Gateway B know about it, by providing the invoice with the route hint to Lightning Gateway A.

### Step 4: Lightning Gateway B pays Lightning Gateway A

Lighting Gateway B routes 10,000 sats over the lightning network to Lightning Gateway A seeking a pre-image!

### Step 5: Lightning Gateway A settles in Fedimint 1

Luckily Lightning Gateway A realizes that he can obtain this pre-image and get paid a 200 fm-sats difference by paying 9,800 fm-sats to the contract (which then goes to Alice).

Now Lightning Gateway A has the pre-image.

### Step 6: Lightning Gateway A settles with Lightning Gateway B

LN Gateway A takes the pre-image and uses it to settle the payment with Lightning Gateway B and now receives sats to it's lightning balance sheet.

The final balance sheet standing for Lightning Gateway A is:

- fm-sats: -9,800
- LN sats: +10,000
- Net: +200 sats

### Step 7: Lightning Gateway B settles in Fedimint 2

Having the pre-image lightning gateway B now settles the contract held in Fedimint 2, receiving fm-sats for this from Bob.

The final balance sheet for Lightning Gateway B is:

- fm-sats: +10,200
- LN sats: -10,000
- Net: +200 sats

## Pay Lightning into a Fedimint

The process by which you would make a payment from a lightning wallet into a Fedimint wallet is a simplified case of paying from Mint 2 to Mint 1.

If Bob had a lightning wallet, instead of "buying a pre-image" in step 3, he would have skipped directly to step 4 and paid Lightning Gateway A himself.

There would also have been no requirement for step 7.

### Lightning Routing

You may be thinking - hang on if I can receive lightning payments and send lightning payments can I route lightning payments?

The answer is yes, sort of.

This will be explored more in the FAQs as it has some interesting implications for privacy and computational use cases.
