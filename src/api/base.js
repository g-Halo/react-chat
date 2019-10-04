import axios from 'axios';
import {Notification} from 'element-react';

const instance = axios.create({
  baseURL: 'http://go-chat.com/v1',
  responseType: 'json',
  timeout: 50000
});
// 拦截器，统一处理服务端的返回值
instance.interceptors.response.use((res) => {
  const {data} = res;
  if (data.status !== 200) {
    Notification({
      message: data.error,
      type: 'error'
    });
  }
  return data;
});

export default instance;

