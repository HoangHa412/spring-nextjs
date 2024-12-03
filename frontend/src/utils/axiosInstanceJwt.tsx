import axios from "axios";


const axiosInstanceJwt = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
    }
})

export default axiosInstanceJwt;