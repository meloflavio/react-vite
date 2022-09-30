import axios from 'axios';

const Api = axios.create({
  baseURL: '/back',
});
Api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default Api;
