import axios from 'axios'
import { API_URL } from '@src/shared/config'

export const apiInstance = axios.create({
    baseURL: API_URL,
})
