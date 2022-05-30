import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { message } from 'antd';
import { ResponseData } from './type';

const instance = axios.create({
  baseURL: '/api'
});
const request = async <T = any>(config: AxiosRequestConfig): Promise<ResponseData<T>> => {
  try {
    const { data } = await instance.request<ResponseData<T>>(config);
    switch (data.code) {
      case 200:
      case 0:
        break;
      case 401:
        break;
      default:
        message.error(data.message || data.msg);
        break;
    }
    return data;
  } catch (err) {
    const error = err as AxiosError<Object>;
    if (error.response) {
      if (error.response.status === 500) {
        message.error('服务器异常，请联系后端');
      }
      if (error.response.status === 400) {
        message.error('错误的请求');
      }
      console.log(error.response.data);
      console.log(error.response.status);
    } else if (error.request) {
      message.error(error.request);
      console.log(error.request);
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
