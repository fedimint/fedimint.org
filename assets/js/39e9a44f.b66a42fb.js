"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[6854],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),h=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=h(i),m=n,p=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return i?a.createElement(p,r(r({ref:t},u),{},{components:i})):a.createElement(p,r({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var h=2;h<o;h++)r[h]=i[h];return a.createElement.apply(null,r)}return a.createElement.apply(null,i)}c.displayName="MDXCreateElement"},4808:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var a=i(7462),n=(i(7294),i(3905));const o={sidebar_position:3},r="Debasement Risk",s={unversionedId:"TradeOffs/DebasementRisk",id:"TradeOffs/DebasementRisk",title:"Debasement Risk",description:"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.",source:"@site/docs/TradeOffs/03-DebasementRisk.md",sourceDirName:"TradeOffs",slug:"/TradeOffs/DebasementRisk",permalink:"/wiki_fedimint/docs/TradeOffs/DebasementRisk",draft:!1,editUrl:"https://github.com/humansinstitute/wiki_fedimint/tree/main/docs/TradeOffs/03-DebasementRisk.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Custodial Risk",permalink:"/wiki_fedimint/docs/TradeOffs/NotYourKeys"},next:{title:"Regulatory Risk",permalink:"/wiki_fedimint/docs/TradeOffs/RegulatoryRisk"}},l={},h=[{value:"The Risk",id:"the-risk",level:2},{value:"The Corrupt Quorum Problem",id:"the-corrupt-quorum-problem",level:3},{value:"Exit 1: The Mint",id:"exit-1-the-mint",level:4},{value:"Exit 2: Defraud Merchants / Users",id:"exit-2-defraud-merchants--users",level:4},{value:"Exit 3: LN Gateway",id:"exit-3-ln-gateway",level:4},{value:"Impact",id:"impact",level:3},{value:"The Mitigation",id:"the-mitigation",level:2},{value:"In Mint Audits",id:"in-mint-audits",level:3},{value:"Guardian &quot;Mexican Stand-off&quot;",id:"guardian-mexican-stand-off",level:3},{value:"Know Your Federation",id:"know-your-federation",level:3},{value:"Existing Risk",id:"existing-risk",level:3},{value:"Threshold signatures on eCash Issuance &amp; Redemption",id:"threshold-signatures-on-ecash-issuance--redemption",level:3},{value:"Bank Runs",id:"bank-runs",level:3},{value:"In App Monitoring",id:"in-app-monitoring",level:3}],u={toc:h};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"debasement-risk"},"Debasement Risk"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This guide has been developed as a community project and is a live document. We would appreciate any feedback you may have and you can submit edits, corrections and pull requests through the link at the bottom of each page.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/CommonTerms/eCashToken"},"eCash tokens")," represent a claim on bitcoin held by the federation guardians."),(0,n.kt)("p",null,"As such there is a possibility that the mint could generate more claims for bitcoin than there are bitcoin in the custody of the guardians. "),(0,n.kt)("p",null,"This could have multiple impacts including violating the norms of the 21 million bitcoin limit and the ability of the user to verify their transactions. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Dont trust verify",src:i(8326).Z,width:"640",height:"216"})),(0,n.kt)("h2",{id:"the-risk"},"The Risk"),(0,n.kt)("p",null,"This risk to a user is that they may be left holding eCash tokens, that are not matched to bitcoin in the federation vault.  "),(0,n.kt)("p",null,"This risk is caused by a balance sheet audit and verification problem that exists in eCash due to the anonymous nature of blinded eCash tokens. "),(0,n.kt)("p",null,"To expand on this, at all times the mint has both assets and liabilities which should balance:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Assets:")," The bitcoin held in the on chain multi signature wallet controlled by the federation guardians. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Liabilities:")," The outstanding number of eCash tokens that have been issued by the mint.  ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Balance sheet options",src:i(9035).Z,width:"1466",height:"653"})),(0,n.kt)("p",null,"The guardians of the federation have access to the required information that allows them to balance the books between the eCash outstanding and the assets held on chain. "),(0,n.kt)("p",null,'For the user however, whilst they can see the assets on chain, they have no view of the total number of outstanding liabilities and so the users is always "unable to verify" the total asset and liability balance of the federation, as such they are trusting the guardians to manage this balance. '),(0,n.kt)("p",null,"This mismatch is at the core of this risk as it means that no external party to the guardians who can audit the supply and marks the importance strong 2nd party trust in federation guardians."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"For completeness this risk also exists in any custodial bitcoin arrangement (for example with exchanges) in which the user gives up access to their keys.")),(0,n.kt)("h3",{id:"the-corrupt-quorum-problem"},"The Corrupt Quorum Problem"),(0,n.kt)("p",null,'This is complicated further if we consider the situation in which there is a "corrupt quorum" of guardians.'),(0,n.kt)("p",null,"Only guardians are able to create and sign false claims and this is done with a threshold of guardians requiring many corrupt guardians. "),(0,n.kt)("p",null,"So in order to realize this risk in a Fedimint, a quorum of corrupt guardians (66% or in our figure guardian 1 & 2) would need to collude to create new eCash tokens that had no bitcoin backing as shown below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Balance sheet options",src:i(7662).Z,width:"1502",height:"653"})),(0,n.kt)("p",null,"Three points to make at this point are:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"No additional bitcoins exist, only additional claims to bitcoin that circulate within a specific limited economic community. "),(0,n.kt)("li",{parentName:"ol"},"This is a fraud exercised by a subset of federation guardians on both the Fedimint users who have honestly deposited funds (loss of funds impact) and the honest Guardian (reputation impact). "),(0,n.kt)("li",{parentName:"ol"},'In order to realize this fraud the corrupt quorum of will need to exercise a redemption of the "false eCash claims".')),(0,n.kt)("p",null,"To understand the impact we need to consider ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"how")),' corrupt guardians would redeem these false "claims" on the bitcoin.  These claims could be transferred to any of the parties who accept fm-BTC:'),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"The Mint:")," To redeem for bitcoin from the multisig. "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Merchants / Users:")," In exchange for goods and services."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"LN Gateway:")," In exchange for making and receiving lightning payments (Mint issues eCash and pays out to itself via LN, gateway racks up IOUs and would start redeeming against the bitcoin supply - so we're back to why not steal the bitcoin?)")),(0,n.kt)("p",null,"The corrupt guardians could take any one, or all three of these exits. "),(0,n.kt)("h4",{id:"exit-1-the-mint"},"Exit 1: The Mint"),(0,n.kt)("p",null,"To exit this attack via the mint the corrupt guardians are using the claims to remove bitcoin from the mint, without alerting the remaining honest guardian."),(0,n.kt)("p",null,"It should be noted at this point that the same group could empty the mint directly if they are a quorum on the multi-sig vault. This would be a higher pay off strategy, but would instantly alert the remaining guardian and so be instantly obvious within the community. "),(0,n.kt)("p",null,"A lower value theft could occur without alert where the corrupt guardians redeem a smaller amount of bitcoin over time. As more bitcoin is withdrawn this increases the chances of a collapse of the Fedimint. "),(0,n.kt)("h4",{id:"exit-2-defraud-merchants--users"},"Exit 2: Defraud Merchants / Users"),(0,n.kt)("p",null,'This attack would involve issuing fake eCash and using this in the local economy in exchange for goods and services.  A "mint eats free attack". '),(0,n.kt)("p",null,"Here the corrupt guardians are able to acquire real world goods and services from others in the federation at zero cost. This introduces a risk of collapse on the Fedimint. "),(0,n.kt)("h4",{id:"exit-3-ln-gateway"},"Exit 3: LN Gateway"),(0,n.kt)("p",null,"The LN gateway attack is similar to attack two, only instead of cashing out to real world goods the claims are paid to the LN gateway in order to pay invoices over lightning e.g. to the corrupt guardians external lightning wallet. "),(0,n.kt)("p",null,"This version, has potentially more risk for the corrupt guardians as it is expected that LN gateways would more frequently redeem these eCash tokens for on-chain bitcoin than a user / merchant in order to balance liquidity."),(0,n.kt)("p",null,"In this way an LN Gateway could also act as an early warning on mint liquidity, where a trend is observed of bitcoin constantly flowing out of the mint and not being received inbound."),(0,n.kt)("h3",{id:"impact"},"Impact"),(0,n.kt)("p",null,"The impact of this activity is two fold:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Mint Collapse:")," Over a period of time more fm-BTC claims would be held by the users than exist in the multi-sig. This leads to fragility and eventually collapse of the Fedimint when the redemption's exceed the bitcoin in the mint. "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Reputation Loss:")," The local reputation of the corrupt guardians would be destroyed, quite rightly. Unfortunately this would also likely impact the honest guardian as it would not be possible to confirm which quorum of guardians were dishonest. ")),(0,n.kt)("h2",{id:"the-mitigation"},"The Mitigation"),(0,n.kt)("p",null,"==IN PROGRESS=="),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This Guide is a work in progress.  We would appreciate any feedback you may have and you can submit edits through the link at the bottom of the page.")),(0,n.kt)("p",null,"In mitigating this risk we should consider the options to both stop false claims and raise the alarm on discovery of false claims. "),(0,n.kt)("p",null,"Whilst several mitigation activities will be outlined, the tl;dr will be a user can't verify the reliability or "),(0,n.kt)("h3",{id:"in-mint-audits"},"In Mint Audits"),(0,n.kt)("p",null,"During each consensus epoch, code is in place to balance the known assets and liabilities of the mint. This will allow guardians to monitor for bugs which cause an debasements and raise the alarm / act accordingly. "),(0,n.kt)("p",null,'It should be noted that if there is a quorum of bad guardians then these liabilities would be "unknown" to the Fedimint and so would not be identified by this process. '),(0,n.kt)("h3",{id:"guardian-mexican-stand-off"},'Guardian "Mexican Stand-off"'),(0,n.kt)("p",null,"For this risk to play out, we "),(0,n.kt)("p",null,"An honest guardian would know. The amount and value of eCash tokens at specific values that they have personally "),(0,n.kt)("p",null,"Honest guardian is aware of up-time, can raise alarm on increased redemptions of honest "),(0,n.kt)("h3",{id:"know-your-federation"},"Know Your Federation"),(0,n.kt)("p",null,"You're already trusting the mint with all of your bitcoin. "),(0,n.kt)("p",null,"However, it is in theory possible to perform an attestation to show that the number of issued tokens and the Bitcoin balance held by the federation match at points when a \u201cre-keying checkpoint\u201d is made (a mechanism to periodically switch out private keys and prevent database bloat). Users are required to exchange their old tokens for new ones before each such re-keying checkpoint. This limits the frequency with which the procedure can be performed."),(0,n.kt)("p",null,"The risk here is that the guardians would be able to debase your holding by secretly signing and issuing additional tokens that are spendable inside the mint"),(0,n.kt)("h3",{id:"existing-risk"},"Existing Risk"),(0,n.kt)("h3",{id:"threshold-signatures-on-ecash-issuance--redemption"},"Threshold signatures on eCash Issuance & Redemption"),(0,n.kt)("p",null,"It is possible (and recommended) to separate both the key sets and thresholds required to perform transaction signing and management of the multi-signature vault.  "),(0,n.kt)("p",null,"In effect this means you can set a higher threshold of trust for users to redeem the on-chain bitcoin form the mint. This protects users "),(0,n.kt)("h3",{id:"bank-runs"},"Bank Runs"),(0,n.kt)("h3",{id:"in-app-monitoring"},"In App Monitoring"))}d.isMDXComponent=!0},9035:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/fm-debasement-balance-combined-117bcda8f4d309125153309b17fe5abd.png"},7662:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/fm-debasement-corrupt-40101e438782bfbd3fd6c81878346652.png"},8326:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/fm-donttrust-verify.excalidraw-701dcb79bb9d05225e7f54678f04a578.png"}}]);