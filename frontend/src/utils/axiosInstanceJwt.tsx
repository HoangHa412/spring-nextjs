import axios from "axios";
import {API_BASE_URL} from "@/utils/constant";


const axiosInstanceJwt = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
    }
})

export default axiosInstanceJwt;