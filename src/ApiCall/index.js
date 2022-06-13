import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
});
// instance.defaults.headers.common['Access-Control-Allow-Origin'] = "*";

// instance.interceptors.request.use(
//     config => {
//         config.headers["x-api-key"] = process.env.VUE_APP_API_KEY
//         return config;
//     },

//     error => {
//         return Promise.reject(error);
//     }
// );
export default instance;
