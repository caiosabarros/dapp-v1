// Source code to interact with smart contract

import contractJSON from '../build/contracts/GoBlockchain.json' assert { type: "json" };

// web3 provider with fallback for old version
window.addEventListener('load', async () => {
    // New web3 provider
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // ask user for permission
            await ethereum.enable();
            // user approved permission
        } catch (error) {
            // user rejected permission
            console.log('user rejected permission');
        }
    }
    // Old web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
    }
  });
  console.log (window.web3.currentProvider)

// New instance of web3
const web3 = new Web3(window.web3.currentProvider);

var contractAddress = "0xC7aF5EeEA580F0064f00ee20d1467b7B50C39E34";
console.log(contractAddress);

var contract = new web3.eth.Contract(contractJSON.abi, contractAddress);

function balance(){
    saldo = $("#")
}









// Code to inspire other functions calls
async function getBlockNumber() {
    const latestBlockNumber = await web3.eth.getBlockNumber();
    console.log(latestBlockNumber);
    return latestBlockNumber;
  }
  
getBlockNumber()

var balance = async (account) => {
    return await web3.eth.getBalance(account);
}

console.log(await balance(contractAddress));

