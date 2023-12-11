import { useSelector } from 'react-redux'
import { Post } from '@src/shared/api'

const usePostsModel = () => {
    const posts = useSelector((store: { posts: { data: Post[] } }) => store.posts.data)

    const currentPage = useSelector(
        (store: { posts: { currentPage: number } }) => store.posts.currentPage
    )
    const limit = useSelector((store: { posts: { limit: number } }) => store.posts.limit)
    const hasMoreData = useSelector(
        (store: { posts: { hasMoreData: boolean } }) => store.posts.hasMoreData
    )

    return {
        posts,
        currentPage,
        limit,
        hasMoreData,
    }
}

export default usePostsModel
