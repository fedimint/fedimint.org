# Blind Signatures

:::caution
This Guide is being actively worked on!
:::

![Community Custody on a spectrum](/img/blind-signing.png)

The canonical explanation of blind signatures was given by David Chaum in terms of imprinting a signature on a message using carbon copy paper. 

As highlighted in the figure above imagine obtaining a signature on a document as follows:

1. Create a document and seal the document into an envelope along with carbon copy paper.
2. Pass the envelope to the signer who can sign the outside of the envelope, which in turn creates an internal signature on the document. 
3. You have now obtained a signature on your document without revealing the contents of the document.
4. If you were to reveal your document at a later date, the signer could confirm that they did indeed sign that document.

This is concept is utilized inside eCash to allow an eCash mint to issue "IOUs" that it can confirm are valid, whilst retaining privacy. 

In essence the mint has different signatures for different values of satoshis that are deposited. 

As such when a deposit (lets say 10,000 satoshis) is made I write a document saying "Here's a deposit to Fedimint A with a random serial number" I pop it in an envelope and ask Fedimint A to sign it with their 10,000 satoshi signature. 

When it comes time to spend the sats, I take the note out of the envelope and provide that 10,000 satoshi note to the merchant in much the same way I would hand over a banknote. 

The merchant, wants to make sure the note is real so he contacts the Fedimint to check. 

The Fedimint has never seen this document, it can confirm that it does indeed include a valid signature for redemption of 10,000 satoshis.

At this point both myself and the merchant have a copy of the signed note which has a claim on the satoshis.

So instead of simply accepting the signed note the merchant goes through his own envelope note trick and asks the Fedimint to destroy this claim for 10k sats and replace it with this new claim for 10k sats :) 

