import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postsApi'

describe('postsReducer', () => {
    it('should handle initial state', () => {
        const store = configureStore({ reducer: { posts: postsReducer } })

        expect(store.getState().posts).toEqual({
            data: [],
            status: 'idle',
            error: null,
        })
    })

    it('should handle fetching posts', () => {
        const store = configureStore({ reducer: { posts: postsReducer } })
        store.dispatch({
            type: 'posts/fetchPosts/pending',
        })

        expect(store.getState().posts).toEqual({
            data: [],
            status: 'loading',
            error: null,
        })
    })

    it('should handle successfully fetching posts', () => {
        const store = configureStore({ reducer: { posts: postsReducer } })
        store.dispatch({
            type: 'posts/fetchPosts/fulfilled',
            payload: [{ id: 1, title: 'Post 1' }],
        })

        expect(store.getState().posts).toEqual({
            data: [{ id: 1, title: 'Post 1' }],
            status: 'succeeded',
            error: null,
        })
    })

    it('should handle failed fetching posts', () => {
        const store = configureStore({ reducer: { posts: postsReducer } })
        store.dispatch({
            type: 'posts/fetchPosts/rejected',
            error: { message: 'Failed to fetch posts' },
        })

        expect(store.getState().posts).toEqual({
            data: [],
            status: 'failed',
            error: 'Failed to fetch posts',
        })
    })
})
