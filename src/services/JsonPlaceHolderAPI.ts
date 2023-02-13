import axios from "axios";

export const JPApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})