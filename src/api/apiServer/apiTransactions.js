import axios from "./index";

export default {
    getAllTransactions: (skip, limit) => axios.get(`/total_transactions?skip=${skip}&limit=${limit}`),
    getUserTransactions: (skip, limit, user_id) => axios.get(`/user_transactions?skip=${skip}&limit=${limit}&user_id=${user_id}`)
}