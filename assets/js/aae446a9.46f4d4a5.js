"use strict";(self.webpackChunkwiki_fedimint=self.webpackChunkwiki_fedimint||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),d=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},l=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=d(n),f=r,m=l["".concat(u,".").concat(f)]||l[f]||p[f]||o;return n?i.createElement(m,a(a({ref:t},s),{},{components:n})):i.createElement(m,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}l.displayName="MDXCreateElement"},6607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const o={},a="Supply of Bitcoin and Auditing",c={unversionedId:"FAQs/SupplyAudit",id:"FAQs/SupplyAudit",title:"Supply of Bitcoin and Auditing",description:"This Guide is being actively worked on!",source:"@site/docs/FAQs/SupplyAudit.md",sourceDirName:"FAQs",slug:"/FAQs/SupplyAudit",permalink:"/wiki_fedimint/docs/FAQs/SupplyAudit",draft:!1,editUrl:"https://github.com/humansinstitute/wiki_fedimint/tree/main/docs/FAQs/SupplyAudit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Regulatory Questions",permalink:"/wiki_fedimint/docs/FAQs/RegulatoryQuestions"},next:{title:"The Federation",permalink:"/wiki_fedimint/docs/FAQs/TheFederation"}},u={},d=[{value:"Can a Fedimint federation be audited?",id:"can-a-fedimint-federation-be-audited",level:2}],s={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"supply-of-bitcoin-and-auditing"},"Supply of Bitcoin and Auditing"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This Guide is being actively worked on!")),(0,r.kt)("h2",{id:"can-a-fedimint-federation-be-audited"},"Can a Fedimint federation be audited?"),(0,r.kt)("p",null,"Fedimint federations can not be audited by exteral parties.\xa0This fact makes the importance of strong 2nd party trust of federation guardians even greater and acts as a limit on how large a fedimint community can grow."),(0,r.kt)("p",null,"However, it is in theory possible to perform an attestation to show that the number of issued tokens and the Bitcoin balance held by the federation match at points when a \u201cre-keying checkpoint\u201d is made (a mechanism to periodically switch out private keys and prevent database bloat). Users are required to exchange their old tokens for new ones before each such re-keying checkpoint. This limits the frequency with which the procedure can be performed."),(0,r.kt)("p",null,"==WOULD A GUARDIAN KNOW THE OUTSTANDING BALANCE OF FEDIS AND BTC=="))}p.isMDXComponent=!0}}]);