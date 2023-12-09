import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from '@src/shared/hooks/hooks'
import styles from './styles.module.scss'
import { fetchPosts } from '@src/shared/api/typicode/postsApi'
import { Post } from '@src/shared/api'
import { PostRow } from '@src/entities/post/ui'
import postsModel from '@src/entities/post/model/postsModel'

const PostListPage = () => {
    const { useScroll } = postsModel()
    useScroll()

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
