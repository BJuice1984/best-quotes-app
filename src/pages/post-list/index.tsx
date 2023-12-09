import { useEffect } from 'react'
import { useDispatch } from '@src/shared/hooks/hooks'
import styles from './styles.module.scss'
import { fetchPosts } from '@src/shared/api/typicode/postsApi'
import { PostRow } from '@src/entities/post/ui'
import postsModel from '@src/entities/post/model/postsModel'
import Preloader from '@src/shared/ui/preloader'

const PostListPage = () => {
    const { useScroll, isLoading, posts, currentPage, limit, hasMoreData } = postsModel()
    useScroll()

    const dispatch = useDispatch()

    useEffect(() => {
        if (hasMoreData) {
            void dispatch(fetchPosts({ page: currentPage, limit: limit }))
        }
    }, [dispatch, currentPage, limit, hasMoreData])

    return (
        <section className={styles.list}>
            {isLoading && <Preloader />}
            <h2 className={styles.title}>PostListPage</h2>
            {posts?.map(post => (
                <PostRow key={post.id} data={post} />
            ))}
        </section>
    )
}

export default PostListPage
