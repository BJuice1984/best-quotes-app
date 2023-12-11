import type { AxiosPromise } from 'axios'
import { apiInstance } from './base'
import type { Post } from './models'

const BASE_URL = '/posts'

export const getPostsList = (page: number, limit: number): AxiosPromise<Post[]> => {
    const params = {
        _page: page,
        _limit: limit,
    }
    return apiInstance.get(BASE_URL, { params })
}
