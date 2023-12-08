import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPostsList } from './posts'
import { Post } from '..'

interface FetchState {
    data: Post[] | null
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: FetchState = {
    data: null,
    status: 'idle',
    error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
    try {
        const res = await getPostsList()
        return res.data
        // eslint-disable-next-line
    } catch (error: any) {
        // eslint-disable-next-line
        return rejectWithValue({ message: error.message })
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                const errorPayload = action.payload as {
                    message: string
                }
                state.status = 'failed'
                state.error = errorPayload?.message
            })
    },
})

export default postsSlice.reducer
