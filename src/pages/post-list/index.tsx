import { memo, useEffect } from 'react'
import { FixedSizeList as List } from 'react-window'
import { useDispatch } from '@src/shared/hooks/hooks'
import styles from './styles.module.scss'
import { fetchPosts, setCurrentPage } from '@src/shared/api/typicode/postsApi'
import { PostRow } from '@src/entities/post/ui'
import postsModel from '@src/entities/post/model/postsModel'

const PostListPage = () => {
    const { posts, currentPage, limit, loadMoreItems } = postsModel()
    const dispatch = useDispatch()

    useEffect(() => {
        void dispatch(fetchPosts({ page: currentPage, limit: limit }))
        dispatch(setCurrentPage(currentPage + 1))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
        <div style={style}>{<PostRow key={posts[index].id} data={posts[index]} />}</div>
    )
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const itemCount = posts?.length || 0

    return (
        <section className={styles.list}>
            <h1 className={styles.title}>Cogitationes inanes latine</h1>
            <List
                className={styles.container}
                height={1000}
                itemCount={itemCount}
                itemSize={100}
                width={'90%'}
                onItemsRendered={({ visibleStopIndex }) => {
                    if (visibleStopIndex === itemCount - 1) {
                        loadMoreItems()
                    }
                }}
            >
                {Row}
            </List>
        </section>
    )
}

export default memo(PostListPage)
