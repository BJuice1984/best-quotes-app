import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook
} from 'react-redux'
import { AppDispatch, RootState } from '../config/store/models'

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook
export const useDispatch = () => dispatchHook<AppDispatch>()
