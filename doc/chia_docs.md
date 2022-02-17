
**This info has been ported to the GitHub Wiki!  See there for more.**

# Chia documentation

This document compiles information that we have learned about Chia and associated technologies for easy reference.

Resources suggested by Joe: 
* [Chia whitepaper](https://www.chia.net/approach/)

* [CAT1 token spec](https://www.chia.net/2021/11/15/the-CATs-out-of-the-bag.en.html)

* [Chialisp \(smart contract language\)](https://chialisp.com/)

* [Official Chia Docs](https://docs.chia.net/docs/01introduction/what-is-chia/)

* [Chia greenpaper (PoTS algo)](https://www.chia.net/greenpaper/)

## How Chia works

The Chia business whitepaper whitepaper references how it improves on Bitcoin, so it is worth understanding how Bitcoin works as a baseline.  After we know the advantages and disadvantages of Bitcoin, we can understand how Chia addresses these.


### Bitcoin

Sources: [Bitcoin whitepaper (2009)](https://bitcoin.org/en/bitcoin-paper) [3Blue1Brown explainer (2017)](https://www.youtube.com/watch?v=bBC-nXj3Ng4) [Whiteboard Crypto explainer (2021)]()

Bitcoin tries to solve the problems of conventional transaction methods using cryptography. Accepting a credit/debit card requires a seller to trust both the buyer and the credit card company, and to pay fees to the CC company to offset the cost of dispute resolution. The alternative is to accept cash, which cuts out middlemen but sacrifices the convenience of electronic payment, which is impossible for companies that do business online.

Bitcoin attempts to combine the trustless nature of cash with the convencience of electronic payment by using cryptography to make fraudulent transactions very difficult.  Bitcoin was not the first method to use cryptography to prevent fraud; it builds on [Hashcash (1997)](https://en.wikipedia.org/wiki/Hashcash#Technical_details), which used proof-of-work to fight email spam and DDoS attacks. However, Bitcoin IS the first example of a blockchain (that I'm aware of).

Medium |  Advantages | Disadvantages
--- | --- | ---
Cash | <ul><li>Trustless</li><li>No middleman</li></ul> | <ul><li>Inconvenient</li><li>Centralized (government)</li></ul>
Credit cards | blah | <ul><li>Trustful</li><li>Fraud-prone</li><li>Middleman with fees (CC company)</li><li>Centralized (CC company)</li></ul>


Bitcoin uses a data structure called a **blockchain** to verify groups of transactions.

(image)

