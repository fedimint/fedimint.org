# Backups

:::caution
This Guide is being actively worked on!
:::

The backup process in 

## How are user backups and recoveries managed?

==Add graphic - what is backed up what is in band and out of band==

It is envisaged that after joining a federation, which only requires scanning a QR code provided by a federation guardian, the user will likely be asked to enter their full name as it appears on their passport (or easily memorable piece of information).  This will be used to encrypt the user private key before it is sharded and backed up to the guardians’ federation servers (see “Do federation users need to figure out how to back up their private keys or 12 or 24 word backup phrases like with a hardware wallet?”).

If a user loses their phone or can no longer access their tokens, they can personally verify themselves using KYF (see “Do I need to go through a KYC (Know Your Customer) process to join a federation?”) and once a quorum of guardians verify the identity of the user, they can send the shards that relate to their name and the user can reconstitute them locally.

## Can Fedimint federations help with estate planning and inheritance?

Yes.  Building on the protocol discussed in the question “How are user credential backup and recovery handled?”, it is feasible to securely store one’s will with the fedimint federation such that it can only be revealed upon your passing.  Even without this, it is possible for suitably appointed executors to a Will to provide sufficient evidence to enable the guardians to release the late users tokens to them.

## Do federation users need back up private keys?

Do federation users need to figure out how to back up their private keys or 12 or 24 word backup phrases like with a hardware wallet?

Yes they do, but it is envisaged that their key will automatically be split into cryptographically secure “shards” that are shared between the guardians when they first connect using their full name (or similar) as the recovery key. This process can be thought of as an encrypted password backup to a mini private DropBox or Google Drive run by the federation.

In this way, no one guardian is able to access a user’s credentials but a minority of guardians losing their federation private keys will not prevent recovery of the user’s private key.  Given the multi second party trust model that already exists, this approach does not introduce additional risk to users but does provide greater convenience and lower risk than storing it with a third party such as a cloud backup service provider.

==What exactly is backed up - some inconsistency in descriptions?==

TODO

- [ ] Take your current set of DBCs
- [ ] Encrypt the DBCs and shard these across the federation.
- [ ] Redeem through an out of band process and check with the federation.
- [ ] Link back to shamir section in comon terms
