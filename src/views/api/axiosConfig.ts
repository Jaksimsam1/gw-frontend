import axios from "axios";

const instance = axios.create({
    baseURL: '',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

//set Authorization when logged in
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