<img src="webapp/src/assets/logo/logo.png" alt="Oval Logo"/>

<img src="https://img.shields.io/badge/%F0%9F%8E%89%20CS%20210%20Best%20Of-VC:%20Value%20to%20the%20Target%20Customer-purple?colorA=ffd700"/>

 ## Project Overview
 
 We are reimagining a sustainable future of cryptocurrency and blockchain technology. We plan to build a DeFi product on top of Chia that leverages Chia's energy and time efficient consensus mechansism. 
 
 You can access and test out the public facing version of the website at [this link](https://jennhe.github.io/oval/)

[Project theme](https://github.com/cs210/2022-Chia1/blob/main/ProjectTheme-Crypto-Chia.pdf)

# Links

[Team reading list @ notion] https://www.notion.so/Chia-Resources-Links-b72b01a400ab4b7a9344ba4552e01d70
 # :rocket: Latest Updates :rocket:

## Class deliverables
Date | Thing 
--- | --- 
2/8 | [OKRs and KPIs](https://docs.google.com/document/d/1OHoNefildGwwCYHj2ygEQYmbYHIhpuSBs7_-v6s45W0/edit)
4/14 | [Contract of Deliverables](https://docs.google.com/document/d/1BDSlOO23SWEQrRTsTWvVHZerDEPfmpc4/edit)
4/21 | [Real Customer Profile](https://docs.google.com/presentation/d/1YNMCroEHl_P41jnpirjgobTaxy9wvSrRUL-hrGBOmY8/edit#slide=id.g1254947738c_0_6)

# Running webapp

In the webapp directory, install dependencies:

### `npm install react-scripts`

Then, you can run:

### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
 
 # Team Members
Member |  Email | Photo
--- | --- | ---
Aaron Reed | aaron73@stanford.edu| <img src="res/aaron.JPEG" alt="Aaron Reed" height="200" />
Ende Shen |endeshen@stanford.edu | <img src="res/ende.jpg" alt="Ende Shen" height="200" />
Finn Dayton | finniusd@stanford.edu | <img src="res/finn.jpg" alt="Finn Dayton" height="200"/>
Jennifer He |jenhe@stanford.edu | <img src="res/jen.jpg" alt="Jennifer He" height="200"/>
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

## March 17 
### We met with A16z, Dan Boneh and Bram Cohen to present our MVP
We showed the frontend and demonstrated the ability to actually upload an image that goes on IPFS. We talked about our structure of the backend and how we were approaching implementing an NFT in Chialisp. 
We received important feedback from Bram and Dan. Here are the main points: 
1. Store the hash of the image on chain rather than just a link to IPFS. We agreed. This makes the NFT more "real" for users. There can still be an IPFS link for rendering purposes. 
2. Chia is releasing its own NFT protocol we could use, but this likely will not be out in time to use for the next quarter. 
3. Chiapower.org has lots of useful information about the Chia blockchain energy usage. 
4. There are three main painpoints with ERC721 NFTs:
 a. Rentability 
 b. Royalties 
 c. Non-transferrability
 We should consider these when designing our contract. 

## March 14

Progress update:
* Jen: created React app with working components
* Ende: got file upload to IPFS to work on separate repo https://github.com/endeshen99/chia1-frontend
* Finn/Aaron: studied backend and Chialisp to deploy smart contracts

To Do:
* Jen: try to connect Ende's IPFS repo to front end code in this repo, add toast when file uploaded with link or hash, add optional form fields and error checking for fields, add pages for About/Team/Q&A, look into hosting site
* Ende: support Jen with questions about IPFS
* Finn/Aaron: continue to work with backend/Chialisp, prepare to talk about backend architecture design for presentation


## March 6
Upcoming deliverables:
* Tues March 8 - run through presentation with Collin
* Thurs March 10 - poster-style class presentation
* Wed March 16 - a16z / Bram pitch
Objectives for presentation:
* Show GUI
* Run NFT on testnet using cloned xch-gallery code

Jam sessions:

## Feb 22

* Finn and Aaron: finish [Chialisp tutorial](https://www.youtube.com/playlist?list=PLe6Q9VClOrJHdPpbtLXNY7PMWkJvd_xtR), look into official [Chia blockchain Python repo](https://github.com/Chia-Network/chia-blockchain)
* Ende: investigate IPFS CLI/Python API
* Jen: keep designing frontend

## Feb 7
We discussed the feedback we received from our liaison and our VC guest last week.
We're looking into building a subset of what we pitched to the VC in order to
make it more feasible that we can build something in 1.5 quarters.

We also gave some serious thought to just ditching Chia like the Chia 3 team did and building an ETH dapp. Ultimately we decided (for now) to stick to trying to build something that improves the Chia ecosystem.

Ideas discussed in [OKRs and KPIs](https://docs.google.com/document/d/1OHoNefildGwwCYHj2ygEQYmbYHIhpuSBs7_-v6s45W0/edit):

Idea | Info
--- | ---
Chia wallet | Joe's suggestion. Already built: [Nucle](nucle.io). Should we try to interface with this or build our own?
NFT platform | Allow people to mint NFTs on Chia. Good middle-ground for feasibility. Functionality similar to [OpenSea](https://opensea.io/asset/create) or [Polygon](https://docs.polygon.technology/). Assumes we can connect to a Chia wallet.
Music royalty distribution | The original idea. Probably not achievable in 1.5 quarters.
(two more that I don't remember -- **Finn fill in**) | 🤷‍♂️

**Meta-idea:** Two of us attended [Chia's AMA](https://www.youtube.com/watch?v=lxi8svrIylY) about their [updated business whitepaper](https://twitter.com/chia_project/status/1489034223067402240). The impression we got is that, despite being a relatively mature project, the Chia ecosystem is still at the level of accessibility you'd expect of a months-old altcoin project. Chia's audience is mostly hardcore blockchain geeks, most of whom farm Chia themselves. There is a lot of room for growth and engagement of the wider crypto community when you compare Chia's ecosystem to, say, Ethereum's. It seems like Chia wants to fund projects that make Chia more accessible and reduce the expertise required to start using Chia. Example: [Nucle](nucle.io) is _just_ a web-based Chia wallet, but it was the first Cultivation Grant recipient.

It seems worthwhile to look at where Chia's toolset is compared to ETH, and maybe try to build the _next_ thing that would narrow the gap of what's available to Chia developers/users compared to ETH devs/users. I.e., we now have a [lightweight node](https://www.chiaexplorer.com/blockchain/address/xch1w8ehe3mwgtjsqzaplpllqpclql2nxna76fp677643jsfvmn4m80q937jhj) and a wallet that doesn't require a node: what's the next easiest thing to build that ETH has but Chia doesn't?

## Jan 25
We met up and presented our respective research areas.
Below are links to resources and insights:

Dapps: https://docs.google.com/document/d/1AcObyjksnjtOSv10UrNRsW9gxR95POVWRsaDZ7xPD0s/edit?usp=sharing
Chia Tech Stack:
Chia API's:
Bitcoin & Chia mechanism: 

Additionally, we proposed three potential ideas for our product, which can be found in /product/ideas.md

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
