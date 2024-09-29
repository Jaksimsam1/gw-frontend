import axios, { Axios } from "axios";

const instance: Axios = axios.create({
    baseURL: process.env.REACT_APP_TEST_REQ_SERVER,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

instance.interceptors.request.use(function (config) {
    return config;
})

instance.interceptors.response.use(
    (response) => {
        return Promise.resolve(response)
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default instance