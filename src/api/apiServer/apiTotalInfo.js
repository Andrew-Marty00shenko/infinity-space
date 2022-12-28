import axios from "./index";

export default {
    getTotals: () => axios.get('/totals')
}