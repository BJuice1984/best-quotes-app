import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { Post } from '@src/shared/api'

export type PostRowProps = {
    data: Post
}

export const PostRow = ({ data }: PostRowProps) => {
    const { title, body, userId, id } = data

    return (
        <div className={styles.postrow}>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>User ID: {userId}</p>
            <p>Post ID: {id}</p>
            <Link to={`/posts/${id}`}>Просмотр</Link>
        </div>
    )
}
