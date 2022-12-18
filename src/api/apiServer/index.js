import axios from 'axios';

axios.defaults.baseURL = 'https://api.in-space.io:8443';

window.axios = axios;

export default axios;