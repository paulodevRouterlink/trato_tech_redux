import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: string = ''

const searchSlice = createSlice({
  name: 'search',
  initialState: '' as string,
  reducers: {
    changeSearchingAction: (_state, { payload }: PayloadAction<string>) =>
      payload,
    resetSearching: () => initialState,
  },
})

export const { resetSearching, changeSearchingAction } = searchSlice.actions

export const searchReducer = searchSlice.reducer
