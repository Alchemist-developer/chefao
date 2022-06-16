import { configureStore } from "@reduxjs/toolkit"

import usersSlice from "./users"
import postsSlice from "./post"

export const store = configureStore({
    reducer: {
        usersSlice,
        postsSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch