


import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from "@/redux/features/category/CategoriesSlice"
import postsSlice from './features/blog/PostsSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        category: categoriesSlice,
        post: postsSlice,
        

        },
    devTools: process.env.NODE_ENV !== 'production',
  })
}
