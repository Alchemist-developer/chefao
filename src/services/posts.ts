import axios from "axios";
import { Post } from "../types";

const api = axios.create({
    baseURL: "http://localhost:3333"
});

export const renderPosts = (): Promise<Post[]> => {
 return api.get<Post[]>("/posts").then(response => response.data);
}

export const renderPostsById = (id:number):  Promise<Post[]> => {
    return api.get<Post[]>(`/posts/${id}, post`).then(response => response.data)
}

// export const renderPostsById = async (id: number, post: Omit<Post, "id">) => {
//     try{
//         const response = await api.get<Post[]>(`/posts/${id}`, post)
//         return response.data;
//     } catch(error: any) {
//         alert(`Error: ${error.response.data}`)
//     }
// }