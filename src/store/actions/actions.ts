import { createAction } from '@reduxjs/toolkit'

const loadCategories = createAction('categories/loadCategories')
const loadOneCategory = createAction('categories/loadOneCategory')
const loadPayment = createAction('cart/loadPayment')
const finishPayment = createAction('cart/finishPayment')

export { loadCategories, loadOneCategory, finishPayment, loadPayment }
