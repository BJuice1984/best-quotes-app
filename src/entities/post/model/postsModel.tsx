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

    function useScroll(containerRef: React.RefObject<HTMLDivElement | null>) {
        const dispatch = useDispatch()

        const currentPage = useSelector(
            (store: { posts: { currentPage: number } }) => store.posts.currentPage
        )

        const handleScroll = useCallback(() => {
            const containerElement = containerRef.current
            if (!containerElement || !hasMoreData) return

            const { scrollTop, clientHeight, scrollHeight } = containerElement

            if (scrollTop + clientHeight >= scrollHeight - 100) {
                setLoading(true)
                setTimeout(() => {
                    dispatch(setCurrentPage(currentPage + 1))
                    setLoading(false)
                }, 1000)
            }
        }, [dispatch, currentPage, containerRef])

        useEffect(() => {
            const containerElement = containerRef.current
            if (!containerElement) return
            containerElement.addEventListener('scroll', handleScroll)
            return () => {
                containerElement.removeEventListener('scroll', handleScroll)
            }
        }, [dispatch, currentPage, handleScroll, containerRef])
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
