import { configureStore } from '@reduxjs/toolkit'
import postsSlice from '@src/shared/api/typicode/postsApi'

export const store = configureStore({
    reducer: {
        posts: postsSlice,
    },
})
