import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPostsList } from './posts'
import { Post } from '..'

interface FetchState {
    data: Post[] | null
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
    currentPage: number
    limit: number
    hasMoreData: boolean
}

const initialState: FetchState = {
    data: [],
    status: 'idle',
    error: null,
    currentPage: 1,
    limit: 10,
    hasMoreData: true,
}

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (params: { page: number; limit: number }, { rejectWithValue }) => {
        try {
            const res = await getPostsList(params.page, params.limit)
            return res.data
            // eslint-disable-next-line
        } catch (error: any) {
            // eslint-disable-next-line
            return rejectWithValue({ message: error.message })
        }
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchPosts.pending, state => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = state.data ? [...state.data, ...action.payload] : action.payload
                state.hasMoreData = action.payload.length === state.limit
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                const errorPayload = action.payload as {
                    message: string
                }
                state.status = 'failed'
                state.error =
                    errorPayload.message !== '' ? errorPayload.message : 'Failed to fetch posts'
                state.hasMoreData = false
            })
    },
})
export const { setCurrentPage } = postsSlice.actions
export default postsSlice.reducer
