import { AnyAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit'

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>

export type RootState = ReturnType<typeof configureStore>
