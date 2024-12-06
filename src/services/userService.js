import client from "../config/axiosConfig.js";

client.interceptors.response.use((response) => {
        console.log(response);
        sessionStorage.setItem('accessToken', response.data.accessToken);
        return response;
    },
    (error) => {
        return Promise.reject(error);
    })

class UserService {
    register = async (firstname, lastname, email, password) => {
        return await client.post('/auth/register', {firstname, lastname, email, password});
    }

    login = async (email, password) => {
        return await client.post('/auth/login', {email, password});
    }
}

export default new UserService();