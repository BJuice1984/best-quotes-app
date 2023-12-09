import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from '../../shared/config/hooks/hooks'
import styles from './styles.module.scss'
import { fetchPosts, setCurrentPage } from '@src/shared/api/typicode/postsApi'
import { Post } from '@src/shared/api'
import { PostRow } from '@src/entities/post-row'

const PostListPage = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const posts = useSelector((store: { posts: { data: Post[] } }) => store.posts.data)

    const currentPage = useSelector(
        (store: { posts: { currentPage: number } }) => store.posts.currentPage
    )
    const limit = useSelector((store: { posts: { limit: number } }) => store.posts.limit)
    const hasMoreData = useSelector(
        (store: { posts: { hasMoreData: boolean } }) => store.posts.hasMoreData
    )

    useEffect(() => {
        if (hasMoreData) {
            void dispatch(fetchPosts({ page: currentPage, limit: limit }))
        }
    }, [dispatch, currentPage, limit, hasMoreData])

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

    return (
        <section className={styles.list}>
            <h2 className={styles.title}>PostListPage</h2>
            {posts?.map(post => (
                <PostRow key={post.id} data={post} />
            ))}
        </section>
    )
}

export default PostListPage
