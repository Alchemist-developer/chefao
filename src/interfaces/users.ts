import axios from "axios";
import { User } from "../types";

const api = axios.create({
    baseURL: "http://localhost:3333"
})

export const createUser = (user: Omit<User, "id">): Promise<User> => {
    return api.post<User>("/users", user).then(response => response.data)
}