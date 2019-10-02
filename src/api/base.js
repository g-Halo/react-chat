import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5001/v1',
  responseType: 'json',
  timeout: 50000
});
// 拦截器，统一处理服务端的返回值
instance.interceptors.response.use((res) => {
  const {data} = res;
  return data;
});

export default instance;

