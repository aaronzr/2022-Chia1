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
Credit cards |endeshen@stanford.edu | <ul><li>Trustful</li><li>Fraud-prone</li><li>Middleman with fees (CC company)</li><li>Centralized (CC company)</li></ul>
Finn Dayton | finniusd@stanford.edu | <img src="res/finn.jpg" alt="Finn Dayton" height="200"/>
Jennifer He |jenhe@stanford.edu | <img src="res/jennifer.jpg" alt="Jennifer He" height="200"/>
Liaison: Joe Latone | jlatone@us.ibm.com |

[Project theme](https://github.com/cs210/2022-Chia1/blob/main/ProjectTheme-Crypto-Chia.pdf)

Bitcoin uses a data structure called a **blockchain** to verify groups of transactions.

# Links

[Team reading list @ notion] https://www.notion.so/Chia-Resources-Links-b72b01a400ab4b7a9344ba4552e01d70
 # :rocket: Latest Updates :rocket:


 
 # Team Members
Member |  Email | Photo
--- | --- | ---
Aaron Reed | aaron73@stanford.edu| <img src="res/aaron.JPEG" alt="Aaron Reed" height="200" />
Ende Shen |endeshen@stanford.edu | <img src="res/ende.jpg" alt="Ende Shen" height="200" />
Finn Dayton | finniusd@stanford.edu | <img src="res/finn.jpg" alt="Finn Dayton" height="200"/>
Jennifer He |jenhe@stanford.edu | <img src="res/jennifer.jpg" alt="Jennifer He" height="200"/>
Liaison: Joe Latone | jlatone@us.ibm.com |

# Team Skills Matrix

Name | Skills | Personal Traits | Desired Growth | Weakness
--- | --- | --- | --- | ---
Aaron | Python, C, C++, some Java; interest in crypto (I mine) | Creative, questioning, evidence-based | Working on a team, setting and executing goals, networking... and Solidity/Chialisp | Procrastination, time management, going off on tangents in discussions
Ende | Python, AI, some venture capital experience | love doing research | work with teammates, learn blackchain eco system | taking a step back and having more outreach
Finn | Python, Solidity, Javascript, general knowledge of crypto | hardworking | working on a team, time management, Solidity | procrasination 
Jennifer | Python, JavaScript, web dev, design, AI, very general knowledge of crypto | creative, analytical | working on a team, learning more about crypto and sustainability | procrastination, public speaking


# Team Communication

Slack: https://join.slack.com/share/enQtMjk4NzM5MDE2NTc0OC1jODk1OWViYTg5YTViMzMzZDllYWVkYjRmNzZkNzU3NjljZDhhODdjMTMzMTlmYTAxNTQwZjA5MGQzYTgzNGM1

Documentation on Google Drive available *** TBD *** [here](https://drive.google.com/drive/u/1/folders/0AAK6_efKZUj2Uk9PVA)

Notion: https://www.notion.so/Team-Home-ed2babbb88504af587e482fb26b0ff1d

# Team Meeting notes

## Jan 23
### We are presenting within our groups topics below:

Ende: dapps
--intro to dapps [https://www.youtube.com/watch?v=oPIupbsVimc](https://www.youtube.com/watch?v=oPIupbsVimc)
--intro to dapps (technical): [https://www.youtube.com/watch?v=8wMKq7HvbKw](https://www.youtube.com/watch?v=8wMKq7HvbKw)
--dapps featured in ethereum.org: [https://ethereum.org/en/dapps/](https://ethereum.org/en/dapps/)

Aaron: technical, system of chia
--CAT1 Standard: [https://www.chia.net/2021/11/15/the-CATs-out-of-the-bag.en.html](https://www.chia.net/2021/11/15/the-CATs-out-of-the-bag.en.html)
--ERC-20: potential for music ownership
--Other protocols: ERC 721, ERC 1155
--[https://cdbaby.com/](https://cdbaby.com/) - current state of music distribution

Jennifer:
--tether - [https://www.youtube.com/watch?v=-whuXHSL1Pg](https://www.youtube.com/watch?v=-whuXHSL1Pg)
--A MVP codebase of maybe smart contracts (minimal working example) built on top of ChiaLisp (incorporating Chia API)

### Reading list
**Chia grant program:** [https://www.chia.net/2021/08/18/chia-cultivation-grant-program.html#:~:text=TL%3BDR Chia is launching,the Chia ecosystem at large.&text=To that end%2C in an,have created this grant program](https://www.chia.net/2021/08/18/chia-cultivation-grant-program.html#:~:text=TL%3BDR%20Chia%20is%20launching,the%20Chia%20ecosystem%20at%20large.&text=To%20that%20end%2C%20in%20an,have%20created%20this%20grant%20program).

**Chia's Costa Rica project** https://www.businesswire.com/news/home/20211111005809/en/Costa-Rica-and-Chia-Announce-Partnership-to-Support-Climate-and-Government-Initiatives
