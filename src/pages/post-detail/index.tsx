import { PostCard } from '@src/entities/post/ui'
import { useParams } from 'react-router'
import styles from './styles.module.scss'
import { useSelector } from 'react-redux'
import { Post } from '@src/shared/api'
import { Link } from 'react-router-dom'
import { Button } from '@src/shared/ui'

const PostDetailsPage = () => {
    const { id } = useParams()
    const posts = useSelector((store: { posts: { data: Post[] } }) => store.posts.data)
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const selectedPost = id ? posts.find(post => post.id === parseInt(id, 10)) : undefined

    return (
        <section className={styles.details}>
            <h2 className={styles.title}>Questa volta la statua della madonna insieme a quelle</h2>
            {selectedPost ? (
                <PostCard data={selectedPost} />
            ) : (
                <>
                    <p>Пост не найден</p>
                    <Link to={'/'}>
                        <Button name={'На главную'} />
                    </Link>
                </>
            )}
        </section>
    )
}

export default PostDetailsPage
