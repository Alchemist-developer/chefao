import axios from "axios";
import { Permission } from "../store/users";

interface SignIn {
    email: string,
    password: string,
}

interface User extends SignIn {
    id: number,
    firstname: string,
    lastname: string,
    age: number
    permission: Permission
}

export const baseUrl = axios.create({
    baseURL: "http://localhost:3333"
})

export const postUser = async (user: Omit<User, "id">) => {
    console.log("aqui", user)
    try {
        const response = await baseUrl.post("/register", user)
        return response.data
    } catch (error: any) {
        alert("Error:"+ error.response.data)
    }
}

export const postSignIn = async (signIn: SignIn) => {
    try {
        const response = await baseUrl.post("/signin", signIn)
        return response.data
    } catch (error: any) {
        alert("Error:"+ error.response.data)
    }
}