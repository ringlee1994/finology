import axios from 'axios';

const axios_instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});


axios_instance.interceptors.request.use(
    async function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);


export default axios_instance;