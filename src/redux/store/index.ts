import { configureStore } from '@reduxjs/toolkit'
 import authReducer from '../slices/authSlice'
 import studentDataReducer from '../slices/studentDataSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    studentData:studentDataReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch