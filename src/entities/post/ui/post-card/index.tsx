import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { Post } from '@src/shared/api'

export type PostCardProps = {
    data: Post
}

export const PostCard = ({ data }: PostCardProps) => {
    const { title, body, userId, id } = data

    return (
        <div className={styles.postcard}>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>User ID: {userId}</p>
            <p>Post ID: {id}</p>
            <Link to={`/posts/${id}`}>Просмотр</Link>
        </div>
    )
}
