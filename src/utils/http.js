import axios from "axios";
import Qs from "qs";

// 创建axios实例
const instance = axios.create({
  // baseURL: process.env.BASE_URL,
  timeout: 30000, // 请求超时时间
});
instance.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded; charset=UTF-8";

instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做处理...
    config.headers["jwt"] = "";
    if (config.method === "post") {
      // const contentType = config.headers["Content-Type"];
      // 根据Content-Type转换data格式
      // 类型 'application/json;'
      // 类型 'application/x-www-form-urlencoded;'
      config.data = Qs.stringify(config.data);
    }
    // console.log("http-config:", config);
    return config;
  },
  function (error) {
    // 对请求错误做处理...
    return error;
  }
);

// 实例添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做处理
    return response.data;
  },
  function (error) {
    // 对响应错误做处理...
    return error;
  }
);

export default instance;
