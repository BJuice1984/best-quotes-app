import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from '@src/shared/hooks/hooks'
import { useSelector } from 'react-redux'
import { setCurrentPage } from '@src/shared/api/typicode/postsApi'

const postsModel = () => {
    function useScroll() {
        const [loading, setLoading] = useState(false)
        const dispatch = useDispatch()

        const currentPage = useSelector(
            (store: { posts: { currentPage: number } }) => store.posts.currentPage
        )

        const handleScroll = useCallback(() => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement

            if (scrollTop + clientHeight >= scrollHeight - 200 && !loading) {
                setLoading(true)
                setTimeout(() => {
                    dispatch(setCurrentPage(currentPage + 1))
                    setLoading(false)
                }, 1000)
            }
        }, [dispatch, loading, currentPage])

        useEffect(() => {
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }, [dispatch, currentPage, handleScroll])
    }

    return {
        useScroll,
    }
}

export default postsModel
