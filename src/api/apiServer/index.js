import axios from 'axios';

axios.defaults.baseURL = 'https://topmail.net.ua:8443';

window.axios = axios;

export default axios;