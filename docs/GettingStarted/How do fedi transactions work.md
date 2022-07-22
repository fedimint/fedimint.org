---
sidebar_position: 3
---

# How do Fedimint transactions work?

:::caution
This Guide is being actively worked on!
:::

TODO

- [ ] Drill in on diargam transaction
- [ ] Walk through the steps of different styles
- [ ] Withing Mint
- [ ] Mint to Mint
- [ ] Mint to LN


User = fedimint user
Gateway = lightning node running the fedimint core lightning plugin

User wants to pay someone outside the mint. 
User gets a lightning invoice from the person he wants to pay. 
User locks ecash tokens to a contract, where the secret to unlock the tokens is a proof of payment of the invoice. The amount of ecash tokens is worth several sats more than the invoice. 
User informs Gateway of this contract and the invoice.
Gateway can unlock the contract, claiming the ecash tokens, by paying the invoice. He does so because he makes a routing fee.

Kody Low no telegram... 
Yes, but they have to accept ecash tokens as payment. Its not broadcast within fedimint, the user contacts the gateway directly via a RPC command through the core lightning plugin. The user contacts the node directly.