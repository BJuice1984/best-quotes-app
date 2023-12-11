import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { Post } from '@src/shared/api'
import { Button } from '@src/shared/ui'

export type PostRowProps = {
    data: Post
}

export const PostRow = ({ data }: PostRowProps) => {
    const { title, body, id } = data

    return (
        <div className={styles.postrow}>
            <p className={styles.string}>
                {`№ ${id}: ${title}. `}
                <span className={styles.span}>{body}</span>
            </p>
            <Link to={`/posts/${id}`}>
                <Button name={'Просмотр'} />
            </Link>
        </div>
    )
}
