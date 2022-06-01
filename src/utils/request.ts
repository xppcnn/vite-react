import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { message } from 'antd';
import { ResponseData } from './type';

export const instance = axios.create({
  baseURL: '/api'
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: 'ddddd'
      }
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse<ResponseData>) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  (error: AxiosError) => {
    console.log('🚀 ~ file: request.ts ~ line 37 ~ error', error);
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
const request = async <T = any>(config: AxiosRequestConfig): Promise<ResponseData<T>> => {
  try {
    const { data } = await instance.request<ResponseData<T>>(config);
    return data;
  } catch (err) {
    const error = err as AxiosError<any>;
    if (error.response) {
      if (error.response.status === 500) {
        message.error('服务器异常，请联系后端');
      }
      if (error.response.status === 400) {
        message.error('错误的请求');
      }
    } else if (error.request) {
      message.error(error.request);
    } else {
      message.error(error.message);
    }
    return {
      code: -1,
      message: '',
      data: null as any
    };
  }
};

export default request;
