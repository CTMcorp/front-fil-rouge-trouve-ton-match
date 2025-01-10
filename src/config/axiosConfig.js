
import axios from "axios";

const client = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json'
    }
});

client.interceptors.request.use(
    (config) => {
        let token;
        if (token && config.url !== '/auth/register') {
            token = sessionStorage.getItem('accessToken');
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
)

export default client;

/*
const _get = (url, config = {}) =>  {
    return client.get(url, config);
}

const _delete = (url, config = {}) =>  {
    return client.delete(url, config);
}

const _post = (url, data = {}, config = {}) =>  {
    return client.post(url, data, config);
}

const _put = (url, data = {}, config = {}) =>  {
    return client.put(url, data, config);
}

export { _get, _delete, _post, _put};*/
