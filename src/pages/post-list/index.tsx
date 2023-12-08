import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from '../../shared/config/hooks/hooks'
import styles from './styles.module.scss'
import { fetchPosts } from '@src/shared/api/typicode/postsApi'
import { Post } from '@src/shared/api'

const PostListPage = () => {
    const dispatch = useDispatch()
    const posts = useSelector((store: { posts: { data: Post[] } }) => store.posts.data)

    console.log(posts)
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])
    return (
        <section className={styles.list}>
            <h2 className={styles.title}>PostListPage</h2>
            {/* <img
                className={styles.img}
                src='images/picasso-horizontal.jpg'
                alt='Картинка. Наброски Пикассо'
            /> */}
        </section>
    )
}

export default PostListPage
