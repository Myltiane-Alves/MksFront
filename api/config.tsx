import axios from "axios";

const api = axios.create({
    timeout: 30000,
    baseURL: "https://mks-challenge-api-frontend.herokuapp.com/api/v1",
    headers: {
        "Content-Type": "application/json"
    },
});

export default api;