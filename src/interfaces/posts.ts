import axios from "axios";
import { Post } from "../types";

const api = axios.create({
    baseURL: "http://localhost:3333"
});

export const renderPosts = (): Promise<Post[]> => {
 return api.get<Post[]>("/posts").then(response => response.data);
}