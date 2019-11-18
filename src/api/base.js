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
  config.headers.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NzM5ODYxNDYsImlhdCI6MTU3Mzk1MDE0NiwidXNlcm5hbWUiOiJ0ZXN0MSJ9.fTvF9QfdVBFLijW8WADJgZZpcrqFJqblTJQwDVHsl9w';
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

