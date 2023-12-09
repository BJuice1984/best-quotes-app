import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from '@src/shared/hooks/hooks'
import { useSelector } from 'react-redux'
import { setCurrentPage } from '@src/shared/api/typicode/postsApi'
import { Post } from '@src/shared/api'

const usePostsModel = () => {
    const [isLoading, setLoading] = useState(false)
    const posts = useSelector((store: { posts: { data: Post[] } }) => store.posts.data)

    const currentPage = useSelector(
        (store: { posts: { currentPage: number } }) => store.posts.currentPage
    )
    const limit = useSelector((store: { posts: { limit: number } }) => store.posts.limit)
    const hasMoreData = useSelector(
        (store: { posts: { hasMoreData: boolean } }) => store.posts.hasMoreData
    )

    function useScroll() {
        const dispatch = useDispatch()

        const currentPage = useSelector(
            (store: { posts: { currentPage: number } }) => store.posts.currentPage
        )

        const handleScroll = useCallback(() => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement

            if (scrollTop + clientHeight >= scrollHeight - 200 && !isLoading) {
                setLoading(true)
                setTimeout(() => {
                    dispatch(setCurrentPage(currentPage + 1))
                    setLoading(false)
                }, 1000)
            }
        }, [dispatch, isLoading, currentPage])

        useEffect(() => {
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }, [dispatch, currentPage, handleScroll])
    }

    return {
        useScroll,
        isLoading,
        posts,
        currentPage,
        limit,
        hasMoreData,
    }
}

export default usePostsModel
