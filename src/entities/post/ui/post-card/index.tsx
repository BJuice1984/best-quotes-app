import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { Post } from '@src/shared/api'
import { Button } from '@src/shared/ui'

export type PostCardProps = {
    data: Post
}

export const PostCard = ({ data }: PostCardProps) => {
    const { title, body, id } = data

    return (
        <div className={styles.postcard}>
            <p className={styles.cardstring}>Номер поста: {id}</p>
            <h3 className={styles.cardstring}>{title}</h3>
            <p className={styles.cardspan}>{body}</p>
            <Link to={'/'}>
                <Button name={'На главную'} />
            </Link>
        </div>
    )
}
