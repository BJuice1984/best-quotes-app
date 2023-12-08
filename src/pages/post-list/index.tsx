import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles.module.scss'
import { fetchPosts } from '@src/shared/api/typicode/postsApi'
import { Post } from '@src/shared/api'

const PostListPage = () => {
    const dispatch = useDispatch()
    const posts = useSelector((store: { posts: { data: Post[] } }) => store.posts.data)

    console.log(posts)
    useEffect(() => {
        // Выполняем запрос при монтировании компонента
        // eslint-disable-next-line
        //@ts-ignore
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
