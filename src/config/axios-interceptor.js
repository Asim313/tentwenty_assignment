import axios from '../../services/utils/axios';

controller = new AbortController();
const CancelToken = axios.CancelToken;
source = CancelToken.source();

client = axios.create({
  baseURL: '',
});

//Axios Interceptors
client.interceptors.request.use(
  async config => {
    config.headers = {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
      'Content-Type': ['multipart/form-data'],
    };
    config.params = {
      api_key : 'ba7f2228fdddddb3dc28ec2edbcef076'
    }
    return config;
  },
  error => {
    console.log('I am here');
    Promise.reject(error);
  },
);

client.interceptors.response.use(
  response => {
    console.log('RESPONSE INTERCPTOR : ', response?.status);
    return response;
  },

  async function (error) {
    console.log('INTERCEPTOR ERROR RESPONSE : ', error?.response?.message);
    console.log('INTERCEPTOR ERROR RESPONSE CONFIG: ', error?.config);
    const originalRequest = error.config;
    if (error?.response?.status === undefined && error?.config === undefined) {
      return Promise.reject('Hi Dude');
    } else if (error?.response?.status === 401) {
      originalRequest._retry = true;
    }
    return Promise.reject(error);
  },
);

export default client;
