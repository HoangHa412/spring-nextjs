import axios from "axios";
import {API_BASE_URL} from "@/utils/constant";


const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

export default axiosInstance;