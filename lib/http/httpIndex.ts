/*
 * @Author: guokai05
 * @Date: 2023-02-19 22:31:15
 * @LastEditors: guokai05
 * @LastEditTime: 2023-02-21 16:18:27
 */
import axios from 'axios';
import axiosRetry from 'axios-retry';
import { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
const whiteRetry = new Set(['ECONNABORTED', undefined, 0]);
import { defaultConfig } from '@/lib/env';
import toast from 'react-hot-toast'
import { useUserStore } from '@/lib/stores/user'; // 导入 Zustand store

const BACKEND_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://runestone-api.342games.com/api/';


// 创建 axios 请求实例
const serviceAxios = axios.create({
  baseURL: BACKEND_URL,
  timeout: 90 * 1000, // 请求超时设置
  withCredentials: false, // 跨域请求是否需要携带 cookie
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    token: null
  },
  validateStatus() {
    // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
    return true;
  }
});

axiosRetry(serviceAxios, {
  retries: 2, // 重复请求次数
  shouldResetTimeout: true, //  重置超时时间
  retryDelay: (retryCount) => {
    return retryCount * 10000; // 重复请求延迟
  },
  retryCondition: (err) => {
    // true为打开自动发送请求，false为关闭自动发送请求
    const { code, message } = err;
    return whiteRetry.has(<string>code) || message.includes('timeout');
  }
});

// 请求拦截器
serviceAxios.interceptors.request.use(
  (config: any) => {
    const token = useUserStore.getState().token; // 获取 token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 将 token 添加到请求头
    }
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
serviceAxios.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

// 统一发起请求的函数
async function request<T>(options: AxiosRequestConfig) {
  try {
    const response = await serviceAxios.request<T>(options);
    console.log('response', response)
    const { status, data = {} }: any = response;
    // 处理 HTTP 状态码
    if (status == 500 && data?.message === "Error deleting encryption key") {
      return Promise.resolve({
        success: true,
        message: 'Success'
      })
    }
    if (status < 200 || status >= 500) {
      return Promise.reject(data);
    }
    if (data?.code === 403) {
      console.log('useUserStore', useUserStore)
      useUserStore.getState().clearInfo()
    }
    console.log('data', data);

    // if (data?.code != '200' && !(data?.success === true)) {
    //   toast.error(data?.message || data?.msg || data?.error);
    // }


    // if (data?.code === '333') {
    //   window.localStorage.removeItem('SampleStore');
    //   window.location.replace('/login');
    // }

    return Promise.resolve(data);
  } catch (error: any) {
    console.log('error', error);
    return Promise.reject(error);
  }
}

export default request;
