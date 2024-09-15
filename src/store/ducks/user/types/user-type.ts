import { CardsProps, UserProps } from '@/components/types'

type UserCards = CardsProps & { rate: number }

export type UserType = UserProps & {
  cards: UserCards[]
}
