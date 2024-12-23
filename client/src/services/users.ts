
import axiosInstanceJwt from "@/utils/axiosInstanceJwt";

const fetch = async ()=>{
    try{
        const response = await axiosInstanceJwt.get("users")
        return response.data
    }catch (err){
        console.error("Failed to fetch users: "+ err)
        throw err
    }
}

const fetchById = async (id: number) => {
    try{
        const response = await axiosInstanceJwt.get(`users/${id}`)
        return response.data
    }catch (err){
        console.error("Failed to fetch user by id: "+ err)
        throw err
    }
}

const post = async (payload: object) =>{
    try{
        const response = await axiosInstanceJwt.post("users/save", payload)
        return response.data
    }catch (err){
        console.error("Failed to create user: "+ err)
        throw err
    }
}

const put = async (payload: object) => {
    try{
        const response = await axiosInstanceJwt.put("users/edit", payload)
        return response.data
    }catch (err){
        console.error("Failed to update user: "+ err)
        throw err
    }
}

const deleteUser = async (id: number) => {
    try{
        await axiosInstanceJwt.delete(`users/delete/${id}`)
    }catch (err){
        console.error("Failed to delete user by id: "+ err)
        throw err
    }
}


const UsersService = {fetch, fetchById, post, put, deleteUser}

export default UsersService;