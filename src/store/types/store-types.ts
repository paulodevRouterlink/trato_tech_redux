import store from '@/store/store'

export type StateProps = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
