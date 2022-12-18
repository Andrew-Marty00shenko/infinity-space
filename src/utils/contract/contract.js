import Web3 from "web3";
import contractAbi from "./contractAbi.json";
import contractBUSDAbi from "./contractBUSDAbi.json";

const BINANCE_RPC_TEST = ' https://bsc-dataseed.binance.org/';
// const HASH_LINK = 'https://testnet.bscscan.com';

const web3 = new Web3(new Web3.providers.HttpProvider(BINANCE_RPC_TEST));

export const contract = new web3.eth.Contract(contractAbi.abi, contractAbi.address);
export const contractBUSD = new web3.eth.Contract(contractBUSDAbi.abi, contractBUSDAbi.address);

export const connectWallet = async () => {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });

        window.web3 = new Web3(window.ethereum);

        return accounts[0];
    }

    return false;
};

export const getBnbBalance = async (wallet) => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);

        const bnbBalance = await window.web3.eth.getBalance(wallet)
            .then(res => {
                const convertedResult = Math.ceil(window.web3.utils.fromWei(res) * 10000) / 10000;
                return convertedResult;
            });

        return bnbBalance;
    }
};

export const getBUSDBalance = async (wallet) => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);

        const BUSDBalance = await contractBUSD.methods[
            'balanceOf(address)'
        ](wallet)
            .call()
            .then(res => {
                const convertedResult = Math.ceil(window.web3.utils.fromWei(res) * 10000) / 10000;
                return convertedResult;
            });

        return BUSDBalance;
    }
}