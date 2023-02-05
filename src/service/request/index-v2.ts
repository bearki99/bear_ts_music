import { removeAccessToken, removeRefreshToken } from '@/service/request/auth.service';
import axios from 'axios';
import { getAccessToken, getRefreshToken, setAccessToken } from './auth.service';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
// 关于拦截器的封装
interface BearInterceptors<T> {
  requestSuccessFn: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestFailFn: (err: any) => any;
  responseSuccessFn: (res: T) => T;
  responseFailFn: (err: any) => void;
}

interface BearRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: BearInterceptors<T>;
}
// 定义一个flag 判断是否刷新Token中

class NewBearRequest {
  instance: AxiosInstance;
  constructor(config: BearRequestConfig) {
    this.instance = axios.create(config);
    // 添加拦截器 第一项-成功的回调 第二项-失败的回调
    this.instance.interceptors.request.use(
      (config) => {
        const token = getAccessToken();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (err) => {
        return err;
      },
    );
    this.instance.interceptors.response.use(
      async (res) => {
        return res;
      },
      async (err) => {
        const originalConfig = err.config;

        if (originalConfig.url !== '/mylogin' && err.response) {
          if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;

            try {
              const refreshToken = getRefreshToken();
              const oldAccessToken = getAccessToken();
              const res = await this.instance.post('/myrefresh', {
                refreshToken,
              });
              const { token } = res.data;
              setAccessToken(token);
              originalConfig.headers.Authorization = `Bearer ${token}`;
              console.log('Old access token', oldAccessToken);
              console.log('Refresh your token!!!');
              console.log('New access token', token);
              originalConfig._retry = false;
              return this.instance(originalConfig);
            } catch (_error) {
              originalConfig._retry = false;
              removeRefreshToken();
              removeAccessToken();
              return Promise.reject(_error);
            }
          }
        }
        removeRefreshToken();
        removeAccessToken();
        window.location.reload();
        return Promise.reject(err);
      },
    );
    if (config.interceptors) {
      this.instance.interceptors.request.use(
        config.interceptors.requestSuccessFn,
        config.interceptors.requestFailFn,
      );
      this.instance.interceptors.response.use(
        config.interceptors.responseSuccessFn,
        config.interceptors.responseFailFn,
      );
    }
  }
  //   封装网络请求的方法
  request<T = any>(config: BearRequestConfig<T>) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(config);
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res);
          }
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get<T = any>(config: BearRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' });
  }
  post<T = any>(config: BearRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' });
  }
  delete<T = any>(config: BearRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' });
  }
  patch<T = any>(config: BearRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' });
  }
}
export default NewBearRequest;
