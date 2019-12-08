import axios from 'axios';
import {Notification} from 'element-react';
import session from '../utils/session';

const instance = axios.create({
  baseURL: '/v1',
  responseType: 'json',
  timeout: 50000
});

instance.interceptors.request.use((config) => {
  const token = session.getToken();
  if (token) {
    config.headers.token = token;
  }
  config.headers.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzU4MTQwNTcsImlhdCI6MTU3NTc3ODA1NywidXNlcm5hbWUiOiJ0ZXN0MSJ9.axWBGeRF_s4dwF3xlWvAFYKc0utppFCI65p_H8syDuc';
  return config;
});

// 拦截器，统一处理服务端的返回值
instance.interceptors.response.use((res) => {
  const {data} = res;
  if (data.status !== 200) {
    Notification({
      message: data.error,
      type: 'error'
    });
    return data;
  }
  return data.data;
});

export default instance;

