# Supply of Bitcoin and Auditing 

:::caution
This Guide is being actively worked on!
:::  

## Can a Fedimint federation be audited?  

Fedimint federations can not be audited by exteral parties. This fact makes the importance of strong 2nd party trust of federation guardians even greater and acts as a limit on how large a fedimint community can grow.

However, it is in theory possible to perform an attestation to show that the number of issued tokens and the Bitcoin balance held by the federation match at points when a “re-keying checkpoint” is made (a mechanism to periodically switch out private keys and prevent database bloat). Users are required to exchange their old tokens for new ones before each such re-keying checkpoint. This limits the frequency with which the procedure can be performed.

==WOULD A GUARDIAN KNOW THE OUTSTANDING BALANCE OF FEDIS AND BTC==