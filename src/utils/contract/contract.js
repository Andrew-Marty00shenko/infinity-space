import Web3 from "web3";

export const BINANCE_RPC_TEST = 'https://data-seed-prebsc-1-s1.binance.org:8545/';
export const HASH_LINK = 'https://testnet.bscscan.com';

// export const contract = new web3.eth.Contract(contractABI.abi, contractABI.address);

// const web3 = new Web3(new Web3.providers.HttpProvider(BINANCE_RPC_TEST));

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