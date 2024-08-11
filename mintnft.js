const ethers = require('ethers');
require('dotenv').config();
const {random} = require('./utils');

const nft1Address = '0x609c2f307940B8f52190b6D3D3A41C762136884E';
const nft2Address = '0x16c0Baa8a2aA77fab8d0aeCe9B6947EE1b74B943';
const nft3Address = '0xc5471e35533E887f59Df7A31F7C162Eb98F367F7';
const nft4Address = '0xF861f5927C87bC7C4781817b08151d638dE41036';
const nft5Address = '0x954E8AC11c369ef69636239803a36146BF85e61B';
const nft6Address = '0xa576aC0A158EBDCC0445e3465adf50E93dD2CAd8';
const nft7Address = '0x17863384C663c5f95e4e52D3601F2FF1919ac1aA';
const nft8Address = '0x4C2656a6D1c0ecac86f5024e60d4F04DBB3d1623';
const nft9Address = '0x4E86532CEDF07c7946e238bD32Ba141b4ed10c12';
const nft10Address = '0x6b9db0FfCb840C3D9119B4fF00F0795602c96086';
const nftAbi = [{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"string","name":"baseURI_","type":"string"},{"internalType":"uint256","name":"ref_precent_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRefPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"ref","type":"address"}],"name":"safeMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newPercent","type":"uint256"}],"name":"setRefPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const contractList = [
  [nft1Address, 'zkstar1'], 
  [nft2Address, 'zkstar2'],
  [nft3Address, 'zkstar3'], 
  [nft4Address, 'zkstar4'],
  [nft5Address, 'zkstar5'], 
  [nft6Address, 'zkstar6'],
  [nft7Address, 'zkstar7'], 
  [nft8Address, 'zkstar8'],
  [nft9Address, 'zkstar9'],
  [nft10Address, 'zkstar10'],
];

const mintNft = async(wallet, address) => {
    const randomNumber = random(contractList.length);
    try {
    const randomNftContract = new ethers.Contract(contractList[randomNumber][0], nftAbi, wallet);
    const nonce = await wallet.getNonce();
    if(await randomNftContract.safeMint.staticCall(address, {
      value: ethers.parseUnits("0.0001"),
      nonce
    })) {
      const response = await randomNftContract.safeMint(address, {
        value: ethers.parseUnits("0.0001"),
        nonce
      });
      const receipt = await response.wait();
      if(receipt.status === 1) {
        console.log(`success[mintNft: ${contractList[randomNumber][1]}, ${address}]`);
      } else {
        console.log(`fail[mintNft: ${contractList[randomNumber][1]}, ${address}]`);
      }
    }
  } catch(err) {
    console.error(`error[mintNft: ${contractList[randomNumber][1]}, ${address}]`);
    throw err;
  }
}

module.exports = {
  mintNft
}
