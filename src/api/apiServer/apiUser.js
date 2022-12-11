import axios from "./index";

export default {
    getLinksClicked: (user_id) => axios.get(`/clicks?user_id=${user_id}`),
    postLinkClicked: (user_id) => axios.post('/link_clicked', { user_id })
}