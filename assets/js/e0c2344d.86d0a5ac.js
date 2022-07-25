"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[6079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,p=h["".concat(l,".").concat(m)]||h[m]||u[m]||r;return n?i.createElement(p,o(o({ref:t},d),{},{components:n})):i.createElement(p,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const r={sidebar_position:2},o="What is a Fedimint",s={unversionedId:"GettingStarted/What is a Fedimint",id:"GettingStarted/What is a Fedimint",title:"What is a Fedimint",description:"This section is currently being worked on.",source:"@site/docs/GettingStarted/What is a Fedimint.md",sourceDirName:"GettingStarted",slug:"/GettingStarted/What is a Fedimint",permalink:"/wiki_fedimint/docs/GettingStarted/What is a Fedimint",draft:!1,editUrl:"https://github.com/humansinstitute/wiki_fedimint/tree/main/docs/GettingStarted/What is a Fedimint.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Why Fedimint",permalink:"/wiki_fedimint/docs/GettingStarted/WhyFedimint"},next:{title:"The Technology Components",permalink:"/wiki_fedimint/docs/GettingStarted/TechCompontents"}},l={},c=[{value:"Fedimint Components Structure",id:"fedimint-components-structure",level:2},{value:"Federation Guardians",id:"federation-guardians",level:3},{value:"Fedimint Users",id:"fedimint-users",level:3},{value:"Lightning Gateway Provider",id:"lightning-gateway-provider",level:3}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-a-fedimint"},"What is a Fedimint"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This section is currently being worked on.")),(0,a.kt)("p",null,'A Fedimint - or "Federated Mint" is a protocol to implement ',(0,a.kt)("a",{parentName:"p",href:"../CommonTerms/Chaumian%20eCash"},"Chaumian eCash")," with a federation of guardians to custody funds, instead of a centralized actor, that is integrated with the lightning network."),(0,a.kt)("p",null,"The user experience of a Fedimint is designed to be similar to that of a custodial lightning wallet (e.g. Wallet of Satoshi) with the addition of strong privacy for the user."),(0,a.kt)("p",null,"It is anticipated there will be multiple federated mints deployed globally in both small and large community instances. "),(0,a.kt)("p",null,"It makes sense to consider Fedimints deployed on a small scale for example, as a community bank for a small community with a robust circular economy and remember there will be many Fedimints deployed on the lightning network and not a single instance.  "),(0,a.kt)("p",null,"The open protocol enables communities of Bitcoiners to come together at their own discretion, assist each other with their custody and backup arrangements and make lightning payments through a privacy preserving wallet. "),(0,a.kt)("p",null,"Run for the community, by the community."),(0,a.kt)("h2",{id:"fedimint-components-structure"},"Fedimint Components Structure"),(0,a.kt)("p",null,"A Fedimint has five functional components (accounts, custody & redemption, backup & recovery, transaction processing, LN Gateway) and three user personas (Guardian, User, Lightning Gateway) as outlined in the figure and with details below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"High level logical model of a fedimint",src:n(9640).Z,width:"1337",height:"1002"})),(0,a.kt)("p",null,"All of these are supported by three core technology components eCash, lighting discussed in more detail in ",(0,a.kt)("a",{parentName:"p",href:"TechCompontents"},'"Overview > The Technology Components"'),"."),(0,a.kt)("h3",{id:"federation-guardians"},"Federation Guardians"),(0,a.kt)("p",null,"Federation guardians are the technical community members responsible for setting up and running the Fedimint.  "),(0,a.kt)("p",null,"The guardians will coordinate using a ",(0,a.kt)("a",{parentName:"p",href:"../CommonTerms/HBBFTConsensus"},"consensus protocol (HBBFT)"),' which is part of the Fedimint software deployed on personal servers.  This means that their computers will need to be on the same network and will be "talking" constantly in order to process the various transactions of the Fedimint.'),(0,a.kt)("p",null,"The federation guardians are specific roles within the system that can only be added or removed with consensus of the existing set of guardians.  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Account & Onboard:"),' The federation guardians will run the Fedimint protocol software stack. This will allow the guardians to generate a "joining a federation QR Code".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Custody & Redemption:")," The federation guardians will hold private keys to the threshold multi signature contract into which bitcoin is deposited. When a user executes a deposit process they will also blind sign eCash certificates to an amount equivalent to the deposited bitcoin."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Backup & Recovery:"),' Federation members will manage the back up of "shards" (individual parts of complete file) of users wallet data.  When a recovery request is made they will manage an out of band process to confirm the authenticity of the recovery request and coordinate with other federation members to reconstruct the shard and recover the users funds. '),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transaction Processing:")," review transactions submitted to the federation to ensure that only valid eCash certificates are redeemed and that new eCash certificates are generated where required (",(0,a.kt)("a",{parentName:"li",href:"howFMtransactionsWork"},"see how do FM transactions work?"),").")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LN Gateway:")," From the point of view of the federation the LN Gateway is simply a user accepting fm-BTC. ")),(0,a.kt)("h3",{id:"fedimint-users"},"Fedimint Users"),(0,a.kt)("p",null,"The users of the Fedimint, utilize wallet applications in order to interact with the Fedimint.  It is anticipated there will be many different wallet applications. "),(0,a.kt)("p",null,"These are considered a non-technical persona in that we assume no specific technical knowledge in order to complete tasks.  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Account & Onboard:")," Users must ensure they are happy with the reputation of the guardians for the chosen Fedimint, then they would simply scan a QR code to connect an account.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Custody & Redemption:")," Users can submit a request to deposit bitcoin and exchange for fm-BTC certificates or use the fm-BTC certificates in their wallet in order to redeem on-chain bitcoin (note: users could also transfer out to themselves via the LN Gateway)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Backup & Recovery:")," The user will encrypt and shard their data to be backed up to the federation by their wallet application. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transaction Processing:")," The user could submit transactions that transfer fm-BTC to other users.  Alternatively the user can redeem transfered fm-BTC for newly issued fm-BTC, settling a paid transaction (",(0,a.kt)("a",{parentName:"li",href:"howFMtransactionsWork"},"see how do FM transactions work?"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LN Gateway:")," As an alternative to transacting inside the Fedimint, a user can create contracts (enforced by the Fedimint consensus) that will pay the lightning gateway persona to pay LN invoices on their behalf or generate lightning invoices to be paid.")),(0,a.kt)("p",null,"In principle anyone can become a Fedimint user as long as they have access to the on boarding link / QR code, the process by which on-boarding will be managed will be managed by specific federations. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},'The money "fm-BTC" held by the user are actually "digital bearer certificates" stored on the users phone. '),(0,a.kt)("p",{parentName:"admonition"},"These are not account balances but equivalent to digital banknotes of specific set values. As these are digital, they can be encrypted and backed up.")),(0,a.kt)("h3",{id:"lightning-gateway-provider"},"Lightning Gateway Provider"),(0,a.kt)("p",null,"The Lighting Service Provider allows Fedimint users to interact with the broader lighting network outside of the mint. "),(0,a.kt)("p",null,"They are a special case of the user persona which also runs some additional technical infrastructure software such as a lightning network routing node and software to automatically interface and review Fedimint contracts for lighting services. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Account & Onboard:")," Similar to a user the Lightning Service provider will need to be comfortable accepting the federations fm-BTC in exchange for providing a liquidity bridge to the lightning network.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Custody & Redemption:")," As per user persona. It is more likely a Lightning Gateway user would require the redemption and deposit service in order to more actively balance fm-BTC, lighting and on-chain balances.  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Backup & Recovery:")," As per user persona."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Transaction Processing:")," As per user persona. The Lightning Gateway would also be running additional daemon software to automate the process of accepting contracts for lighting services (",(0,a.kt)("a",{parentName:"li",href:"../FAQs/Lightning"},"more details in FAQs > Lightning Network Integration"),")")),(0,a.kt)("p",null,"There will need to be a market discovery process, by which users of a Fedimint are able to contract with the Lightning Gateways, the specifics of this is still to be documented. "),(0,a.kt)("p",null,"It is anticipated there will be a process by which a Lightning Gateway registers it's service with the federation to ease discovery, but it would also be possible to have multiple unannounced gateways that users could contract with directly."))}u.isMDXComponent=!0},9640:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Fedimint-HL-3d786bff02c1156c43eb7b6f880e1ae6.png"}}]);