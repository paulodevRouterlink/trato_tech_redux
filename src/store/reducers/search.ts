import { createSlice } from '@reduxjs/toolkit'

const initialState: string = ''

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchingAction: (state, { payload }) => payload,
    resetSearching: () => initialState,
  },
})

export const { resetSearching, changeSearchingAction } = searchSlice.actions

export default searchSlice.reducer
