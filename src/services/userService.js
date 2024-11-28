import axios from "axios";

const baseApi = new URL("http://localhost:8080/auth");

class UserService  {
    register(users) {
        return axios.post(`${baseApi}/register`, users);
    }

    login(credentials) {
        return axios.post(`${baseApi}/login`, credentials);
    }
}

export default new UserService();