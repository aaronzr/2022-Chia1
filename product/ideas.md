# Product brainstorming

## On-chain COVID tests
 
The politically contentious status of workplace vaccine mandates, international travel restrictions, and fear due to vaccine misinformation creates a strong incentive for faked COVID test results. **(Finn fill in)**

Pros/Value-adds |  Cons/Challenges | 
--- | --- 
More difficult for individuals to fake COVID tests = less risk to public health through dishonest behavior | Risk of fake COVID labs abusing the platform to grant fake results. Need to have a system in place for vetting trusted labs 
etc. | etc.
 
## On-chain carbon credits

Carbon credits are supposed to track and set limits on companies' carbon emissions, but corporations and governments both have economic incentive to "cheat" by misreporting their emissions. A trustless, verifiable way to track emissions is necessary to hold powerful entities accountable. **(Ende fill in)**

**Chia's Costa Rica project** https://www.businesswire.com/news/home/20211111005809/en/Costa-Rica-and-Chia-Announce-Partnership-to-Support-Climate-and-Government-Initiatives

Pros/Value-adds |  Cons/Challenges | 
--- | --- 
Trustless and objective as long as _most_ countries agree on a correct blockchain | Still may be possible to sabotage on the level of large corps/govts by simply lying about emissions (how are carbon credits verified today?)
etc. | etc.

## On-chain music royalty distribution

### Problem

Back in the day (until c. 2000s), musicians had to sign a contract with a [record label](https://en.wikipedia.org/wiki/Record_label#Major_labels) (e.g. Sony, RCA Victor) in order to sell their music on vinyl and/or CDs. This often gave record companies undue influence over their artists, e.g., telling them what kind of music to write based on what sells.  The system also indirectly punished artists for being too innovative, since it was risky for record companies to sign someone who deviates too much from the mainstream.  In addition, [performance rights organizations](https://en.wikipedia.org/wiki/Performance_rights_organisation) (ASCAP, BMI) ensured that musicians received royalties whenever their music was played on radio or television. Historically, however, PROs have engaged in price wars with each other, standoffs with radio stations, and discriminatory representation of artists, all of which harm musicians.

Digital streaming services (Napster, Pandora, iTunes/Apple Music, Spotify, YouTube Music, etc.) opened up the market by allowing artists and audiences to connect more easily, giving musicians more autonomy and freedom. However, the payment model also changed: musicians went from making dollars per album sold in record stores, to cents per song bought on iTunes, to fractions of a cent per Spotify stream.  The proliferation of new music platrorms has also made performance rights management much more complicated, necessitating companies called "distributors" (CDBaby, DistroKid) that distribute music to hundreds of platforms and centralize royalty collection and payment.

Some problems with the current model include:
*  Major platforms like iTunes and Spotify only accept music from small artists via a distributor.
*  Other platforms that are more directly artist-facing (Soundcloud, Bandcamp) give an artist easy access to publish music, but are harder to monetize, pay less, and have far less reach than more mainstream platforms.
*  YouTube algortithms to identify copyrighted music are imperfect, and often create more headache for YouTubers than remuneration for musicians.
*  Distributors have been accused of [dishonest practices](https://www.youtube.com/watch?v=QIeS1pL4N6E), such as claiming royalties for unregistered songs.
*  Record labels often write contracts stipulating that the label must recoup all manufacturing costs before the artist is paid _anything_. (This practice has begun to change, but only [recently](https://www.forbes.com/sites/bobbyowsinski/2021/06/13/sony-music-moves-to-pay-royalties-to-artists-that-still-owe-it-money/?sh=41e2c6de5a63).)
*  **These "middleman" companies each [take](https://www.recordingconnection.com/reference-library/recording-entrepreneurs/how-do-record-labels-turn-a-profit/) [their](https://cdbaby.com/cd-baby-cost.aspx) [cut](https://artists.apple.com/support/1124-apple-music-insights-royalty-rate), consuming most of the revenue long before any royalties reach the artist.**

These issues illustrate why artists still sell physical CDs at their gigs despite endless online listening options: it is the only way that the artist can take home 100% of what the album is worth.  An online system that facilitates such peer-to-peer exchange of music would empower artists to keep more of their music's revenue by cutting out middlemen and connecting artists directly with their fans.

### Value proposition

Cryptocurrency uses blockchain technology to allow peer-to-peer exchange of monetary value without interference by governments or financial institutions. Similarly, blockchain could be used to support peer-to-peer sale of music without the involvement of "middleman" stakeholders standing between the fans and the artist.

We propose a blockchain solution that takes the place of music distributors and performance rights organizations by providing two key value-adds: 
1. Facilitating peer-to-peer purchases of music by fans directly from artists -- in the form of streams, songs, or entire albums -- such that the artists keep 100% of the purchase price;
2. Representing the total royalty share of a song as a fungible token connected to shareholders' wallets, which automates royalty distribution without a legal contract

Pros/Value-adds |  Cons/Challenges | 
--- | --- 
Artist receives revenue directly, like selling an album at a gig | Difficult to educate musicians, convince them to try _yet another_ platform
Fans can become stakeholders in the music they love; new form of engagement and ownership | 
Stakeholder fans have incentive to promote the music, giving artists "word-of-mouth" advertising | 
&nbsp; | Expect pushback from established music industry, e.g. ultimatums directed at artists
Small artists can sell the royalty share _itself_, receive cash-in-hand rather than waiting for royalty checks | 
