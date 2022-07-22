# Lightning Network Integration

:::caution
This Guide is being actively worked on!
:::  

## How does a Fedimint interface with the Lightning Network?

A Fedimint federation can in theory connect to multiple Lightning Service Providers.  The gateway would need to have a balance with and trust the federation but the federation would not need to trust the gateway.

The federation doesn't need to be aware of the LSPs, only the federation user who wishes to use the lighting network gateway needs to know the details.  Their mobile app would create the HTLC smart contract run by the federation that includes the gateway's pub key.

In practice it is probable that there will be some default LSP or LSPs for reasons of convenience.  The user will be able to override these as an advanced option.