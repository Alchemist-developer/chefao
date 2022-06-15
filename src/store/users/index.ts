import { createSlice } from "@reduxjs/toolkit"
import { Permission, UserState } from "../../types"

const initialState: UserState = {
    isLogged: false,
    accessToken: "",
    permission: Permission.Nothing,
}

const usersSlice = createSlice({
    name: "@user",
    initialState,
    reducers:{
        //SignIn
        signIn(state, action){
            Object.assign(state, {
                isLogged: true,
                accessToken: action.payload.accessToken,
                permission: Permission[action.payload.permission]
            })
        },
        //SignOut
        signOut(state){
            Object.assign(state, initialState)
        }
    }
})

export const { signIn, signOut } = usersSlice.actions

export default usersSlice.reducer;