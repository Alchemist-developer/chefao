import { createSlice } from "@reduxjs/toolkit"
import { Permission, UserState, Post, PostState } from "../../types"

const initialState: PostState = {
    post: [] as Post[]
}

const usersSlice = createSlice({
    name: "@post",
    initialState,
    reducers:{
        //SignIn
        getPost(state, action){
            Object.assign(state, {
                post: action.payload.post
            })
        },
        addNewPost(state, action) {
            Object.assign(state, {
                post: [... state.post, action.payload.post]
            })
        }
    }
})

export const { getPost, addNewPost } = usersSlice.actions

export default usersSlice.reducer;