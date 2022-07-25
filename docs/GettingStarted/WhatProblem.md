---
sidebar_position: 4
title: Problem Statement
---
# What problem is being addressed by  Fedimint?

:::caution
This Guide is being actively worked on!
:::

![Problems addressed by fedimint](/img/Fedimint-Problems.png)

There are three core problems being addressed in the design of the Fedimint protocol, custodial risk, financial privacy and scaling. 

Fedimint is not a silver bullet solution to any of these problems, however, we believe it offers great trade offs to improve each of these aspects whilst balancing convenience and user experience. 

## Custodial Risk

Bitcoin allows you to be your own bank. Fedimint allows you to be your friends bank. 

There is a saying in bitcoin 

> Not your keys, not your coins. 

The purpose of this saying is to remind users of the risks of 3rd party [custodial risk](../CommonTerms/CustodialRisk).

The risk that you could permanently lose your bitcoins if the exchange or company that holds them for you [goes bankrupt](https://www.bloomberg.com/news/articles/2022-07-14/celsius-discloses-1-19-billion-deficit-in-bankruptcy-filing), [gets hacked](https://time.com/6146749/cryptocurrency-laundering-bitfinex-hack/) or [simply "loses" them](https://www.bbc.com/news/world-us-canada-47203706).

Back in 2013, the Bitcoin exchange space was dominated by [Mt. Gox](https://en.wikipedia.org/wiki/Mt._Gox), the exchange colossus based out of Tokyo, Japan and headed up by one Mark Karpeles.

Many people held their bitcoin on Mt. Gox until one day, it all vanished.  Users could no longer gain access to their hard earned or purchased bitcoin with the bankruptcy process still ongoing to this date. 

Fedimint aims to address this issue by providing a simple solution that sits between self custody and 3rd party custody -  "2nd party" or "community" custody.

![Community Custody on a spectrum](/img/CommunityCustody.png)



## Financial Privacy

## Scaling

How does Fedimint help with on chain and lightning network scaling?

Fedimint allows users to share UTXOs. It allows one lightning node to service many users.    
There is [some recent research](https://github.com/renepickhardt/mpp-splitter/issues/12#issuecomment-1143772489) on how to scale lightning that suggests the possibility of widespread use of fedimint federations could increase the efficiency of the lightning network while also increasing the potential fees an LSP can earn due to increased liquidity.