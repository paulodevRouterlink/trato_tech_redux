import { createSlice } from '@reduxjs/toolkit'
import { UserProps } from '@/@types/UserProps'
import { CardsProps } from '@/@types/CardsProps'

type UserType = UserProps & {
  cards: Omit<CardsProps, 'flagId' | 'userId' | 'balance'>[]
}

const userSlice = createSlice({
  name: 'user',
  initialState: {} as UserType,
  reducers: {
    addUser: (_, { payload }) => {
      return payload
    },
  },
})

export const { addUser } = userSlice.actions

export default userSlice.reducer
