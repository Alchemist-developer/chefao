import axios from "axios";
import { User, SignIn } from "../types";

const api = axios.create({
    baseURL: "http://localhost:3333"
})

export const createUser = async (user: Omit<User, "id">) => {
    try{
        const response = await api.post("/users", user)
        return response.data;
    } catch(error: any) {
        alert(`Error: ${error.response.data}`)
    }
}

export const signInUser = async (signIn: SignIn) => {
    try {
        const response = await api.post("/signin", signIn);
        return response.data; 
    } catch (error: any) {
        alert (`Error: ${error.response.data}`)
    }
}