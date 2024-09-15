import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserType } from '@/store/ducks/user'

const userSlice = createSlice({
  name: 'user',
  initialState: {} as UserType,
  reducers: {
    addUser: (_, { payload }: PayloadAction<UserType>) => {
      return payload
    },
  },
})

export const { addUser } = userSlice.actions

export const usersReducer = userSlice.reducer
