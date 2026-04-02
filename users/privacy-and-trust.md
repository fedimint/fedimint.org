---
sidebar_position: 3
---

# Privacy and Trust

Fedimint gives you strong financial privacy, but it's important to understand the trust model and its trade-offs.

## The Privacy Model

Fedimint uses **Chaumian eCash** — a cryptographic system where the federation blindly signs your eCash notes. This means:

- Guardians **cannot see** your balance.
- Guardians **cannot see** your transactions.
- Guardians **cannot link** who received an eCash note to who redeemed it.

This is a fundamental improvement over third-party custodians like exchanges, who can see everything you do.

## The Trust Model

Fedimint is an **explicit trust model**. You are trusting the guardians of your federation not to collude. Here's what that means in practice:

### Custodial Risk

A majority of guardians could theoretically collude to steal the federation's Bitcoin. This is why it's critical to **know your federation** — join federations where the guardians are people you have strong, pre-existing relationships with.

The social incentive is powerful: guardians who steal from their own friends, family, or community face real-world social and personal consequences that go far beyond any technical protocol.

### Debasement Risk

Guardians could theoretically issue more eCash notes than there is Bitcoin backing them. The federation's consensus mechanism and auditing tools work to prevent this, but it remains a trust assumption.

### Regulatory Risk

Depending on jurisdiction, federations operating in non-commercial contexts among friends and family are often exempt from financial regulations. However, this is an evolving area.

### Lightning Gateway Risk

When you pay a Lightning invoice through a gateway, you're trusting that gateway to complete the payment. Multiple gateways can operate within a federation, giving you options.

## Know Your Federation

The golden rule of Fedimint: **know your federation**.

Join federations run by people you trust — family, close friends, respected community members. The closer your relationship with the guardians, the safer your funds.

You can also be a member of multiple federations, perhaps with different strategies:

- **Family federation:** Higher trust, used for longer-term holding.
- **Friends federation:** Wider anonymity set, everyday spending.
- **Community federation:** Larger group, used for local commerce.

:::note
Fedimint is a voluntary system. We hope that an honest accounting of the trade-offs helps you make the best decisions for your own risk profile.
:::
