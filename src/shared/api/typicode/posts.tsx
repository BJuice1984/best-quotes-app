import type { AxiosPromise } from 'axios'
import { apiInstance } from './base'
import type { Post } from './models'

const BASE_URL = '/posts'

export const getPostsList = (): AxiosPromise<Post[]> => {
    return apiInstance.get(BASE_URL)
}
