import axios from "./index";

export default {
    getLinksClicked: (user_id) => axios.get(`/clicks?user_id=${user_id}`),
    postLinkClicked: (user_id) => axios.post('/link_clicked', { user_id }),
    getSignature: ({ level, sender }) => axios.post('/get_signature', { level, sender }),
    getUserData: (user_id) => axios.get(`/userdata?user_id=${user_id}`),
    getUserProfit: (user_id, start, end) => axios.get(`/user_profit?user_id=${user_id}&start=${start}&end=${end}`),
    postUserData: ({ wallet, email, phone, ip, name, country }) => axios.post('/userdata', { wallet, email, phone, ip, name, country })
}