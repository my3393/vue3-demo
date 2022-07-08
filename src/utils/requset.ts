import axios from "axios";
import { message } from "ant-design-vue";
const service = axios.create({
    baseURL: process.env.VUE_APP_APIURL,
    timeout: 5000
});
// 添加请求拦截器
service.interceptors.request.use(function (config) {

    return config;
}, function (error) {
// 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么

    const data = response.data;
    if(data.code === 0) {
        return Promise.resolve(data);
    }else{
        message.info(data.message);
        return Promise.reject(data);
    }
}, function (error) {
    const data = JSON.parse(error.request.response);
    message.info(data.message);
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service;