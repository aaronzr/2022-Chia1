cdv clsp build nft.clsp
cdv clsp curry nft.clsp.hex -a 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824 --treehash
cdv encode a36e87b61c2f104ba3ec4a03c5cb536e3d7d132ea730ee4b62985862c0f7f0ec
chia wallet send -a 0 -t xch15dhg0dsu9ugyhglvfgputj6ndc7h6yew5ucwujmznpvx9s8h7rkqtjdg48 --override
chia wallet get_transaction -f 3826433999 -tx 0x15d57eab118e41f380fdfff8faa7a490e43a957a3edc07eb459c189cbf716637
cdv rpc coinrecords --only-unspent --by puzzlehash 29a898c63235d4772f7a87173df77629de55c56c0af4953dec70af29f6367fed
cdv clsp curry nft.clsp.hex -a 0x2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824 -x
opc '(d1fbd82146b8240e40a4144770b30bfa5919f27183d956e1e852cb1f184856c7 0x29a898c63235d4772f7a87173df77629de55c56c0af4953dec70af29f6367fed 0xa36e87b61c2f104ba3ec4a03c5cb536e3d7d132ea730ee4b62985862c0f7f0ec)'
cdv rpc pushtx spendbundle_2.json