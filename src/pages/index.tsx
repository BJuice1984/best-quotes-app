import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

const PostListPage = lazy(() => import('./post-list'))
const PostDetailsPage = lazy(() => import('./post-detail'))

export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<PostListPage />} />
            <Route path='/posts/:id' element={<PostDetailsPage />} />
        </Routes>
    )
}
