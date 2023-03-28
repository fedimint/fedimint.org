# LN Gateway Risk

:::caution
This guide has been developed as a community project and is a live document. We would advise you to fully consider your own risk model and mitigation's before running Fedimint. We also appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::

Lightning Gateways provide a service to the federation users which allows them to connect with the wider bitcoin ecosystem. 

Without this service the ability to transact is heavily impaired which will impact the user experience of the Fedimint user.

The focus of this risk is on the situation in which an LN Gateway restricts service to Fedimint users through either (1) technical issue or (2) malice. 

Both situations carry a similar impact profile, in that the users of the Fedimint may not be able to transact outside the boundary of their mint. This is not a loss of funds, but an impairment of some functionality. 

The first line of mitigation in this instance is for the user to simply select a new LN gateway as a mint could have more than 1 gateway. As such if a mint was down due to malice or technical issue the users wallet would simply utilise an alternate LN gateway. 

Also it should be noted that the LN gateway represents an economic actor in the system. As such the incentive is for the LN gateway to continue processing payments in order to earn fees. 

As such the incentives are aligned for LN Gateways to continue routing payments, or in the presence of malice for an honest actor to step in and earn the fee revenue. 

In a fall back situation in which none of the mint gateways are routing LN payment any single user of the mint could setup a lightning node and provide this service for the rest of the mint.
