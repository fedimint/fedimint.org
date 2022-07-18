# What is a Fedimint
[[Fedimint - Wiki]] - [[Fedimint notes]]

---

Fedimint - or "Federated Mint" is an implementaiton of Chaumian eCash, which utilises a federation of gaurdians to custoody funds instead of a centraliised actor. 

The system needs to be considered across three elements. 

The first element to consider is that Fedimint is designed to be used by pre-existing groups where members already have high levels of trust in each other. 

This would include families, close friends, small villages, community groups, etc. are all examples of groups with strong second party relationships.  You could think of this as a small commnunity bank. 

This is in contrast to the distant third party relationships offered by an exchange or the first party relationship afforded by self custody.  

This setup also has the added advantage of often being exempt from most regulatory considerations as the 2nd party relationships and lack of profit would mean this is considered a non-commercial activity.

The second element is to break the custody challenge into two components. 

It does this by recognising within any given group, there will be some more capable of guarding the group’s Bitcoin than others.  The more capable “group guardians” do the heavy lifting - hosting the group’s wallets and processing transactions - while the other members of the group have an ultra simple app that off loads all the complex stuff to the group guardians. 

You could think of this as "Be your mates bank".  

This, is already a common occurance today as many bitcoiners assist family and friends with their self custody setups.  Many in the Bitcoin space for have experienced a time-poor or less tech savvy relative or friend asking them to buy, sell, custody, or transfer bitcoin on their behalf, thereby acting as their bitcoin guardian, earning the popular monikor "Uncle Jim" - where being Uncle Jim is to run all the technical aspects of your friend and families bitcoin setup. 

Here it's good to think of Fedimint as a protocol and tech stack, that makes it easier to be Uncle Jim.

The third and final element is the powerful technical design of Fedimint.

It uses three powerful technical component to offer great privacy and interoperability: chaumian e-cash mints, federations and lightning swaps.

Chaumian e-cash allows the Fedimint to effectively run a set of private user accounts that can spend and redeem bitcoin from the mint, without revealing to the mint their account balance or attaching private informaiton to transactions. 

This is very important in a community banking setting where knowing the exact balances of all the people in your local community could expose individuals to physical attacks if the information is leaked or hacked.  

The e-cash technology is expanded by deploying this on a federated basis. This means that the funds held in the mint are never subject to the control of a single individual and instead ==a quorum of 66%== would be required to steal user funds. 

The federation is a mechanism that shares custody of the group’s bitcoin amongst all guardians and ensures that a majority of guardians need to act to perform a transaction or redeem bitcoin and that a failure of a minority of guardians can be tolerated by the system without affecting its operation. 

This replicates the best practice model of multisig custody, used in exchanges and custody providers globally, but embeds this into a toolset which makes it easer for people to provide for themselves or others. 

is the use of two powerful technologies, federations and chaumian e-cash mints, to remove any single weak point and to maintain complete privacy for all users, and is the reason behind Fedimint’s unusual name. 

Chaumian e-cash mints are a cryptographic tool to allow the federation guardians to process transactions on behalf of any member of the group without knowing who it is or how much they have. This ensures financial privacy even though group members have delegated the complicated task of managing their bitcoin holdings to the guardians.  

A more thorough break down is included in [[how does a Fedimint work]].

Taken as a