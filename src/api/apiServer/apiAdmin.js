import axios from "./index";

export default {
    getWhitelist: (skip, limit) => axios.get(`/whitelist?skip=${skip}&limit=${limit}`),
    addAddressWhiteList: (wallets) => axios.post('/whitelist_add', { wallets }),
    removeAddressWhiteList: (wallets) => axios.post('/whitelist_remove', { wallets })
}