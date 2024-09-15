import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './saga/root-saga'
import { middlewares } from './middlewares'
import { reducer } from './reducers/root.reducers'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(middlewares).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store
