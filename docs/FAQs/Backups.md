# How do backups work?

:::info
This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::

The backup process in Fedimint is out of scope of the main protocol and is likely to differ depending on the particular federation implementation.

In particular large federations with weaker second party trust may approach this process very differently to smaller federations.

Here we will focus on the community federation with stronger second party trust assumptions. 

## How are user backups and recoveries managed?

It is envisaged that after joining a federation, which only requires scanning a QR code provided by a federation guardian, the user will likely be asked to enter their name or an easily memorable piece of information which can be provided to the federation during the recovery process.

This will be used to encrypt the user private key along with a pepper (secret salt) before it is sharded and backed up to the guardians’ federation servers.

If a user loses their phone or can no longer access their eCash notes, they can personally verify themselves to the federation guardians (where there is a strong second party trust relationship with the guardians) and once a quorum of guardians verify the identity of the user, they can send the shards that relate to their name and the user can reconstitute them locally.

This process can be thought of as an encrypted password backup to a mini private DropBox or Google Drive run by the federation.

In this way, no one guardian is able to access a user’s credentials but a minority of guardians losing their federation private keys will not prevent recovery of the user’s private key.  

Given the multiple second party trust model that already exists, this approach does not introduce additional risk to users but does provide greater convenience and lower risk than storing it with a third party such as a cloud backup service provider.

## Can Fedimint federations help with estate planning and inheritance?

Yes.  Building on the recovery process above, it is feasible to securely store one’s will with the Fedimint federation such that it can only be revealed upon your passing.  

Even without this, it is possible for suitably appointed executors to a will to provide sufficient evidence to enable the guardians to release the late users eCash notes to them.

This process would likely differ in implementation between federations.



