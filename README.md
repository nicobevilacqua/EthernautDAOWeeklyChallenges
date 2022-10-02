# Ethernaut DAO Weekly Challenges

![image](https://user-images.githubusercontent.com/5586894/193433363-4686eec2-a2de-4def-bc96-ad13a63c3dbd.png)

Recopilation of Ethernaut DAO's weekly challenges.
## How to use:

1. Clone this repo.
2. Complete the challenges on `./test/`.
3. Verify the result running `yarn test`.

## Index

1. [Private Data](#private-data)
2. [Wallet](#wallet)
3. [Car Market](#car-market)
4. [Vending Machine](#vending-machine)
5. [Ethernaut DAO Token](#ethernaut-dao-token)
6. [Hackable](#hackable)
7. [Switch](#switch)
8. [Vulnerable NFT](#vulnerable-nft)

## Private Data

<img width="578" alt="image" src="https://user-images.githubusercontent.com/5586894/193433454-155c25f6-24e4-4df0-888e-4a478b373c3b.png">

[Link to tweet](https://twitter.com/EthernautDAO/status/1543957806532833282?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1543957806532833282%7Ctwgr%5E0a552d4813b06a9105a5bf9c491b2e0368764a0e%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext2Fhtmlkey%3Da19fcc184b9711e1b4764040d3dc5c07schema%3Dtwitterurl%3Dhttps3A%2F%2Ftwitter.com%2Fethernautdao%2Fstatus%2F1543957806532833282image%3Dhttps3A%2F%2Fi.embed.ly%2F1%2Fimage3Furl3Dhttps253A252F252Fabs.twimg.com252Ferrors252Flogo46x38.png26key3Da19fcc184b9711e1b4764040d3dc5c07)

Goal: Take ownership of the contract.

Challenge File [here](./test/01-PrivateData.test.ts)

Run it with `yarn private-data`

## Wallet

<img width="572" alt="image" src="https://user-images.githubusercontent.com/5586894/193433493-7e792bb1-e578-4b3e-a60f-0a7e62c7b728.png">

[Link to tweet](https://twitter.com/EthernautDAO/status/1546101932040790016?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1546101932040790016%7Ctwgr%5Ec4dac13bda96d0722014d5d670694871f44b1f6f%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext2Fhtmlkey%3Da19fcc184b9711e1b4764040d3dc5c07schema%3Dtwitterurl%3Dhttps3A%2F%2Ftwitter.com%2Fethernautdao%2Fstatus%2F1546101932040790016image%3Dhttps3A%2F%2Fi.embed.ly%2F1%2Fimage3Furl3Dhttps253A252F252Fabs.twimg.com252Ferrors252Flogo46x38.png26key3Da19fcc184b9711e1b4764040d3dc5c07)

Goal: Add ourselves to the list of owners.

Challenge File [here](./test/02-Wallet.test.ts
)

Run it with ``yarn wallet``

## Car Market

<img width="571" alt="image" src="https://user-images.githubusercontent.com/5586894/193433519-d89c647c-d862-4442-8ea5-ffc5c9b4452f.png">

[Link to tweet](https://twitter.com/EthernautDAO/status/1548995357194874885?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1548995357194874885%7Ctwgr%5E6c18e289d016a219273badbfb5ead2daf8874a7e%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext2Fhtmlkey%3Da19fcc184b9711e1b4764040d3dc5c07schema%3Dtwitterurl%3Dhttps3A%2F%2Ftwitter.com%2Fethernautdao%2Fstatus%2F1548995357194874885image%3Dhttps3A%2F%2Fi.embed.ly%2F1%2Fimage3Furl3Dhttps253A252F252Fabs.twimg.com252Ferrors252Flogo46x38.png26key3Da19fcc184b9711e1b4764040d3dc5c07)

Goal: Be able to mint and own two cars.

Challenge File [here](./test/03-CarMarket.test.ts)

Run it with `yarn car-market`

## Vending Machine

<img width="575" alt="image" src="https://user-images.githubusercontent.com/5586894/193433559-1c063708-daca-4fc6-a591-251f6125b516.png">

[Link to tweet](https://twitter.com/EthernautDAO/status/1551211568926425089?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1551211568926425089%7Ctwgr%5E6188c0bec3522ec9d5733a9c5806526663ccbdb4%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext2Fhtmlkey%3Da19fcc184b9711e1b4764040d3dc5c07schema%3Dtwitterurl%3Dhttps3A%2F%2Ftwitter.com%2Fethernautdao%2Fstatus%2F1551211568926425089image%3Dhttps3A%2F%2Fi.embed.ly%2F1%2Fimage3Furl3Dhttps253A252F252Fabs.twimg.com252Ferrors252Flogo46x38.png26key3Da19fcc184b9711e1b4764040d3dc5c07)

Goal: To drain all the balance from the contract.

Challenge File [here](./test/04-VendintMachine.test.ts)

Run it with `yarn vending-machine`

## Ethernaut DAO Token

<img width="572" alt="image" src="https://user-images.githubusercontent.com/5586894/193433430-a4d070b9-d131-4a8f-a697-3a779eeee869.png">

[Link to tweet](https://twitter.com/EthernautDAO/status/1553742280967835648?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1553742280967835648%7Ctwgr%5E4246f723fd6fb61eb3318fa213edfa25fedd79f1%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext2Fhtmlkey%3Da19fcc184b9711e1b4764040d3dc5c07schema%3Dtwitterurl%3Dhttps3A%2F%2Ftwitter.com%2Fethernautdao%2Fstatus%2F1553742280967835648image%3Dhttps3A%2F%2Fi.embed.ly%2F1%2Fimage3Furl3Dhttps253A252F252Fabs.twimg.com252Ferrors252Flogo46x38.png26key3Da19fcc184b9711e1b4764040d3dc5c07)

Challenge File [here](./test/05-EthernautDAOToken.test.ts)

Run it with `yarn ethernaut-dao-token`

## Hackable

Challenge File [here](./test/06-Hackable.test.ts)

Run it with `yarn hackable`

## Switch

<img width="571" alt="image" src="https://user-images.githubusercontent.com/5586894/193433397-91d57269-a52e-4145-9e0a-4ffab54992c5.png">

[Link to tweet](https://twitter.com/EthernautDAO/status/1558814930920431617?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1558814930920431617%7Ctwgr%5E29f61e52202734a54c6e086aeef673e47b580d23%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext2Fhtmlkey%3Da19fcc184b9711e1b4764040d3dc5c07schema%3Dtwitterurl%3Dhttps3A%2F%2Ftwitter.com%2Fethernautdao%2Fstatus%2F1558814930920431617image%3Dhttps3A%2F%2Fi.embed.ly%2F1%2Fimage3Furl3Dhttps253A252F252Fabs.twimg.com252Ferrors252Flogo46x38.png26key3Da19fcc184b9711e1b4764040d3dc5c07)

Challenge File [here](./test/07-Switch.test.ts)

Run it with `yarn switch`

## Vulnerable NFT

<img width="578" alt="image" src="https://user-images.githubusercontent.com/5586894/193433376-77c6b3e3-adb2-40c4-b4ae-6c31d9ca10d5.png">

[Link to tweet](https://twitter.com/EthernautDAO/status/1561352425394515968?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1561352425394515968%7Ctwgr%5E3eeb3906a3b913f9bc2b0f2abd1d4f6d1e291c5d%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext2Fhtmlkey%3Da19fcc184b9711e1b4764040d3dc5c07schema%3Dtwitterurl%3Dhttps3A%2F%2Ftwitter.com%2Fethernautdao%2Fstatus%2F1561352425394515968image%3Dhttps3A%2F%2Fi.embed.ly%2F1%2Fimage3Furl3Dhttps253A252F252Fabs.twimg.com252Ferrors252Flogo46x38.png26key3Da19fcc184b9711e1b4764040d3dc5c07)

Challenge File [here](./test/08-VulnerableNFT.test.ts)

Run it with `yarn vulnerable-nft`
