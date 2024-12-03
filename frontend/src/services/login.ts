import axiosInstance from "@/utils/axiosInstance";

const login = async (payload: object) =>{
    try{
        const response = await axiosInstance("/auth/signin", payload)
        return response.data
    }catch (err){
        console.error("Error logging in:", err)
        throw err
    }
}



const AuthService = {login}

export default AuthService