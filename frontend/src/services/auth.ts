import axiosInstance from "@/utils/axiosInstance";

const login = async (payload: object) =>{
    try{
        const response = await axiosInstance.post("/auth/signin", payload)
        return response.data
    }catch (err){
        console.error("Error logging in:", err)
        throw err
    }
}

const refreshToken = async (payload: string) =>{
    try{
        const response = await axiosInstance.post("/auth/refreshToken", payload)
        return response.data
    }catch (err){
        console.error("Error refreshing token:", err)
        throw err
    }
}

const SignUp = async (payload: object) =>{
    try {
        const response = await axiosInstance.post("/auth/signup", payload)
        return response.data
    }catch (err){
        console.error("Failed to create user: ", err)
        throw err
    }
}

const ForgotPassword = async (payload: object) =>{
    try{
        const response = await axiosInstance.post("/auth/forgot-password", payload)
        return response.data
    }catch (err){
        console.error("Failed to send password reset email: ", err)
        throw err
    }
}




const AuthService = {
    login,
    refreshToken,
    SignUp,
    ForgotPassword,
}

export default AuthService