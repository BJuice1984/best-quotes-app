import { PostCard } from '@src/entities/post/ui'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { Post } from '@src/shared/api'

const PostDetailsPage = () => {
    const { id } = useParams()
    const posts = useSelector((store: { posts: { data: Post[] } }) => store.posts.data)
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const selectedPost = id ? posts.find(post => post.id === parseInt(id, 10)) : undefined

    return (
        <section>
            <h2>PostDetailsPage</h2>
            {selectedPost ? <PostCard data={selectedPost} /> : 'Post not found'}
        </section>
    )
}

export default PostDetailsPage
