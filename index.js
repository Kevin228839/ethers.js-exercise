const ethers = require('ethers');
require('dotenv').config();
const {sleep, random} = require('./utils');
const {getAllAccounts} = require('./config');
const {weth} = require('./weth');
const {randApprove} = require('./approve');
const {mintNft} = require('./mintnft');
const {aaveUsdc} = require('./aave');

const main = async() => {
  try {
    const rpc = process.env.rpc
    const provider = new ethers.JsonRpcProvider(rpc);
    const fee = (await provider.getFeeData()).gasPrice;
    if(fee < 2000000000n) {
      const accountList = await getAllAccounts();
      for(let i = 0; i < accountList.length; i++) {
        const address = accountList[i].public;
        const privateKey = accountList[i].private;
        const wallet = new ethers.Wallet(privateKey, provider);
        const ethBalance = await provider.getBalance(address);
        console.log(`${address} starts...`);
        if(ethBalance > ethers.parseUnits("0.011")) {
          const randomNumber = random(16);
          switch(randomNumber) {
            case 0:
            case 2:
            case 3:
            case 4:
              await randApprove(wallet, address);
              break;
            case 1:
              await weth(wallet, address, ethBalance);
              break;
            case 5:
            case 6:
            case 7:
            case 8:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
              await mintNft(wallet, address);
              break;
            case 9:
              await aaveUsdc(wallet, address);
              break;
            case 16:
              const feeData = await provider.getFeeData();
              console.log(feeData);
              const txCount = await provider.getTransactionCount(wallet);
              console.log("tx count:", txCount);
              const nonce = await wallet.getNonce();
              console.log("nonce:", nonce);
              break;
            default:
              console.log('I am default');
              break;
          }
        } else {
          console.log(`${address} has balance lower than 0.011 eth`);
        }
        await sleep(10);
      }
    } else {
      console.log('Gas fee too high!');
    }
  } catch(err) {
    console.error(err);
  }
}

main();