import { createAction, ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { LoadOneCategoryType } from '@/store/ducks/categories'

export const loadCategories = createAction('categories/loadCategories')

export const loadOneCategory: ActionCreatorWithPayload<
  LoadOneCategoryType,
  string
> = createAction<LoadOneCategoryType>('categories/loadOneCategory')
