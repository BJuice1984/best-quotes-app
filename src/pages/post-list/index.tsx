import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from '../../shared/config/hooks/hooks'
import styles from './styles.module.scss'
import { fetchPosts } from '@src/shared/api/typicode/postsApi'
import { Post } from '@src/shared/api'
import { PostRow } from '@src/entities/post-row'

const PostListPage = () => {
    const dispatch = useDispatch()
    const posts = useSelector((store: { posts: { data: Post[] } }) => store.posts.data)

    console.log(posts)
    useEffect(() => {
        void dispatch(fetchPosts())
    }, [dispatch])

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
