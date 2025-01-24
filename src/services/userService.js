import client, {_post} from "../config/axiosConfig.js";

client.interceptors.response.use((response) => {
        sessionStorage.setItem('accessToken', response.data.accessToken);
        return response;
    },
    (error) => {
        return Promise.reject(error);
    })

const UserService = () => {
    const register = (firstname, lastname, email, password, role) => {
        return _post('/auth/register', {firstname, lastname, email, password, role});
    };

    const login = (email, password) => {
        return _post('/auth/login', {email, password});
    };

    return { register, login };
}

export default UserService;