# **Fedimint's Momentum: A Look Back at 2025's First Half**

It’s been quite the ride for the [Fedimint](https://fedimint.org/) project in the first half of 2025—genuinely packed with progress. We're excited to share a rundown of what we’ve been up to.

You'll discover:

* An exciting new wallet has joined our growing ecosystem.
* A special look at BitSacco, a truly innovative project building community banking in Kenya, and how they're making waves with a significant grant.
* Game-changing enhancements for our Lightning Gateway, making operations smoother than ever.
* Major new releases, Fedimint v0.6 and v0.7, are packed with capabilities that simplify running Fedimint right from your home.

For those just tuning in, Fedimint is an open-source protocol built by and for communities.
![](/blog/fedimint-review-2025/unnamed.jpg)

Think of it as a secure and decentralized way for individuals to collectively manage and spend bitcoin privately through "federated ecash." By blending distributed custody with blind-signed digital cash notes, it offers a robust path to using bitcoin as true freedom money, boosting both transaction privacy and scalability. Our core mission? To put powerful bitcoin tools directly into the hands of communities, making the experience of using bitcoin feel more personal and empowering.

### **Ecosystem & Usability: Expanding the Reach**

A good part of our energy went into making Fedimint integrate nicely with other services and become more enjoyable for everyone to use. We're consistently broadening our horizons and ensuring the tools are accessible and impactful.

* New Wallet in the Ecosystem: Vipr Wallet A new project joined our ecosystem: the [Vipr Wallet](https://github.com/ngutech21/vipr-wallet). This fresh web-based application (a PWA, which functions like an app directly in your browser) was built using the [Fedimint WebSDK](https://web.fedimint.org/). It's an independent project, currently in Beta, and a valuable contribution from [@ngutech21](https://hashnode.com/@ngutech21). Vipr Wallet comes with all the default goodies you’d expect from Fedimint wallets: Lightning payments, E-Cash, and multi-federation support. But it also introduces some clever innovations, like reimagining the onboarding experience by integrating Nostr mint discovery ([NIP-87](https://github.com/nostr-protocol/nips/pull/1110)). Plus, it lets users pay Lightning Invoices directly through Nostr Wallet Connect. We appreciate seeing independent projects like this grow and innovate within our community. If you're working on a project or are interested in starting one, feel free to [reach out to us on discord](https://chat.fedimint.org/).
![](/blog/fedimint-review-2025/unnamed.png)

A *demo version* of the wallet is available at [beta.vipr.cash](http://beta.vipr.cash/)<u></u>

* Highlight: BitSacco - Building Community Banking in Kenya One of the most inspiring developments we've seen is the progress of [BitSacco](https://bitsacco.com/), a project beautifully showcasing Fedimint's real-world potential. Led by [@okjodom](https://hashnode.com/@okjodom), BitSacco recently received a significant grant from the [Human Rights Foundation](https://hrf.org/) (HRF), supporting their mission to reinvent traditional Kenyan SACCOs using bitcoin.
BitSacco is an open-source platform designed to bring community banking features, like digital savings groups (called *chamas*), peer-to-peer payments, and seamless fiat-to-bitcoin conversion, directly to users in emerging markets. Fedimint serves as BitSacco's core for bitcoin custody and payments, simplifying Lightning operations and providing its unique federated custody model for secure, scalable, and private transactions. This offers a compelling alternative to traditional banking for communities.
![](/blog/fedimint-review-2025/unnamed+1.jpg)

### **Core Protocol & Feature Updates: Building the Foundation**

Beyond the external usability, this past period saw some serious groundwork laid deep within Fedimint. Our focus remained clear: boost reliability, expand capabilities, and strengthen the very foundations of the system.

* Lightning Gateway Gets an Upgrade A significant upgrade arrived for Lightning Gateways on Fedimint from a collaborative effort within the [Lightning Dev Kit](https://lightningdevkit.org/) (LDK) team. The work, highlighted in this [case study](https://lightningdevkit.org/blog/fedimint-lightning-gateway-uses-ldk-node-to-simplify-deployment-and-liquidity-management/), involved integrating the [LDK Node](https://github.com/lightningdevkit/ldk-node) directly into our Lightning gateway. This change simplifies deployment of [Lightning gateways](https://fedimint.org/docs/GettingStarted/What-is-a-Fedimint#lightning-gateway-provider), the component connecting Fedimint to the wider Lightning network, by reducing the setup from two daemons (LN node and gatewayd) to one (only gatewayd). LDK also unlocks improved liquidity management for operators in the future by [allowing them to use LSPs.](https://github.com/lightning/blips/blob/master/blip-0050.md)The LDK Gateway was already available as a Lightning node in our v0.5 release last year, and with v0.6, it gained the ability to service new federations, really expanding its utility.
![](/blog/fedimint-review-2025/unnamed+1.png)

* Fedimint v0.6
Fedimint v0.6 landed, affectionately called “On-Chain for Everyone.” This update honed in on making on-chain bitcoin transactions smoother. We refined withdrawal fees and made deposits notably more straightforward. This work, building on earlier infrastructure efforts, edges eCash closer to becoming an even more practical tool for everyday bitcoin use.
![](/blog/fedimint-review-2025/unnamed+2.png)

* Fedimint v0.7
Closely following, **Fedimint v0.7** rolled out with a major milestone: a more full-stack experience. This release brought a host of new features, including a fresh UI that lets you run **Fedimint** as a single application—a neat simplification. It also introduced **LNURL** support for recurring Lightning payments (and yes, **BOLT12** support is already on our radar!). Plus, we began integrating a beta version of **Iroh** networking for home setups on Signet.

![](/blog/fedimint-review-2025/unnamed+3.png)

* * Running Fedimint from Home: A particularly anticipated development was the announcement of support for running Fedimint on [@start9labs](https://hashnode.com/@start9labs) using [Iroh](https://x.com/iroh_n0) networking. This means you no longer need a public IP address or complex domain setups, as Iroh creates secure, direct connections. We also gave the Guardian UI (that's the interface for managing your Fedimint setup) a sensible revamp, letting it run directly on your local machine (127.0.0.1:8175) without needing a separate web server. We genuinely believe this makes managing your federation at home simpler, cutting down on some of those typical technical hurdles.

![](/blog/fedimint-review-2025/unnamed+4.png)

This overall v0.7 release effectively ties together several of our recent efforts, aiming to make Fedimint feel even more cohesive and seamless. We’re looking forward to a mainnet Start9 release once Iroh finds its stable footing.

### **Community Contributions:**

Our community truly is the engine behind Fedimint, and we’re grateful for the contributions pouring in. We want to give a special shout-out to [Harsh Dev Pathak](https://x.com/Harsh_dev098) and [OmSwami](https://x.com/OmSwami2004), who joined us as [@summerofbitcoin](https://hashnode.com/@summerofbitcoin) 2025 mentees. They’re diving deep into enhancing the [Fedimint WebSDK](https://web.fedimint.org/) to make it even friendlier for developers, and they’re also building an open-source wallet designed to help people use bitcoin with even greater privacy. Let’s just say something’s definitely cooking. Curious about what they’re working on? You can explore their ongoing work at the [WebSDK repository](https://github.com/fedimint/fedimint-web-sdk). Their dedication is truly inspiring!

The journey towards widespread federated e-cash adoption is an exciting one, and we’re committed to pushing the boundaries. Stay tuned for more updates!

Many thanks to our contributors, sponsors, integrators, and testers for their continued efforts and support. Together, we’re steadily building a more private, scalable, and trust-minimized future for Bitcoin!