import axios from "axios";
import Qs from "qs";

// 创建axios实例
const instance = axios.create({
  // baseURL: process.env.BASE_URL,
  timeout: 30000, // 请求超时时间
});

instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做处理...
    config.headers = Object.assign(
      config.method === "get"
        ? {
            Accept: "application/json",
            "Content-Type": "application/json; charset=UTF-8",
          }
        : {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
      config.headers
    );

    if (config.method === "post") {
      const contentType = config.headers["Content-Type"];
      // 根据Content-Type转换data格式
      if (contentType) {
        if (contentType.includes("multipart")) {
          // 类型 'multipart/form-data;'
          // config.data = data;
        } else if (contentType.includes("json")) {
          // 类型 'application/json;'
          // 服务器收到的raw body(原始数据) "{name:"nowThen",age:"18"}"（普通字符串）
          config.data = JSON.stringify(config.data);
        } else {
          // 类型 'application/x-www-form-urlencoded;'
          // 服务器收到的raw body(原始数据) name=nowThen&age=18
          config.data = Qs.stringify(config.data);
        }
      }
    }
    return Promise.resolve(config);
  },
  function (error) {
    // 对请求错误做处理...
    return Promise.reject(error);
  }
);

// 实例添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做处理，以下根据实际数据结构改动！！...

    // const { reason_code } = response.data || {};
    // if (reason_code === '001') { // 请求超时，跳转登录页
    //   const instance = Toast('请求超时，即将跳转到登录页面...');
    //   setTimeout(() => {
    //     instance.close();
    //     window.location.href = '/login';
    //   }, 3000)
    // }
    return Promise.resolve(checkStatus(response));
  },
  function (error) {
    // 对响应错误做处理...
    if (error.response) {
      return Promise.reject(checkStatus(error.response));
    } else if (
      error.code == "ECONNABORTED" &&
      error.message.indexOf("timeout") != -1
    ) {
      return Promise.reject({ msg: "请求超时" });
    } else {
      return Promise.reject({});
    }
  }
);
