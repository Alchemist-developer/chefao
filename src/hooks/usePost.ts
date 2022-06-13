import { useEffect, useState } from "react";
import { renderPosts } from "../interfaces/posts";
import { Post } from "../types";

const usePost = () => {
    const [postList, setPostList] = useState<Post[]>([] as Post[]);

    useEffect(() => {
        renderPosts().then(posts => setPostList(posts));
    })

    return postList;
}

export default usePost;