# How do backups work?

:::info
This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.
:::

The backup process in Fedimint is out of scope of the main protocol and is likely to differ depending on the particular federation implementation.

## How are user backups and recoveries managed?

It is envisaged that after joining a federation, which only requires scanning a QR code provided by a federation guardian, the user will likely be asked to enter their full name as it appears on their passport (or easily memorable piece of information).  

This will be used to encrypt the user private key before it is sharded and backed up to the guardians’ federation servers.

If a user loses their phone or can no longer access their tokens, they can personally verify themselves using KYF (Know Your Federation - always use Fedimints where you can trust your guardians) and once a quorum of guardians verify the identity of the user, they can send the shards that relate to their name and the user can reconstitute them locally.

## Can Fedimint federations help with estate planning and inheritance?

Yes.  Building on the protocol discussed in the question “How are user backup and recovery handled?”, it is feasible to securely store one’s will with the Fedimint federation such that it can only be revealed upon your passing.  

Even without this, it is possible for suitably appointed executors to a Will to provide sufficient evidence to enable the guardians to release the late users tokens to them.

## Do federation users need back up private keys?

Do federation users need to figure out how to back up their private keys or 12 or 24 word backup phrases like with a hardware wallet?

Yes they do, but it is envisaged that their key will automatically be split into cryptographically secure “shards” that are shared between the guardians when they first connect using their full name (or similar) as the recovery key. 

This process can be thought of as an encrypted password backup to a mini private DropBox or Google Drive run by the federation.

In this way, no one guardian is able to access a user’s credentials but a minority of guardians losing their federation private keys will not prevent recovery of the user’s private key.  

Given the multi second party trust model that already exists, this approach does not introduce additional risk to users but does provide greater convenience and lower risk than storing it with a third party such as a cloud backup service provider.