import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { StateProps, AppDispatch } from '@/store/types/store-types'

// TODO: Use em todo o seu aplicativo em vez de `useDispatch` e `useSelector` simples
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<StateProps> = useSelector
