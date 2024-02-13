import { CardsProps } from '@/components/types/cards-props'
import { UserProps } from '@/components/types/user-props'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type UserType = UserProps & {
  cards: Omit<CardsProps, 'flagId' | 'userId' | 'balance'>[]
}

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
