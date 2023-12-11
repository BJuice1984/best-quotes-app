import { useSelector } from 'react-redux'
import { useDispatch } from '@src/shared/hooks/hooks'
import { Post } from '@src/shared/api'
import { fetchPosts, setCurrentPage } from '@src/shared/api/typicode/postsApi'

const usePostsModel = () => {
    const dispatch = useDispatch()
    const posts = useSelector((store: { posts: { data: Post[] } }) => store.posts.data)

    const currentPage = useSelector(
        (store: { posts: { currentPage: number } }) => store.posts.currentPage
    )
    const limit = useSelector((store: { posts: { limit: number } }) => store.posts.limit)
    const hasMoreData = useSelector(
        (store: { posts: { hasMoreData: boolean } }) => store.posts.hasMoreData
    )

    const loadMoreItems = () => {
        if (hasMoreData) {
            void dispatch(fetchPosts({ page: currentPage, limit }))
            dispatch(setCurrentPage(currentPage + 1))
        }
    }

    return {
        posts,
        currentPage,
        limit,
        hasMoreData,
        loadMoreItems,
    }
}

export default usePostsModel
